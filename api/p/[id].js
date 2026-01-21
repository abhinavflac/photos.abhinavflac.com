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

    // Generate HTML with proper OG meta tags
    const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="icon" href="/favicons/light.png" media="(prefers-color-scheme: light)" type="image/png" sizes="32x32" />
    <link rel="icon" href="/favicons/dark.png" media="(prefers-color-scheme: dark)" type="image/png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" type="image/png" sizes="180x180" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${photo.title} - Abhinav's Pics!</title>
    <meta name="description" content="Photo of ${photo.title} shot on ${photo.camera}" />
    <meta property="og:title" content="${photo.title} - Abhinav's Pics!" />
    <meta property="og:description" content="Photo of ${photo.title} shot on ${photo.camera}" />
    <meta property="og:image" content="${origin}${photo.src}" />
    <meta property="og:url" content="${origin}/p/${photo.id}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@abhinavflac" />
    <meta name="twitter:site" content="@abhinavflac" />
    <meta name="twitter:title" content="${photo.title} - Abhinav's Pics!" />
    <meta name="twitter:description" content="Photo of ${photo.title} shot on ${photo.camera}" />
    <meta name="twitter:image" content="${origin}${photo.src}" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>`;

    return new Response(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
    });
}
