/**
 * ============================================================================
 * PATCH LIBRARY - Configuration & Content File
 * ============================================================================
 *
 * This file contains all editable content for the Patch Library website.
 * Edit the arrays below to add, remove, or modify content.
 *
 * The functional code lives in script.js.
 *
 * STRUCTURE:
 * 1. CATEGORIES - List of patch categories (filter buttons auto-generate)
 * 2. TECHNIQUES - Technique definitions with difficulty, steps and images
 * 3. PATCHES - Patch definitions with all properties
 *
 * FIXED OPTIONS:
 * - Difficulty levels (for techniques): "Beginner", "Intermediate", "Advanced"
 *   (These have predefined color styling in CSS)
 *
 * JUMP WITHIN THE FILE: (Ctrl+F jump)
 * Categories: CATEGORIES-JMP
 * Techniques: TECHNIQUES-JMP
 * Patches: PATCHES-JMP
 *
 * ============================================================================
 */

// ============================================================================
// CATEGORIES-JMP
// ============================================================================
// Add or remove categories here. Filter buttons will automatically update.
// The "All" filter is always included automatically.

const categories = [
  "Jó design", "Érdekes technika", "Egyéb"
];


// ============================================================================
// PATCHES-JMP
// ============================================================================
// Each patch has:
// - title: Display name (required)
// - description: Short description (required)
// - image: Path to patch image (required)
// - category: Must match one from categories array above (required)
// - techniques: Array of technique names - must match names in techniques array (required)
// - link: External URL (optional - if set, shows a link button)
// - additionalImages: Array of image/video paths, max 10 (optional, can be [])
//
// TEMPLATE:
/*
{
  title: "",
  description: "",
  image: "./content/images/",
  category: "",
  techniques: [],
  link: "",
  additionalImages: []
},
*/

const patches = [
  {
    title: "BSA Scuba",
    description: "Nagyon egyszerű, de jól kinéző design. Az alap ötlet a BSA square not rendszerét koppintja le (ami pedig a ribbon-bar-okból ered)",
    image: "./content/images/bsa/SCUBA.jpg",
    //KÉP TESZTEK
    //image: "./images/rag_spray.jpg",
    //image: "./content/videos/video_2026-04-24_20-37-20.mp4",
    category: "Jó design",
    techniques: ["Hímzett háttér"],
    link: "https://www.sageventure.com/store/designs/SCUBA.html",
    additionalImages: []
  },
  {
    title: "BSA Troop patch",
    description: "Nagyon részletes, saját vonalvastagsággal rendelkező vésett effekt (azaz a vésett részt alkotó vonalaknak két éle van)",
    image: "./content/images/bsa/Troop760.jpg",
    category: "Érdekes technika",
    techniques: ["Vésett effekt", "Hímzett háttér"],
    link: "https://www.sageventure.com/store/designs/Troop760.html",
    additionalImages: []
  },
  {
    title: "Simonyi kulcstartó folt",
    description: "Kétoldalas hímzés, lyukkal benne a kulcstartónak.",
    image: "./content/images/simonyi_cropped_combined.png",
    category: "Érdekes technika",
    techniques: ["Kétoldalú hímzés"],
    link: "",
    additionalImages: ["./content/images/simonyi_cropped_front.png", "./content/images/simonyi_cropped_back.png"]
  },
  {
    title: "KRViSE kardos folt",
    description: "Fekete cordurára fekete szállal hímezve, csak adott szögben/megfelelő fénynél olvasható, a cérna csillogásának köszönhetően.",
    image: "./content/images/krvise.png",
    category: "Érdekes technika",
    techniques: ["Azonos színnel hímzés"],
    link: "",
    additionalImages: []
  },
  {
  title: "Kísérteaház",
  description: "A folt egy része sima fehér cérnával, másik része pedig fehér glowie-val van hímezve, sötétben megváltozik a szöveg.",
  image: "./content/images/kísértet_combined.png",
  category: "Érdekes technika",
  techniques: ["Vegyes glowie és normál cérna"],
  link: "",
  additionalImages: ["./content/images/kísértet_explained.png", "./content/images/kísértet_day.png", "./content/images/kísértet_night.png"]
  },
  {
  title: "That's what she said.",
  description: "Funny.",
  image: "./content/images/sheSaid.png",
  category: "Egyéb",
  techniques: [],
  link: "",
  additionalImages: []
  },
  {
  title: "Hajó 2024",
  description: "Jól használja a vékony vonalakat!",
  image: "./content/images/hajo2024.png",
  category: "Érdekes technika",
  techniques: ["Run art"],
  link: "",
  additionalImages: []
  },
  {
  title: "SZÉF KB folt",
  description: "Használ ezüst cérnát + teljesen behímzett a folt, nem látszik ki a cordura!",
  image: "./content/images/kb_hd.png",
  category: "Érdekes technika",
  techniques: ["Hímzett háttér"],
  link: "",
  additionalImages: []
  },
  {
  title: "Flow honvéd-style folt",
  description: "Honvéd rangjelzés helyére tervezett, olyan alakú, <i>tépőzáras hátú</i> folt.",
  image: "./content/images/Flow_honvéd.png",
  category: "Érdekes technika",
  techniques: ["Tépőzáras folt"],
  link: "",
  additionalImages: []
  },
  {
  title: "Gólya házi - kicsi verzió",
  description: "A foltalkotás kitökéletesedése.",
  image: "./content/images/gólya_kicsi_v0.png",
  category: "Jó design",
  techniques: [],
  link: "",
  additionalImages: []
  },
  {
  title: "Lanosch 24 órás nyitás",
  description: "3 színű színátmenet kis távon",
  image: "./content/images/lanosch24h.png",
  category: "Érdekes technika",
  techniques: ["Színátmenet"],
  link: "",
  additionalImages: []
  },
  {
  title: "Raft",
  description: "Kicsi-kompakt, és szép a kék",
  image: "./content/images/raft.png",
  category: "Jó design",
  techniques: [],
  link: "",
  additionalImages: []
  },
  {
  title: "SLIP Szent Andor",
  description: "SLIP Gépészkari Napok (2026) egyik foltja, ólomüveg kinézettel",
  image: "./content/images/Szent_Andor.png",
  category: "Jó design",
  techniques: [],
  link: "",
  additionalImages: []
  },
];
//Jelenleg létező technikák:
/*
Tépőzáras folt; Hímzett háttér; Run art; Vegyes glowie és normál cérna; Azonos színnel hímzés; Kétoldalú hímzés; Vésett effekt; Színátmenet

*/


// ============================================================================
// TECHNIQUES-JMP
// ============================================================================
// Each technique has:
// - name: Display name (required)
// - description: Short description shown in the card (required)
// - difficulty: "Beginner", "Intermediate", or "Advanced" (required)
//			->GUIDELINES::  Beginner: 		anyone with a standard or slightly higher amount of machine/software knowledge+experience can do it
//							Intermediate:	requires somewhat higher level of machine/software knowledge, plus some skill and dexterity
//							Advanced:		requires advanced machine/software knowledge, and a fair amount of skill/dexterity
// - demoImage: Path to demonstrator image (required)
// - examples: Array of example image/video paths, max 10 (optional, can be [])
// - workInProgress: If true, shows a Work In Progress badge on the card and modal (optional, defaults to false)
// - steps: Array of step objects (required, can be empty [])
//   Each step has:
//   - name: Step title (required)
//   - description: Step description (optional, can be "" or omitted)
//   - images: Array of image/video paths, max 2 (optional, can be [] or omitted)

const techniques = [
  {
    name: "Kétoldalú hímzés",
    description: "Eltérő hímzett design a folt mindkét oldalán. Jól tag-en alkalmazható, ahol kerül rá egy lyuk, amin keresztül felfűzhető dolgokra.",
    difficulty: "Intermediate",
    demoImage: "./content/icons/twoSided-blank.png",
    examples: [],
    workInProgress: false,
    steps: [
      {
        name: "A két oldal designjának lehímzése",
        description: "Hímezd le mindkét oldalt, de satin körvonal <i>helyett</i> használj <b>run</b>-t (egyenes, single pass vonal). <br><i>Alternatívaként zig-zag körvonal is használható!</i><br><b>Ha run-t használsz, fusson a leendő satin körvonal <i>külső</i> szélén, ha zig-zag-et akkor érjen ki szélével oda ahova a satin fog majd!</b>",
        images: []
      },
      {
        name: "Vágd ki a két oldalt a körvonal mentén",
        description: "",
        images: []
      },
	  {
        name: "Fólia előkészítése!",
        description: "Fogj be 2-3 réteg fóliát (amit a pulcsikon használunk felül, hogy ne süllyedjenek el a szálak) a keretbe.<br><i>(Igen, a csak fóliát!)</i><br><sub>HA Sanyi nem akarná átütni a fóliát, esetleg csak ~tizedik öltésre kezdi el megfogni az alsó szálat, vegyél el egy réteg fóliát. Ha még mindig nem működik, használj fólia helyett standard alapból 2-3 réteget!</sub>",
        images: []
      },
	  {
        name: "Hímzed rá a fóliára csak a <i>run</i>-os körvonalat",
        description: "Ez fogja mutatni nekünk, hogy hova tegyük a két oldalt!",
        images: []
      },
	  {
        name: "A <i>spray</i>-el ragaszd fel a fólia két oldalára a két korábban lehímzett oldalt",
        description: "Az ideiglenes ragasztó sprayel ragaszd fel az egyik oldalt a fólia tetejére, a másikat az aljára, a megfelelő orientációban. <b>A fólia maradjon a keretbe befogva!</b><br>Meglehet, hogy a ragasztó picit rosszul fog, és főként az alsó oldalt <i>biztonságosan</i> meg kell támogatni majd hímzés közben egy kis ideig.<br><i>Lehetőleg nyitott ablak mellett sprayz, és a keretet utána tisztítsd le, mert ragadni fog sokáig!</i>",
        images: ["./content/images/rag_spray.jpg"]
      },
	  {
        name: "Hímezd fel a satin körvonalat!",
        description: "Elsőként érdemes egy <b>zig-zag-et felhímezni</b>, hogy stabilabban helyben maradjon a két folt a satin hímzése közben!<br>Fontos, hogy ugyan oda hímezd, ahova a fóliára a run-t is<br><i>Megoldható ez pl. egy programmal, amiben van egy run keret, egy zig-zag keret, meg egy satin keret más színekben. Ezek után Sanyin beállítod azonos színre és bekapcsolod a szín utáni stoppot.</i><br><b>Fontos</b>, hogy ha nem standard fehér cérnát használsz a végső keretnek, akkor fogj be custom alsó szálat (how to a noteokban), mert különben az egyik oldalon lesz a satin közepén egy fehér sáv!",
        images: []
      },
    ]
  },
  {
    name: "Vésett effekt",
    description: "Angolul carved effect/embossed effect. A wilcomban a <i>Carving stamp</i> eszközzel hozható létre.",
    difficulty: "Beginner",
    demoImage: "./content/icons/carved.png",
    examples: [],
    workInProgress: true,
    steps: [
      {
        name: "T1",
        description: "D1",
        images: []
      },
    ]
  }
];


// ============================================================================
// NOTES
// ============================================================================
// Notes work similarly to techniques, but without difficulty.
// Each note has:
// - name: Display name (required)
// - externalDescription: Description shown on the note card in the grid (required)
// - internalDescription: Description shown inside the note modal (required)
// - demoImage: Path to thumbnail / demonstrator image (optional, can be "" or omitted)
// - unOrdered: If true, note modal steps use non-numbered markers (optional, defaults to false)
// - workInProgress: If true, shows a Work In Progress badge on the card and modal (optional, defaults to false)
// - steps: Array of step objects (required, can be empty [])
//   Each step has:
//   - name: Step title (required)
//   - description: Step description (optional, can be "" or omitted)
//   - images: Array of image paths, max 2 (optional, can be [] or omitted)
//
// TEMPLATE
/*
{
  name: "",
  externalDescription: "Interesting stuff.",
  internalDescription: "Some more stuff",
  demoImage: "",
  unOrdered: true,
  workInProgress: false,
  steps: [
    {
      name: "Step 1",
      description: "",
      images: []
    },
    {
      name: "Step 2",
      description: "Sure is.",
      images: ["./content/videos/video_2026-04-24_20-37-20.mp4"]
    }
  ]
}
*/

const notes = [
  {
    name: "Olajozás",
    externalDescription: "Hogyan, mikor és mivel kell Sanyit megolajozni.",
    internalDescription: "Sanyit viszonylag gyakran olajozni kell! Ehhez a tőle <i>jobbra levő polcon</i> elhelyezett piros végű <b>fecskendőt</b> hasznájluk.<br>Fontos, hogy csak egy <b>pici</b> olajat kell tenni a pontokra.<br><br>Olajozáskor érintsd a ponthoz a tű hegyét, majd <b>gyengéden</b> kezd el nyomni a dugattyút. Amint egy kicsi kijön, meg is vagy! Ha nem fedte be teljesen a kívánt részt, a hegyével szépen oda \"ecsetelheted\"!<br><br>Sanyi papiron mindig szól, amikor olajozni kell. Ilyenkor megjelenik egy popup a képernyőn, ami megmondja, melyik pontnak van itt az olajozási idelye. Két opció van: <i>Later</i> és <i>Done</i>; csak akkor nyomj done-t, ha megcsináltad. <i>(A done semmit nem csinál azon kívül, hogy lejegyzi sanyiban, hogy meg lett olajozva.)</i><br><sub>Amikor olajozol, kérlek figyelj oda, hogy ne olajozz össze mindent is, mert nagyon zavaró később.</sub>",
    demoImage: "",
    unOrdered: true,
    workInProgress: true,
    steps: [
      {
        name: "<i>\"A\"</i> PONT",
        description: "Ezt a pontot <b>naponta</b> egyszer kell megolajozni. A cél, hogy a kis peremet olajozd, ami sötét pirossal van kiemelve.",
        images: ["./content/images/olajA_nagy.png", "./content/images/olajA_zoom.png"]
      },
      {
        name: "<i>\"B\"</i> PONT",
        description: "Ezeket a pontokat <b>hetente</b> egyszer kell megolajozni.",
        images: ["./content/images/olajB_2.png", "./content/images/olajB.png", "./content/images/channel.png"]
      },
      {
        name: "Egyéb olajozási pont",
        description: "",
        images: ["./content/images/olaj_néha.png"]
      },
    ]
  },
];