// Photo data for OG meta tag injection
const photos = [
    {
        "id": "1",
        "title": "the golden iris",
        "src": "/photos/152794883_426324881976437_5993675105884712535_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "eye",
            "portrait"
        ]
    },
    {
        "id": "2",
        "title": "feathered precision",
        "src": "/photos/156437617_1332417070456584_4066747225580392003_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "badminton",
            "sport",
            "shuttlecock"
        ]
    },
    {
        "id": "3",
        "title": "rain on leaves",
        "src": "/photos/156832957_2816602882003429_3351462294216383610_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "nature",
            "macro",
            "rain",
            "leaves"
        ]
    },
    {
        "id": "4",
        "title": "shuttlecock dreams",
        "src": "/photos/157117569_424982245396189_3331184142365830933_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "badminton",
            "sport",
            "shuttlecock"
        ]
    },
    {
        "id": "5",
        "title": "rainbow hibiscus",
        "src": "/photos/189487873_777567959624537_3303595623977488373_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "colorful",
            "nature",
            "art"
        ]
    },
    {
        "id": "6",
        "title": "veins of life",
        "src": "/photos/192368916_3794620267333466_8886700311350499441_n.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "nature",
            "macro",
            "leaf",
            "backlit"
        ]
    },
    {
        "id": "7",
        "title": "threading colors",
        "src": "/photos/292593095_575913567247417_4567678551608740203_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "macro",
            "needle",
            "colorful",
            "abstract"
        ]
    },
    {
        "id": "8",
        "title": "milky way rising",
        "src": "/photos/292998074_433810108642026_3669620785189763590_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "astrophotography",
            "milkyway",
            "night",
            "stars"
        ]
    },
    {
        "id": "9",
        "title": "amber gaze",
        "src": "/photos/300597034_1182939542565115_4312648540740838489_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "macro",
            "eye",
            "portrait"
        ]
    },
    {
        "id": "10",
        "title": "hazel dreams",
        "src": "/photos/310723998_133098365925977_2298572542607578819_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "macro",
            "eye",
            "portrait"
        ]
    },
    {
        "id": "11",
        "title": "coral beauty",
        "src": "/photos/328049535_693396592569137_3032465922087242828_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "wildlife",
            "snake",
            "coral-snake",
            "night"
        ]
    },
    {
        "id": "12",
        "title": "midnight encounter",
        "src": "/photos/328315971_128527813458326_1013173037493888798_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "wildlife",
            "snake",
            "coral-snake",
            "night"
        ]
    },
    {
        "id": "13",
        "title": "crimson scales",
        "src": "/photos/328356955_951142086054935_5605190900902146277_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "wildlife",
            "snake",
            "coral-snake",
            "night"
        ]
    },
    {
        "id": "14",
        "title": "serpent portrait",
        "src": "/photos/328440938_215739507492923_312847233031233920_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "wildlife",
            "snake",
            "coral-snake",
            "night"
        ]
    },
    {
        "id": "15",
        "title": "coiled danger",
        "src": "/photos/328484135_494288176115690_1887465401600978271_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "wildlife",
            "snake",
            "coral-snake",
            "night"
        ]
    },
    {
        "id": "16",
        "title": "lunar phases",
        "src": "/photos/331584596_1162221864464471_726917498917991743_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "astrophotography",
            "moon",
            "collage",
            "night"
        ]
    },
    {
        "id": "17",
        "title": "dancing flames",
        "src": "/photos/334811507_684727780005581_3917961687654879441_n.jpg",
        "camera": "Redmi Note 11 Pro+ 5G",
        "tags": [
            "fire",
            "matchsticks",
            "lowlight",
            "abstract"
        ]
    },
    {
        "id": "18",
        "title": "monarch landing",
        "src": "/photos/460723613_829438112692983_437636588353510340_n.jpg",
        "camera": "Redmi Note 13 Pro 5G",
        "tags": [
            "nature",
            "butterfly",
            "wildlife",
            "insect"
        ]
    },
    {
        "id": "19",
        "title": "autumn stillness",
        "src": "/photos/460823631_1528134641141989_5578478045091324982_n.jpg",
        "camera": "Redmi Note 13 Pro 5G",
        "tags": [
            "nature",
            "autumn",
            "leaves",
            "moody"
        ]
    },
    {
        "id": "20",
        "title": "morning light",
        "src": "/photos/463142550_1648598645722494_4759688695910776970_n.jpg",
        "camera": "Redmi Note 13 Pro 5G",
        "tags": [
            "abstract",
            "light",
            "curtain",
            "moody"
        ]
    },
    {
        "id": "21",
        "title": "jasmine bloom",
        "src": "/photos/491422833_972040701784204_3317117309875742152_n.jpg",
        "camera": "Redmi Note 13 Pro 5G",
        "tags": [
            "flower",
            "jasmine",
            "nature",
            "macro"
        ]
    },
    {
        "id": "22",
        "title": "purple oxalis bloom",
        "src": "/photos/17842374893546632.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "oxalis"
        ]
    },
    {
        "id": "23",
        "title": "pink blossoms glow",
        "src": "/photos/17854216472515239.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "24",
        "title": "celestial rooftop",
        "src": "/photos/17854678451528727.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars",
            "milkyway"
        ]
    },
    {
        "id": "25",
        "title": "frozen droplet",
        "src": "/photos/17858710370501475.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "water",
            "nature"
        ]
    },
    {
        "id": "26",
        "title": "stargazer tree",
        "src": "/photos/17859315656458098.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars",
            "milkyway"
        ]
    },
    {
        "id": "27",
        "title": "parijat carpet",
        "src": "/photos/17860004252493582.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "parijat"
        ]
    },
    {
        "id": "28",
        "title": "neon spiral",
        "src": "/photos/17860683293409628.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "abstract",
            "light-painting",
            "creative"
        ]
    },
    {
        "id": "29",
        "title": "red pen tip",
        "src": "/photos/17860940684395457.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "abstract"
        ]
    },
    {
        "id": "30",
        "title": "dianthus star",
        "src": "/photos/17868260225322601.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "dianthus"
        ]
    },
    {
        "id": "31",
        "title": "lime butterfly",
        "src": "/photos/17868462851311887.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "nature",
            "insect"
        ]
    },
    {
        "id": "32",
        "title": "eggfly on zinnia",
        "src": "/photos/17869501370299655.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "flower",
            "nature"
        ]
    },
    {
        "id": "33",
        "title": "daffodil dance",
        "src": "/photos/17869577165406394.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "daffodil",
            "butterfly"
        ]
    },
    {
        "id": "34",
        "title": "garden admiral",
        "src": "/photos/17870461097270109.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "flower",
            "nature"
        ]
    },
    {
        "id": "35",
        "title": "fire ant scout",
        "src": "/photos/17871563087808660.webp",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "insect",
            "macro",
            "ant"
        ]
    },
    {
        "id": "36",
        "title": "adenium elegance",
        "src": "/photos/17872567247241466.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "37",
        "title": "pink gerbera",
        "src": "/photos/17872739048316828.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "gerbera"
        ]
    },
    {
        "id": "38",
        "title": "summer portulaca",
        "src": "/photos/17873328125314103.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "portulaca"
        ]
    },
    {
        "id": "39",
        "title": "striped albatross",
        "src": "/photos/17874569456302983.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "nature",
            "insect"
        ]
    },
    {
        "id": "40",
        "title": "side hustler",
        "src": "/photos/17874781916151700.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "lifestyle",
            "coffee"
        ]
    },
    {
        "id": "41",
        "title": "dahlia with bee",
        "src": "/photos/17876274779181561.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "dahlia",
            "bee"
        ]
    },
    {
        "id": "42",
        "title": "pink dianthus",
        "src": "/photos/17876763407176244.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "dianthus"
        ]
    },
    {
        "id": "43",
        "title": "filament glow",
        "src": "/photos/17878237034328745.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "abstract",
            "macro",
            "lowlight"
        ]
    },
    {
        "id": "44",
        "title": "yellow cosmos",
        "src": "/photos/17881176473263516.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "cosmos"
        ]
    },
    {
        "id": "45",
        "title": "wasp on lantana",
        "src": "/photos/17881212593129559.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "insect",
            "flower",
            "nature"
        ]
    },
    {
        "id": "46",
        "title": "monsoon drop",
        "src": "/photos/17881778921059473.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "water",
            "nature"
        ]
    },
    {
        "id": "47",
        "title": "pen ball macro",
        "src": "/photos/17882978933057768.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "abstract"
        ]
    },
    {
        "id": "48",
        "title": "galactic core",
        "src": "/photos/17886152465038183.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars",
            "milkyway"
        ]
    },
    {
        "id": "49",
        "title": "african daisy",
        "src": "/photos/17886795851025871.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "50",
        "title": "palm tree cosmos",
        "src": "/photos/17887094420034832.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars"
        ]
    },
    {
        "id": "51",
        "title": "sunset book heart",
        "src": "/photos/17892170405061942.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "creative",
            "sunset",
            "book"
        ]
    },
    {
        "id": "52",
        "title": "bulb world",
        "src": "/photos/17892837706895846.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "creative",
            "abstract",
            "composite"
        ]
    },
    {
        "id": "53",
        "title": "rain kissed leaf",
        "src": "/photos/17893099723937732.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "nature",
            "water"
        ]
    },
    {
        "id": "54",
        "title": "jupiter rising",
        "src": "/photos/17893299997917387.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars",
            "milkyway"
        ]
    },
    {
        "id": "55",
        "title": "pierrot butterfly",
        "src": "/photos/17894938661614505.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "nature",
            "insect"
        ]
    },
    {
        "id": "56",
        "title": "night sky whisper",
        "src": "/photos/17895207271843063.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars"
        ]
    },
    {
        "id": "57",
        "title": "galactic highway",
        "src": "/photos/17897359780857235.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "astrophotography",
            "night",
            "stars",
            "milkyway"
        ]
    },
    {
        "id": "58",
        "title": "parijat morning",
        "src": "/photos/17897807167804164.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "parijat"
        ]
    },
    {
        "id": "59",
        "title": "window sparrow",
        "src": "/photos/17899683824068890.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "bird",
            "nature"
        ]
    },
    {
        "id": "60",
        "title": "scarlet salvia",
        "src": "/photos/17900357443733892.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "salvia"
        ]
    },
    {
        "id": "61",
        "title": "morning dew grass",
        "src": "/photos/17900837137775649.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "nature",
            "water"
        ]
    },
    {
        "id": "62",
        "title": "dandelion wish",
        "src": "/photos/17900950147929223.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "dandelion"
        ]
    },
    {
        "id": "63",
        "title": "parijat on branch",
        "src": "/photos/17902605154747812.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "parijat",
            "macro"
        ]
    },
    {
        "id": "64",
        "title": "lime on fern",
        "src": "/photos/17902716784748658.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "butterfly",
            "nature",
            "insect"
        ]
    },
    {
        "id": "65",
        "title": "golden damiana",
        "src": "/photos/17903274088821577.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "66",
        "title": "endless tracks",
        "src": "/photos/17910151546642988.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "railway",
            "nature"
        ]
    },
    {
        "id": "67",
        "title": "rope walkers",
        "src": "/photos/17914197412678676.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "insect",
            "macro",
            "ant"
        ]
    },
    {
        "id": "68",
        "title": "resting squirrel",
        "src": "/photos/18067622791304842.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "squirrel",
            "nature"
        ]
    },
    {
        "id": "69",
        "title": "rain forest drops",
        "src": "/photos/18170983306192166.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "nature",
            "water",
            "flower"
        ]
    },
    {
        "id": "70",
        "title": "moody pages",
        "src": "/photos/17912790313709492.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "creative",
            "book",
            "lowlight"
        ]
    },
    {
        "id": "71",
        "title": "light stream bulb",
        "src": "/photos/18101120173244813.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "abstract",
            "light-painting",
            "creative"
        ]
    },
    {
        "id": "72",
        "title": "climbing squirrel",
        "src": "/photos/18221249275043242.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "squirrel",
            "nature"
        ]
    },
    {
        "id": "73",
        "title": "sunset sip",
        "src": "/photos/17903645278865952.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "lifestyle",
            "sunset",
            "creative"
        ]
    },
    {
        "id": "74",
        "title": "magenta zinnia",
        "src": "/photos/17904592708736836.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "zinnia"
        ]
    },
    {
        "id": "75",
        "title": "soft petals",
        "src": "/photos/17906102464676345.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "76",
        "title": "hibiscus glory",
        "src": "/photos/17907361681724814.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "hibiscus"
        ]
    },
    {
        "id": "77",
        "title": "crimson bloom",
        "src": "/photos/17907730621692327.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "78",
        "title": "spring blossom",
        "src": "/photos/17908046923677417.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "79",
        "title": "garden jewel",
        "src": "/photos/17908629943717883.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "80",
        "title": "village sunset",
        "src": "/photos/17909275525760862.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "sunset",
            "nature"
        ]
    },
    {
        "id": "81",
        "title": "road perspective",
        "src": "/photos/17910298912751167.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "road",
            "nature"
        ]
    },
    {
        "id": "82",
        "title": "field pathway",
        "src": "/photos/17910327235652610.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "nature"
        ]
    },
    {
        "id": "83",
        "title": "yellow marigold",
        "src": "/photos/17918842510566354.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "marigold"
        ]
    },
    {
        "id": "84",
        "title": "pink cosmos",
        "src": "/photos/17919582391561569.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "cosmos"
        ]
    },
    {
        "id": "85",
        "title": "orange blossom",
        "src": "/photos/17919986524622673.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "86",
        "title": "white lily",
        "src": "/photos/17924049886515414.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "lily"
        ]
    },
    {
        "id": "87",
        "title": "purple sensation",
        "src": "/photos/17925020122503608.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "88",
        "title": "garden variety",
        "src": "/photos/17930151721501275.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "89",
        "title": "bougainvillea burst",
        "src": "/photos/17937420457450166.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "bougainvillea"
        ]
    },
    {
        "id": "90",
        "title": "rose garden",
        "src": "/photos/17941945921447284.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro",
            "rose"
        ]
    },
    {
        "id": "91",
        "title": "tropical bloom",
        "src": "/photos/17944068925835026.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "92",
        "title": "garden spider",
        "src": "/photos/17946350363574038.webp",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "wildlife",
            "insect",
            "macro",
            "spider"
        ]
    },
    {
        "id": "93",
        "title": "white petals",
        "src": "/photos/17947466410430875.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "94",
        "title": "colorful meadow",
        "src": "/photos/17953741538315089.webp",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "nature",
            "flower"
        ]
    },
    {
        "id": "95",
        "title": "sunset glow",
        "src": "/photos/17954286979408113.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "sunset",
            "nature"
        ]
    },
    {
        "id": "96",
        "title": "morning dew",
        "src": "/photos/17957308102398756.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "macro",
            "nature",
            "water"
        ]
    },
    {
        "id": "97",
        "title": "pink garden",
        "src": "/photos/17959459528402477.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "98",
        "title": "lavender dreams",
        "src": "/photos/17965254514398313.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "99",
        "title": "golden hour bloom",
        "src": "/photos/17980029295350111.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "100",
        "title": "summer petals",
        "src": "/photos/17988950620348245.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "101",
        "title": "wild beauty",
        "src": "/photos/17998784080314296.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "102",
        "title": "sunset silhouette",
        "src": "/photos/17999657407309248.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "sunset",
            "nature"
        ]
    },
    {
        "id": "103",
        "title": "garden delight",
        "src": "/photos/18050986777285913.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "104",
        "title": "forest walk",
        "src": "/photos/18095642518224217.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "nature"
        ]
    },
    {
        "id": "105",
        "title": "purple elegance",
        "src": "/photos/18122690998206047.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "106",
        "title": "morning glory",
        "src": "/photos/18131417206161000.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "107",
        "title": "vibrant petals",
        "src": "/photos/18141159742153269.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "108",
        "title": "garden path",
        "src": "/photos/18141288304082123.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "109",
        "title": "yellow sunshine",
        "src": "/photos/18143131705081863.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "110",
        "title": "tropical garden",
        "src": "/photos/18148287559091028.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "111",
        "title": "delicate bloom",
        "src": "/photos/18159971167106427.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "112",
        "title": "sunset meadow",
        "src": "/photos/18178183543078263.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "landscape",
            "sunset",
            "nature"
        ]
    },
    {
        "id": "113",
        "title": "garden corner",
        "src": "/photos/18178867171074811.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "114",
        "title": "pastel beauty",
        "src": "/photos/18185112460064791.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "115",
        "title": "summer garden",
        "src": "/photos/18197629048032481.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "116",
        "title": "floral essence",
        "src": "/photos/18198206938020391.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "117",
        "title": "nature frame",
        "src": "/photos/18215213887013303.jpg",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "118",
        "title": "spring arrival",
        "src": "/photos/18221486530205207.webp",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    },
    {
        "id": "119",
        "title": "natural wonder",
        "src": "/photos/18247161283140821.webp",
        "camera": "Redmi Note 9 Pro",
        "tags": [
            "flower",
            "nature",
            "macro"
        ]
    }
];

export const config = {
    runtime: 'edge',
};

export default async function handler(request) {
    const url = new URL(request.url);
    const tagId = url.pathname.replace('/tag/', '');

    const tagPhotos = photos.filter(p => p.tags.includes(tagId));

    if (tagPhotos.length === 0) {
        return Response.redirect(new URL('/', url.origin), 302);
    }

    const origin = url.origin;
    const indexResponse = await fetch(`${origin}/index.html`);
    let html = await indexResponse.text();

    const tagTitle = `${tagId.toUpperCase()} (${tagPhotos.length} Photos) - Abhinav's Pics!`;
    const tagDescription = `Collection of photos tagged with ${tagId}`;

    // Generate multi-image tags for a collage effect on supporting platforms
    const ogImageTags = tagPhotos.slice(0, 4)
        .map(p => `<meta property="og:image" content="${origin}${p.src}" />`)
        .join('\n    ');

    const tagUrl = `${origin}/tag/${tagId}`;

    html = html.replace(/<title>.*?<\/title>/, `<title>${tagTitle}</title>`);
    html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${tagDescription}" />`);
    html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${tagTitle}" />`);
    html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${tagDescription}" />`);
    html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/>/, ogImageTags);

    if (html.includes('og:url')) {
        html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${tagUrl}" />`);
    }

    html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${tagTitle}" />`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${tagDescription}" />`);
    html = html.replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${origin}${tagPhotos[0].src}" />`);

    return new Response(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}
