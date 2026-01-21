// Photo data for OG meta tag injection
const photos = [
    { "id": "1", "title": "the golden iris", "src": "/photos/152794883_426324881976437_5993675105884712535_n.jpg", "camera": "Redmi Note 9 Pro" },
    { "id": "2", "title": "feathered precision", "src": "/photos/156437617_1332417070456584_4066747225580392003_n.jpg", "camera": "Redmi Note 9 Pro" },
    { "id": "3", "title": "rain on leaves", "src": "/photos/156832957_2816602882003429_3351462294216383610_n.jpg", "camera": "Redmi Note 9 Pro" },
    { "id": "4", "title": "shuttlecock dreams", "src": "/photos/157117569_424982245396189_3331184142365830933_n.jpg", "camera": "Redmi Note 9 Pro" },
    { "id": "5", "title": "rainbow hibiscus", "src": "/photos/189487873_777567959624537_3303595623977488373_n.jpg", "camera": "Redmi Note 9S" },
    { "id": "6", "title": "veins of life", "src": "/photos/192368916_3794620267333466_8886700311350499441_n.jpg", "camera": "Redmi Note 9 Pro" },
    { "id": "7", "title": "threading colors", "src": "/photos/292593095_575913567247417_4567678551608740203_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "8", "title": "milky way rising", "src": "/photos/292998074_433810108642026_3669620785189763590_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "9", "title": "amber gaze", "src": "/photos/300597034_1182939542565115_4312648540740838489_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "10", "title": "hazel dreams", "src": "/photos/310723998_133098365925977_2298572542607578819_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "11", "title": "coral beauty", "src": "/photos/328049535_693396592569137_3032465922087242828_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "12", "title": "midnight encounter", "src": "/photos/328315971_128527813458326_1013173037493888798_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "13", "title": "crimson scales", "src": "/photos/328356955_951142086054935_5605190900902146277_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "14", "title": "serpent portrait", "src": "/photos/328440938_215739507492923_312847233031233920_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "15", "title": "coiled danger", "src": "/photos/328484135_494288176115690_1887465401600978271_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "16", "title": "lunar phases", "src": "/photos/331584596_1162221864464471_726917498917991743_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "17", "title": "dancing flames", "src": "/photos/334811507_684727780005581_3917961687654879441_n.jpg", "camera": "Redmi Note 11 Pro+ 5G" },
    { "id": "18", "title": "monarch landing", "src": "/photos/460723613_829438112692983_437636588353510340_n.jpg", "camera": "Redmi Note 13 Pro 5G" },
    { "id": "19", "title": "autumn stillness", "src": "/photos/460823631_1528134641141989_5578478045091324982_n.jpg", "camera": "Redmi Note 13 Pro 5G" },
    { "id": "20", "title": "morning light", "src": "/photos/463142550_1648598645722494_4759688695910776970_n.jpg", "camera": "Redmi Note 13 Pro" },
    { "id": "21", "title": "jasmine bloom", "src": "/photos/491422833_972040701784204_3317117309875742152_n.jpg", "camera": "Redmi Note 13 Pro" }
];

export const config = {
    runtime: 'edge',
};

export default async function handler(request) {
    const url = new URL(request.url);
    const photoId = url.pathname.replace('/p/', '');

    const photo = photos.find(p => p.id === photoId);

    if (!photo) {
        // Photo not found, redirect to home
        return Response.redirect(new URL('/', url.origin), 302);
    }

    const origin = url.origin;

    // Fetch the actual index.html from the origin to get correct asset paths
    const indexResponse = await fetch(`${origin}/index.html`);
    let html = await indexResponse.text();

    // Replace the default meta tags with photo-specific ones
    const photoTitle = `${photo.title} - Abhinav's Pics!`;
    const photoDescription = `Photo of ${photo.title} shot on ${photo.camera}`;
    const photoImage = `${origin}${photo.src}`;
    const photoUrl = `${origin}/p/${photo.id}`;

    // Replace title
    html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${photoTitle}</title>`
    );

    // Replace meta description
    html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${photoDescription}"`
    );

    // Replace OG tags
    html = html.replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${photoTitle}"`
    );
    html = html.replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${photoDescription}"`
    );
    html = html.replace(
        /<meta property="og:image" content="[^"]*"/,
        `<meta property="og:image" content="${photoImage}"`
    );

    // Add og:url if not present, or replace it
    if (html.includes('og:url')) {
        html = html.replace(
            /<meta property="og:url" content="[^"]*"/,
            `<meta property="og:url" content="${photoUrl}"`
        );
    } else {
        html = html.replace(
            /<meta property="og:image" content="[^"]*"/,
            `<meta property="og:image" content="${photoImage}"/>\n    <meta property="og:url" content="${photoUrl}"`
        );
    }

    // Replace Twitter tags
    html = html.replace(
        /<meta name="twitter:title" content="[^"]*"/,
        `<meta name="twitter:title" content="${photoTitle}"`
    );
    html = html.replace(
        /<meta name="twitter:description" content="[^"]*"/,
        `<meta name="twitter:description" content="${photoDescription}"`
    );
    html = html.replace(
        /<meta name="twitter:image" content="[^"]*"/,
        `<meta name="twitter:image" content="${photoImage}"`
    );

    return new Response(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
    });
}
