const fs = require('fs');
const path = require('path');

// Read input file
const photosTsPath = path.join('src', 'data', 'photos.ts');
const photosTsContent = fs.readFileSync(photosTsPath, 'utf8');

// Extract photos array using regex
// Matches: export const photos: Photo[] = [ ... ];
const match = photosTsContent.match(/export const photos: Photo\[\] = \[([\s\S]*?)\];/);

if (!match) {
    console.error('Could not find photos array in photos.ts');
    process.exit(1);
}

const photosArrayString = match[1];

// Evaluate the string to get a JS object (simplified approach)
// We'll parse it manually/regex to avoid executing TS code directly
// Or better, since it's just data, we can try to clean it up and parse as JSON-ish or just manipulate the string.
// But evaluating might be risky or hard with imports.
// Let's use a regex to extract each object.

const entries = [];
const objectRegex = /{\s*id:\s*'([^']*)'[\s\S]*?title:\s*'([^']*)'[\s\S]*?src:\s*'([^']*)'[\s\S]*?model:\s*'([^']*)'[\s\S]*?tags:\s*\[([^\]]*)\][\s\S]*?}/g;

let objMatch;
while ((objMatch = objectRegex.exec(photosArrayString)) !== null) {
    const id = objMatch[1];
    const title = objMatch[2];
    const src = objMatch[3];
    const cameraModel = objMatch[4]; // Extract model directly
    const tagsString = objMatch[5];

    const tags = tagsString.split(',').map(t => t.trim().replace(/'/g, ''));

    entries.push({
        id,
        title,
        src,
        camera: cameraModel,
        tags
    });
}

console.log(`Found ${entries.length} photos.`);

// Read target file
const edgeFnPath = path.join('api', 'tag', '[tagId].js');
const edgeFnContent = fs.readFileSync(edgeFnPath, 'utf8');

// Replace the photos array
const newPhotosString = 'const photos = ' + JSON.stringify(entries, null, 4) + ';';
const newContent = edgeFnContent.replace(/const photos = \[([\s\S]*?)\];/, newPhotosString);

fs.writeFileSync(edgeFnPath, newContent);
console.log('Successfully updated api/tag/[tagId].js');
