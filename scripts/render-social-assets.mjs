import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const out = join(root, "marketing/instagram/exports");
await mkdir(out, { recursive: true });

const C = { ink: "#080808", paper: "#f0ebe3", cream: "#fffaf2", acid: "#d7ff38", coral: "#ff725e", pink: "#ff9fc9" };
const generated = join(root, "marketing/instagram/assets/generated");
const images = {
  locs: join(generated, "couture-sculptural-locs-v1.png"),
  world: join(generated, "couture-digital-world-v1.png"),
  macro: join(generated, "couture-texture-macro-v1.png"),
  beverlys: join(root, "public/portfolio/beverlys-feature-2026.webp"),
  dreadlocks: join(root, "public/portfolio/dreadlocks-salon.png"),
  allThingsLocs: join(root, "public/portfolio/two-tit-experience.png"),
  magicCoilsWebsite: join(root, "public/portfolio/magic-coils-updated.webp"),
  divineTextures: join(root, "public/portfolio/divine-textures.png"),
  ogBarnes: join(root, "public/portfolio/og-barnes.png"),
  sacrificialConversations: join(root, "public/portfolio/sacrificial-conversations-2026.webp"),
  sodiqYusuff: join(root, "public/portfolio/sodiq-yusuff.png"),
  washingtonWizKids: join(root, "public/portfolio/washington-wizkids.png"),
  twoTightFunmi: join(root, "public/work/photo-revival/14-2tite-funmi-red-curled-updo-after.webp"),
  twoTightMensCornrows: join(root, "public/work/photo-revival/15-2tite-linda-mens-cornrows-after.webp"),
  magicCoilsFoamWrap: join(root, "public/work/magic-coils/product-placement/foam-wrap.webp"),
  magicCoilsSerum: join(root, "public/work/magic-coils/product-placement/strengthening-serum.webp"),
  workHighlight: join(root, "marketing/instagram/highlights/covers/work.png"),
  servicesHighlight: join(root, "marketing/instagram/highlights/covers/services.png"),
  websitesHighlight: join(root, "marketing/instagram/highlights/covers/websites.png"),
  glowUpHighlight: join(root, "marketing/instagram/highlights/covers/the-glow-up.png"),
  processHighlight: join(root, "marketing/instagram/highlights/covers/process.png"),
  faqHighlight: join(root, "marketing/instagram/highlights/covers/faq.png"),
  revivalSculptBefore: join(root, "public/work/photo-revival/02-sculptural-loc-updo-before.webp"),
  revivalSculptAfter: join(root, "public/work/photo-revival/02-sculptural-loc-updo-after.webp"),
  revivalDoubleBefore: join(root, "public/work/photo-revival/09-charlotte-double-loc-bun-before.webp"),
  revivalDoubleAfter: join(root, "public/work/photo-revival/09-charlotte-double-loc-bun-after.webp"),
  revivalLindaBefore: join(root, "public/work/photo-revival/13-2tite-linda-long-microlocs-before.webp"),
  revivalLindaAfter: join(root, "public/work/photo-revival/13-2tite-linda-long-microlocs-after.webp"),
};

const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const font = { sans: "Arial, Helvetica, sans-serif", serif: "Georgia, Times New Roman, serif" };

function svgShell(w, h, body, light = false) {
  const fg = light ? C.ink : C.cream;
  const border = light ? "rgba(8,8,8,.28)" : "rgba(255,255,255,.26)";
  return Buffer.from(`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="${light ? C.paper : "transparent"}"/>
  <rect x="28" y="28" width="${w - 56}" height="${h - 56}" fill="none" stroke="${border}"/>
  <g fill="${fg}">${body}</g>
  </svg>`);
}

function text(x, y, value, { size = 24, fill = C.cream, weight = 700, family = font.sans, anchor = "start", spacing = 0, italic = false, stroke = "none", strokeWidth = 0 } = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}" font-style="${italic ? "italic" : "normal"}" letter-spacing="${spacing}" text-anchor="${anchor}" stroke="${stroke}" stroke-width="${strokeWidth}" paint-order="stroke">${esc(value)}</text>`;
}

function header(w, left, right, light = false) {
  const fg = light ? C.ink : C.cream;
  return text(68, 82, left.toUpperCase(), { size: 18, fill: fg, weight: 800, spacing: 3.4 }) + text(w - 68, 82, right.toUpperCase(), { size: 18, fill: right.includes("Swipe") ? C.acid : fg, weight: 800, spacing: 2.7, anchor: "end" });
}

function footer(w, h, left, right, light = false, pill = false) {
  const fg = light ? C.ink : C.cream;
  const pillEl = pill ? `<rect x="68" y="${h - 108}" width="245" height="53" rx="27" fill="${C.acid}"/>${text(190, h - 74, left, { size: 17, fill: C.ink, weight: 800, spacing: 2.1, anchor: "middle" })}` : text(68, h - 70, left.toUpperCase(), { size: 15, fill: fg, weight: 800, spacing: 2.1 });
  return pillEl + text(w - 68, h - 70, right.toUpperCase(), { size: 15, fill: fg, weight: 800, spacing: 2.1, anchor: "end" });
}

function processRail(active, light = false) {
  const idle = light ? "#9b948b" : "#6f6a64";
  const line = light ? "#b8b0a7" : "#4f4b47";
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const x = 105 + i * 174;
    const on = i + 1 === active;
    return `<circle cx="${x}" cy="1615" r="${on ? 19 : 11}" fill="${on ? C.acid : idle}" stroke="${on ? C.ink : "none"}" stroke-width="3"/>${text(x,1665,String(i+1).padStart(2,"0"),{size:15,fill:on ? (light ? C.ink : C.cream) : idle,weight:800,spacing:1.5,anchor:"middle"})}`;
  }).join("");
  return `<line x1="105" y1="1615" x2="975" y2="1615" stroke="${line}" stroke-width="3"/>${nodes}`;
}

function headline(lines, { x = 68, y = 330, gap = 92, size = 100, light = false } = {}) {
  return lines.map((line, i) => text(x, y + i * gap, line.value, {
    size: line.size || size,
    fill: line.fill || (light ? C.ink : C.cream),
    weight: line.family === "serif" ? 400 : 800,
    family: line.family === "serif" ? font.serif : font.sans,
    italic: line.italic ?? line.family === "serif",
    spacing: line.family === "serif" ? -4 : -6,
    stroke: line.outline ? (light ? C.ink : C.cream) : "none",
    strokeWidth: line.outline ? 2 : 0,
  })).join("");
}

function grain(w, h, opacity = .08) {
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="${opacity}"/></svg>`);
}

async function background(path, w, h, dark = .45) {
  return sharp(path).resize(w, h, { fit: "cover" }).composite([{ input: Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g"><stop stop-color="#080808" stop-opacity=".95"/><stop offset=".56" stop-color="#080808" stop-opacity="${dark}"/><stop offset="1" stop-color="#080808" stop-opacity=".05"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/></svg>`) }]).png().toBuffer();
}

async function render(name, w, h, { bg, body, light = false, extra = [] }) {
  const base = bg ? await background(bg, w, h) : { create: { width: w, height: h, channels: 4, background: light ? C.paper : C.ink } };
  const image = sharp(base);
  const layers = [...extra, { input: svgShell(w, h, body, light) }, { input: grain(w, h), blend: "screen" }];
  await image.composite(layers).png({ compressionLevel: 9 }).toFile(join(out, `${name}.png`));
}

const W = 1080, H = 1350;

await render("carousel-01", W, H, { bg: images.locs, body:
  header(W, "Couture House / Salon intelligence", "Swipe →") +
  text(68, 238, "THE WEBSITE CHECK / 01", { size: 18, fill: C.acid, weight: 800, spacing: 3.3 }) +
  headline([{value:"5 SIGNS YOUR"},{value:"SALON HAS"},{value:"OUTGROWN",family:"serif",fill:C.coral,size:118},{value:"ITS WEBSITE."}], { y: 355, gap: 92, size: 104 }) +
  text(68, 760, "The problem is not always how it looks.", { size: 29, fill: "#d4d0ca", weight: 400 }) +
  footer(W, H, "Digital worlds for hair, beauty & culture.", "couturehouse.co")
});

const paleSlides = [
  ["carousel-02","01","YOUR SERVICES ARE","HARD TO UNDERSTAND","ON A PHONE.","A new client should know what to choose, who it is for, and what happens next.","Clarity before the calendar."],
  ["carousel-04","03","EVERY VISITOR GETS","DROPPED ON A","BOOKING SCREEN.","High-trust services need education before the calendar.","Your booking link is not your website."],
  ["carousel-06","05","GOOGLE CANNOT","UNDERSTAND","YOUR BUSINESS.","Clear service and location information belongs on a site you own.","Findable by design."],
];
for (const [name,num,a,b,c,sub,foot] of paleSlides) await render(name, W, H, { light:true, body:
  `<circle cx="1010" cy="1110" r="290" fill="${C.pink}"/>` + header(W, "Couture House", `${num} / 05`, true) +
  text(68, 245, num, { size: 72, fill: C.coral, weight: 400, family: font.serif, italic:true }) + `<rect x="68" y="285" width="110" height="8" fill="${C.acid}"/>` +
  headline([{value:a},{value:b},{value:c,family:"serif",fill:C.coral,size:100}], { y: 440, gap: 100, size: 90, light:true }) +
  text(68, 775, sub, { size: 27, fill: "#4c4945", weight: 400 }) + footer(W,H,foot,"Swipe →",true)
});

const dreadBuffer = await sharp(images.dreadlocks).resize(480, 760, { fit:"cover", position:"top" }).png().toBuffer();
await render("carousel-03", W, H, { body:
  header(W,"Couture House","02 / 05") + text(68,225,"02",{size:72,fill:C.coral,weight:400,family:font.serif,italic:true}) + `<rect x="68" y="266" width="110" height="8" fill="${C.acid}"/>` +
  headline([{value:"YOUR BEST"},{value:"WORK IS BURIED"},{value:"40 POSTS DOWN.",family:"serif",fill:C.coral,size:80}],{y:390,gap:82,size:72}) +
  text(68, 700, "Instagram shows the moment.", {size:23,fill:"#d4d0ca",weight:400}) + text(68,735,"Your website organizes the proof.",{size:23,fill:"#d4d0ca",weight:400}) + footer(W,H,"Proof deserves a permanent home.","Swipe →"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg"><rect x="568" y="214" width="458" height="812" rx="2" fill="#f0ebe3"/><rect x="584" y="246" width="426" height="760" fill="#111"/></svg>`)},{input:dreadBuffer,left:584,top:246}]
});

await render("carousel-05", W, H, { bg:images.world, body:
  header(W,"Couture House","04 / 05") + text(68,250,"“",{size:180,fill:C.coral,weight:400,family:font.serif}) + text(68,410,"04",{size:62,fill:C.coral,weight:400,family:font.serif,italic:true}) +
  headline([{value:"YOUR REVIEWS"},{value:"AND EXPERTISE"},{value:"ARE MISSING.",family:"serif",fill:C.coral,size:98}],{y:560,gap:96,size:88}) +
  text(68,875,"New clients need reasons to trust you",{size:27,fill:"#d4d0ca",weight:400}) + text(68,910,"before they choose a service.",{size:27,fill:"#d4d0ca",weight:400}) + footer(W,H,"Trust is part of the experience.","Swipe →")
});

await render("carousel-07", W, H, { bg:images.macro, body:
  header(W,"Couture House / Free review","Save + share") + text(68,250,"YOUR NEXT MOVE",{size:18,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"HAS YOUR SALON"},{value:"OUTGROWN",family:"serif",fill:C.coral,size:112},{value:"ITS WEBSITE?"}],{y:390,gap:105,size:96}) +
  text(68,760,"DM AUDIT for a free three-point review.",{size:30,fill:"#e2ddd6",weight:400}) + footer(W,H,"DM “AUDIT”","couturehouse.co",false,true)
});

await render("cover-positioning", W, H, { bg:images.locs, body:
  header(W,"Couture House / 001","Salon websites") + text(68,245,"BUILT FOR THE CULTURE",{size:18,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"DIGITAL HOMES"},{value:"FOR HAIR,"},{value:"BEAUTY",family:"serif",fill:C.coral,size:120},{value:"& CULTURE."}],{y:400,gap:100,size:102}) + footer(W,H,"Websites / Booking / Content","couturehouse.co")
});

const bevBuffer = await sharp(images.beverlys).resize(465, 790, { fit:"cover", position:"center" }).png().toBuffer();
await render("cover-beverlys", W, H, { body:
  header(W,"Couture House","Case study 01") + text(68,245,"CROWNED ONLINE / BEVERLY'S OF NASHVILLE",{size:17,fill:C.acid,weight:800,spacing:3}) +
  headline([{value:"A LEGACY"},{value:"SALON,"},{value:"REINTRODUCED.",family:"serif",fill:C.coral,size:77}],{y:390,gap:84,size:78}) + footer(W,H,"Creative direction / Web design","View the work"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg"><rect x="566" y="230" width="481" height="826" fill="#f0ebe3"/></svg>`)},{input:bevBuffer,left:574,top:248}]
});

await render("cover-redflags", W, H, { bg:images.world, body:
  header(W,"Couture House / Book or Bounce?","Website check") + text(68,245,"SALON OWNERS / SAVE THIS",{size:18,fill:C.acid,weight:800,spacing:3.1}) +
  headline([{value:"YOUR WEBSITE"},{value:"MAY BE"},{value:"COSTING",family:"serif",fill:C.coral,size:120},{value:"BOOKINGS."}],{y:410,gap:105,size:105}) + footer(W,H,"5 RED FLAGS","Swipe →",false,true)
});

const SW=1080, SH=1920;
await render("story-start", SW, SH, { bg:images.macro, body:
  header(SW,"Couture House","Start here / 01") + text(68,320,"WHO WE BUILD FOR",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"BLACK-OWNED"},{value:"SALONS +"},{value:"STYLISTS.",family:"serif",fill:C.coral,size:138}],{y:510,gap:125,size:122}) +
  text(68,970,"Websites, booking experiences and content",{size:35,fill:"#e1dcd5",weight:400}) + text(68,1015,"systems designed to get found, earn trust",{size:35,fill:"#e1dcd5",weight:400}) + text(68,1060,"and turn attention into appointments.",{size:35,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Digital atelier / New York + Everywhere","couturehouse.co")
});

await render("story-start-02", SW, SH, { bg:images.world, body:
  header(SW,"Couture House","Start here / 02") + text(68,320,"WHAT WE BUILD",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"MORE THAN A"},{value:"PRETTY"},{value:"WEBSITE.",family:"serif",fill:C.coral,size:138}],{y:510,gap:125,size:116}) +
  text(68,970,"Strategy, web design, booking journeys,",{size:34,fill:"#e1dcd5",weight:400}) + text(68,1015,"e-commerce, content and photo revival—",{size:34,fill:"#e1dcd5",weight:400}) + text(68,1060,"shaped as one connected brand world.",{size:34,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Strategy / Design / Development","One connected world")
});

await render("story-start-03", SW, SH, { light:true, body:
  `<circle cx="935" cy="1450" r="420" fill="${C.pink}"/><circle cx="945" cy="1450" r="295" fill="${C.acid}" opacity=".86"/>` +
  header(SW,"Couture House","Start here / 03",true) + text(68,320,"WHAT SHOULD CHANGE",{size:19,fill:C.coral,weight:800,spacing:3.4}) +
  headline([{value:"GET FOUND."},{value:"EARN TRUST."},{value:"MAKE THE NEXT"},{value:"STEP EASY.",family:"serif",fill:C.coral,size:112}],{y:510,gap:125,size:104,light:true}) +
  text(68,1100,"Instagram creates attention.",{size:35,fill:"#4c4945",weight:400}) + text(68,1147,"Your digital home should turn that attention",{size:35,fill:"#4c4945",weight:400}) + text(68,1194,"into confidence and action.",{size:35,fill:"#4c4945",weight:400}) + footer(SW,SH,"Attention → Trust → Action","Built for the next client",true)
});

await render("story-start-04", SW, SH, { bg:images.locs, body:
  header(SW,"Couture House","Start here / 04") + text(68,320,"EXPLORE THE WORK",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"SEE WHAT"},{value:"YOUR BUSINESS"},{value:"COULD BECOME.",family:"serif",fill:C.coral,size:112}],{y:510,gap:125,size:108}) +
  text(68,950,"Websites and visual worlds built around",{size:34,fill:"#e1dcd5",weight:400}) + text(68,997,"the people your business wants to move.",{size:34,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Add link sticker: View the work","couturehouse.co/work")
});

await render("story-poll", SW, SH, { bg:images.world, body:
  header(SW,"Couture House / Salon pulse","Tap one") + text(68,310,"QUICK QUESTION",{size:19,fill:C.acid,weight:800,spacing:3.3}) +
  headline([{value:"WHERE DO MOST"},{value:"NEW CLIENTS"},{value:"FIND YOU?",family:"serif",fill:C.coral,size:132}],{y:500,gap:120,size:112}) +
  ["Instagram","Google","Referrals","Booking platform"].map((v,i)=>`<rect x="68" y="${910+i*120}" width="760" height="88" rx="44" fill="none" stroke="${C.cream}" stroke-width="2"/>${text(105,968+i*120,v.toUpperCase(),{size:25,fill:C.cream,weight:800,spacing:2})}`).join("") +
  footer(SW,SH,"Your answer shapes the next build.","couturehouse.co")
});

const storyBev = await sharp(images.beverlys).resize(540, 900, {fit:"cover",position:"center"}).png().toBuffer();
await render("story-proof", SW, SH, { body:
  header(SW,"Couture House / Selected work","Crowned Online") + text(68,320,"BEVERLY'S OF NASHVILLE",{size:19,fill:C.acid,weight:800,spacing:3}) +
  headline([{value:"LEGACY,"},{value:"CARRIED",family:"serif",fill:C.coral,size:130},{value:"FORWARD."}],{y:500,gap:118,size:112}) +
  text(68,885,"A clearer digital home for a trusted Nashville salon.",{size:31,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Web design / Development / Local discovery","See the work →"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="490" y="880" width="560" height="940" fill="#f0ebe3"/></svg>`)},{input:storyBev,left:500,top:890}]
});

const storyBevFull = await sharp(images.beverlys).resize({width:980}).png().toBuffer();
const storyDread = await sharp(images.dreadlocks).resize({width:980}).png().toBuffer();
const storyAllThings = await sharp(images.allThingsLocs).resize({width:1000}).png().toBuffer();
const storyMagicWebsite = await sharp(images.magicCoilsWebsite).resize({width:1000}).png().toBuffer();
const storyDivine = await sharp(images.divineTextures).resize({width:980}).png().toBuffer();
const storyOgBarnes = await sharp(images.ogBarnes).resize({width:980}).png().toBuffer();
const storySacrificial = await sharp(images.sacrificialConversations).resize({width:980}).png().toBuffer();
const storySodiq = await sharp(images.sodiqYusuff).resize({width:980}).png().toBuffer();
const storyWashington = await sharp(images.washingtonWizKids).resize(930, 540, {fit:"cover",position:"center"}).png().toBuffer();
const storyTwoTightFunmi = await sharp(images.twoTightFunmi).resize(900, 1030, {fit:"cover",position:"center"}).png().toBuffer();
const storyTwoTightMensCornrows = await sharp(images.twoTightMensCornrows).resize(900, 920, {fit:"cover",position:"center"}).png().toBuffer();
const storyMagicFoamWrap = await sharp(images.magicCoilsFoamWrap).resize(930, 920, {fit:"cover",position:"center"}).png().toBuffer();
const storyMagicSerum = await sharp(images.magicCoilsSerum).resize(930, 820, {fit:"cover",position:"center"}).png().toBuffer();
const servicesStoryArt = await sharp(images.servicesHighlight).resize(930, 930, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalSculptBefore = await sharp(images.revivalSculptBefore).resize(340, 340, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalSculptAfter = await sharp(images.revivalSculptAfter).resize(690, 690, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalDoubleBefore = await sharp(images.revivalDoubleBefore).resize(340, 340, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalDoubleAfter = await sharp(images.revivalDoubleAfter).resize(690, 690, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalLindaBefore = await sharp(images.revivalLindaBefore).resize(340, 340, {fit:"contain",background:C.ink}).png().toBuffer();
const revivalLindaAfter = await sharp(images.revivalLindaAfter).resize(690, 690, {fit:"contain",background:C.ink}).png().toBuffer();

await render("story-work-01", SW, SH, { bg:images.workHighlight, body:
  header(SW,"Couture House / Selected work","Work / 01") + text(68,320,"HAIR + BEAUTY FIRST",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"DIGITAL"},{value:"WORLDS BUILT"},{value:"TO BE FELT.",family:"serif",fill:C.coral,size:128}],{y:510,gap:125,size:112}) +
  text(68,970,"Websites, content, commerce and visual systems",{size:34,fill:"#e1dcd5",weight:400}) + text(68,1017,"shaped around the people a business wants to move.",{size:34,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Selected work / 2024–26","Couture House")
});

await render("story-work-02-divine-textures", SW, SH, { body:
  header(SW,"Couture House / Selected work","Work / 02") + text(68,280,"DIVINE TEXTURES",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"NATURAL CARE."},{value:"A DIGITAL WORLD"},{value:"WITH SOUL.",family:"serif",fill:C.coral,size:104}],{y:450,gap:112,size:100}) +
  text(68,820,"A warm, focused home for holistic hair care and client education.",{size:30,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Web design / Service education / Booking","Holistic hair care"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="1010" width="1000" height="510" rx="14" fill="#f0ebe3"/><circle cx="70" cy="1037" r="7" fill="#ff725e"/><circle cx="94" cy="1037" r="7" fill="#d7ff38"/><circle cx="118" cy="1037" r="7" fill="#b8afa3"/></svg>`)},{input:storyDivine,left:50,top:1060}]
});

await render("story-work-03-og-barnes", SW, SH, { body:
  header(SW,"Couture House / Selected work","Work / 03") + text(68,280,"OG BARNES",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"BEAUTY."},{value:"WELLNESS."},{value:"ONE HOUSE.",family:"serif",fill:C.coral,size:118}],{y:450,gap:112,size:106}) +
  text(68,820,"Loc artistry, wellness and booking shaped into one elevated experience.",{size:30,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Brand world / Web design / Client portal","Beauty + wellness"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="1010" width="1000" height="510" rx="14" fill="#f0ebe3"/><circle cx="70" cy="1037" r="7" fill="#ff725e"/><circle cx="94" cy="1037" r="7" fill="#d7ff38"/><circle cx="118" cy="1037" r="7" fill="#b8afa3"/></svg>`)},{input:storyOgBarnes,left:50,top:1060}]
});

await render("story-work-04-2titexperience", SW, SH, { body:
  header(SW,"Couture House / Selected work","Work / 04") + text(68,280,"2TITEXPERIENCE",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"THE ARTISTRY"},{value:"WAS ALWAYS"},{value:"THERE.",family:"serif",fill:C.coral,size:130}],{y:450,gap:118,size:108}) +
  text(68,820,"Dimensional color and loc artistry refined into campaign-ready imagery.",{size:31,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Creative direction / Photo enhancement","2titexperience"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="850" width="900" height="1030" fill="#f0ebe3"/></svg>`)},{input:storyTwoTightFunmi,left:90,top:850}]
});

await render("story-work-05-sacrificial-conversations", SW, SH, { body:
  header(SW,"Couture House / Selected work","Work / 05") + text(68,280,"SACRIFICIAL CONVERSATIONS",{size:19,fill:C.acid,weight:800,spacing:2.5}) +
  headline([{value:"CONVICTION,"},{value:"MADE"},{value:"WEARABLE.",family:"serif",fill:C.coral,size:120}],{y:450,gap:118,size:104}) +
  text(68,820,"Editorial commerce built around story, purpose and product drops.",{size:30,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Creative direction / Commerce / Campaign","Culture-led commerce"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="1010" width="1000" height="510" rx="14" fill="#f0ebe3"/><circle cx="70" cy="1037" r="7" fill="#ff725e"/><circle cx="94" cy="1037" r="7" fill="#d7ff38"/><circle cx="118" cy="1037" r="7" fill="#b8afa3"/></svg>`)},{input:storySacrificial,left:50,top:1060}]
});

await render("story-work-06-magic-coils-product-campaign", SW, SH, { body:
  header(SW,"Couture House / Selected work","Work / 06") + text(68,280,"MAGIC COILS",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"ONE WORLD."},{value:"EVERY"},{value:"FORMAT.",family:"serif",fill:C.coral,size:130}],{y:450,gap:118,size:110}) +
  text(68,820,"Commerce, product styling and campaign content—connected.",{size:30,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Add link sticker: View all work","couturehouse.co/work"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="885" width="930" height="920" fill="#f0ebe3"/></svg>`)},{input:storyMagicFoamWrap,left:75,top:885}]
});

await render("story-services-01", SW, SH, { body:
  header(SW,"Couture House / Services","Services / 01") + text(68,285,"ONE ATELIER / CONNECTED SERVICES",{size:19,fill:C.acid,weight:800,spacing:2.9}) +
  headline([{value:"EVERYTHING"},{value:"YOUR DIGITAL"},{value:"WORLD NEEDS"},{value:"TO MOVE.",family:"serif",fill:C.coral,size:112}],{y:455,gap:114,size:100}) +
  text(68,850,"Strategy, websites, booking systems, commerce and content—",{size:31,fill:"#e1dcd5",weight:400}) + text(68,895,"built to work together as one connected world.",{size:31,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Services / Hair + beauty first","One connected world"),
  extra:[{input:servicesStoryArt,left:75,top:920}]
});

await render("story-services-02-websites", SW, SH, { body:
  header(SW,"Couture House / Services","Services / 02") + text(68,245,"01 / SALON WEBSITE DESIGN",{size:19,fill:C.acid,weight:800,spacing:3.0}) +
  headline([{value:"A DIGITAL HOME"},{value:"BUILT AROUND"},{value:"HOW YOU WORK.",family:"serif",fill:C.coral,size:92}],{y:400,gap:108,size:96}) +
  text(68,755,"Mobile-first websites that organize services, proof, policies",{size:29,fill:"#d8d2cb",weight:400}) + text(68,797,"and the path to booking into one experience you own.",{size:29,fill:"#d8d2cb",weight:400}) +
  `<g transform="translate(68 930)"><rect width="944" height="390" rx="18" fill="#111" stroke="#5b5650" stroke-width="2"/><circle cx="28" cy="28" r="7" fill="${C.coral}"/><circle cx="52" cy="28" r="7" fill="${C.acid}"/><circle cx="76" cy="28" r="7" fill="#b8afa3"/><rect x="42" y="85" width="420" height="235" rx="7" fill="#1d1b19" stroke="#80786f"/><path d="M82 132 H365 M82 170 H420 M82 208 H330" stroke="${C.cream}" stroke-opacity=".88" stroke-width="12"/><rect x="82" y="254" width="150" height="38" rx="19" fill="${C.acid}"/><rect x="510" y="85" width="180" height="235" rx="22" fill="#171513" stroke="${C.coral}" stroke-width="3"/><rect x="535" y="117" width="130" height="86" rx="4" fill="#3b312b"/><path d="M535 231 H650 M535 254 H625 M535 277 H652" stroke="${C.cream}" stroke-width="8"/><rect x="735" y="85" width="165" height="235" rx="30" fill="#171513" stroke="${C.acid}" stroke-width="3"/><circle cx="817" cy="292" r="11" fill="${C.acid}"/><path d="M760 128 H875 M760 158 H842 M760 188 H875 M760 218 H830" stroke="${C.cream}" stroke-width="7"/></g>` + footer(SW,SH,"Strategy / UX / Design / Development","Desktop → Mobile")
});

await render("story-services-03-booking-automation", SW, SH, { body:
  header(SW,"Couture House / Services","Services / 03") + text(68,260,"02 / BOOKING + AUTOMATION",{size:19,fill:C.acid,weight:800,spacing:2.9}) +
  headline([{value:"LESS"},{value:"FRICTION."},{value:"MORE FLOW.",family:"serif",fill:C.coral,size:126}],{y:430,gap:118,size:108}) +
  text(68,850,"Connect the website, inquiry, intake and scheduling journey",{size:30,fill:"#d8d2cb",weight:400}) + text(68,894,"so the next step feels clear for the client and the business.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<rect x="68" y="1060" width="258" height="92" rx="46" fill="none" stroke="${C.cream}" stroke-width="2"/>${text(197,1117,"DISCOVER",{size:18,fill:C.cream,weight:800,spacing:2.2,anchor:"middle"})}<path d="M342 1106 H408" stroke="${C.coral}" stroke-width="4"/><path d="M392 1090 L412 1106 L392 1122" fill="none" stroke="${C.coral}" stroke-width="4"/><rect x="430" y="1060" width="258" height="92" rx="46" fill="none" stroke="${C.cream}" stroke-width="2"/>${text(559,1117,"UNDERSTAND",{size:18,fill:C.cream,weight:800,spacing:2.0,anchor:"middle"})}<path d="M704 1106 H770" stroke="${C.coral}" stroke-width="4"/><path d="M754 1090 L774 1106 L754 1122" fill="none" stroke="${C.coral}" stroke-width="4"/><rect x="792" y="1060" width="220" height="92" rx="46" fill="${C.acid}"/>${text(902,1117,"BOOK",{size:18,fill:C.ink,weight:800,spacing:2.2,anchor:"middle"})}` +
  `<circle cx="197" cy="1310" r="86" fill="none" stroke="#4f4b47" stroke-width="2"/><circle cx="559" cy="1310" r="86" fill="none" stroke="#4f4b47" stroke-width="2"/><circle cx="902" cy="1310" r="86" fill="none" stroke="${C.acid}" stroke-width="4"/><path d="M283 1310 H473 M645 1310 H816" stroke="#4f4b47" stroke-width="2"/>` + footer(SW,SH,"Portals / Integrations / Client flow","Clearer next steps")
});

await render("story-services-04-commerce", SW, SH, { body:
  header(SW,"Couture House / Services","Services / 04") + text(68,245,"03 / SHOPIFY + E-COMMERCE",{size:19,fill:C.acid,weight:800,spacing:2.9}) +
  headline([{value:"TURN PRODUCTS"},{value:"INTO A WORLD"},{value:"PEOPLE WANT"},{value:"TO ENTER.",family:"serif",fill:C.coral,size:94}],{y:390,gap:103,size:92}) +
  text(68,840,"Commerce shaped through education, product storytelling",{size:29,fill:"#d8d2cb",weight:400}) + text(68,882,"and a purchase journey that feels like the brand.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Shopify / Product storytelling / Campaign","Story before checkout"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="945" width="930" height="820" fill="${C.paper}"/></svg>`)},{input:storyMagicSerum,left:75,top:945}]
});

await render("story-services-05-content-glow-up", SW, SH, { body:
  header(SW,"Couture House / Services","Services / 05") + text(68,245,"04 / CONTENT + THE GLOW UP",{size:19,fill:C.acid,weight:800,spacing:2.9}) +
  headline([{value:"MAKE THE WORK"},{value:"READY FOR"},{value:"EVERY FORMAT.",family:"serif",fill:C.coral,size:96}],{y:400,gap:108,size:96}) +
  text(68,755,"Photo enhancement, campaign imagery and social assets",{size:29,fill:"#d8d2cb",weight:400}) + text(68,797,"built to carry the same visual standard across the brand.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Art direction / Image enhancement / Content","2titexperience"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="850" width="900" height="920" fill="${C.paper}"/></svg>`)},{input:storyTwoTightMensCornrows,left:90,top:850}]
});

await render("story-services-06", SW, SH, { light:true, body:
  `<circle cx="920" cy="1460" r="430" fill="${C.pink}"/><circle cx="930" cy="1475" r="300" fill="${C.acid}" opacity=".9"/>` +
  header(SW,"Couture House / Services","Services / 06",true) + text(68,285,"CHOOSE THE RIGHT STARTING POINT",{size:19,fill:C.coral,weight:800,spacing:2.8}) +
  headline([{value:"NOT SURE"},{value:"WHERE TO"},{value:"START?",family:"serif",fill:C.coral,size:138}],{y:465,gap:122,size:112,light:true}) +
  text(68,910,"Tell us what is holding the business back.",{size:35,fill:"#4c4945",weight:400}) + text(68,958,"We’ll recommend the right place to begin.",{size:35,fill:"#4c4945",weight:400}) +
  `<rect x="68" y="1085" width="390" height="70" rx="35" fill="${C.ink}"/>${text(263,1130,"START A PROJECT",{size:19,fill:C.cream,weight:800,spacing:2.3,anchor:"middle"})}` + footer(SW,SH,"Add link sticker: Start a project","couturehouse.co/start-a-project",true)
});

await render("story-websites-01", SW, SH, { bg:images.websitesHighlight, body:
  header(SW,"Couture House / Websites","Websites / 01") + text(68,320,"OWN THE EXPERIENCE",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"A BOOKING LINK"},{value:"IS A TOOL."},{value:"YOUR WEBSITE"},{value:"IS THE HOME.",family:"serif",fill:C.coral,size:102}],{y:480,gap:112,size:92}) +
  text(68,1020,"A place to position the business, organize the proof,",{size:33,fill:"#e1dcd5",weight:400}) + text(68,1065,"explain the services and guide the next client.",{size:33,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Salon websites / Booking experiences","Built to be owned")
});

await render("story-websites-02-positioning", SW, SH, { body:
  header(SW,"Couture House / Websites","Websites / 02") + text(68,280,"01 / POSITIONING",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"MAKE THE RIGHT"},{value:"CLIENT FEEL"},{value:"SEEN.",family:"serif",fill:C.coral,size:128}],{y:440,gap:116,size:104}) +
  text(68,800,"Who you serve. What you specialize in. Why your approach is different.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"The Dreadlocks Salon / Oakland","Position before booking"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="980" width="1000" height="486" rx="14" fill="#f0ebe3"/><circle cx="70" cy="1007" r="7" fill="#ff725e"/><circle cx="94" cy="1007" r="7" fill="#d7ff38"/><circle cx="118" cy="1007" r="7" fill="#b8afa3"/></svg>`)},{input:storyDread,left:50,top:1030}]
});

await render("story-websites-03-trust", SW, SH, { body:
  header(SW,"Couture House / Websites","Websites / 03") + text(68,280,"02 / TRUST",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"LET THE"},{value:"REPUTATION"},{value:"ARRIVE FIRST.",family:"serif",fill:C.coral,size:108}],{y:440,gap:116,size:104}) +
  text(68,800,"Bring the story, expertise, services and proof into one credible experience.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Beverly's of Nashville","Legacy carried forward"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="960" width="1000" height="615" rx="14" fill="#f0ebe3"/><circle cx="70" cy="987" r="7" fill="#ff725e"/><circle cx="94" cy="987" r="7" fill="#d7ff38"/><circle cx="118" cy="987" r="7" fill="#b8afa3"/></svg>`)},{input:storyBevFull,left:50,top:1010}]
});

await render("story-websites-04-services", SW, SH, { body:
  header(SW,"Couture House / Websites","Websites / 04") + text(68,280,"03 / SERVICE STORY",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"A MENU LISTS"},{value:"THE SERVICE."},{value:"A WEBSITE"},{value:"EXPLAINS IT.",family:"serif",fill:C.coral,size:92}],{y:420,gap:105,size:92}) +
  text(68,835,"Give new clients enough context to choose with confidence.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"All Things Locs","Booking with context"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="990" width="1030" height="495" rx="14" fill="#f0ebe3"/><circle cx="55" cy="1017" r="7" fill="#ff725e"/><circle cx="79" cy="1017" r="7" fill="#d7ff38"/><circle cx="103" cy="1017" r="7" fill="#b8afa3"/></svg>`)},{input:storyAllThings,left:40,top:1040}]
});

await render("story-websites-05-commerce", SW, SH, { body:
  header(SW,"Couture House / Websites","Websites / 05") + text(68,280,"04 / COMMERCE",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"THE PRODUCT"},{value:"NEEDS MORE"},{value:"THAN A CART.",family:"serif",fill:C.coral,size:108}],{y:440,gap:116,size:100}) +
  text(68,800,"Education, brand story and purchase confidence belong in the same world.",{size:29,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"Magic Coils / Hair-care commerce","Story before checkout"),
  extra:[{input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="980" width="1030" height="495" rx="14" fill="#f0ebe3"/><circle cx="55" cy="1007" r="7" fill="#ff725e"/><circle cx="79" cy="1007" r="7" fill="#d7ff38"/><circle cx="103" cy="1007" r="7" fill="#b8afa3"/></svg>`)},{input:storyMagicWebsite,left:40,top:1030}]
});

await render("story-websites-06", SW, SH, { light:true, body:
  `<circle cx="920" cy="1470" r="430" fill="${C.pink}"/><circle cx="930" cy="1480" r="300" fill="${C.acid}" opacity=".9"/>` +
  header(SW,"Couture House / Websites","Websites / 06",true) + text(68,285,"THE THREE-JOB TEST",{size:19,fill:C.coral,weight:800,spacing:3.2}) +
  headline([{value:"GET FOUND."},{value:"EARN TRUST."},{value:"MAKE ACTION"},{value:"EASY.",family:"serif",fill:C.coral,size:125}],{y:460,gap:118,size:106,light:true}) +
  text(68,1030,"If the website cannot do all three,",{size:35,fill:"#4c4945",weight:400}) + text(68,1077,"it is not finished doing its job.",{size:35,fill:"#4c4945",weight:400}) + footer(SW,SH,"Add link sticker: Explore website design","couturehouse.co/services",true)
});

await render("story-the-glow-up-01", SW, SH, { bg:images.glowUpHighlight, body:
  header(SW,"Couture House / The Glow Up","Glow Up / 01") + text(68,285,"REAL WORK / REINTRODUCED",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"THE SERVICE"},{value:"WAS ALWAYS"},{value:"BEAUTIFUL."},{value:"THE IMAGE NEEDED"},{value:"TO CATCH UP.",family:"serif",fill:C.coral,size:94}],{y:450,gap:104,size:92}) +
  text(68,1080,"The artistry stays real.",{size:34,fill:"#e1dcd5",weight:400}) + text(68,1127,"The presentation becomes ready for the brand.",{size:34,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Creative direction / Image enhancement","Couture House")
});

await render("story-the-glow-up-02-sculptural-updo", SW, SH, { body:
  header(SW,"Couture House / The Glow Up","Glow Up / 02") + text(68,230,"SCULPTURAL LOC UPDO",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"THE CRAFT"},{value:"STAYED."},{value:"THE NOISE LEFT.",family:"serif",fill:C.coral,size:90}],{y:365,gap:100,size:92}) +
  text(68,690,"Background reconstruction + editorial light.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<rect x="57" y="1085" width="151" height="48" rx="24" fill="${C.ink}" stroke="${C.cream}"/><rect x="810" y="1495" width="200" height="50" rx="25" fill="${C.acid}"/>` +
  text(132,1117,"BEFORE",{size:17,fill:C.cream,weight:800,spacing:2.2,anchor:"middle"}) + text(910,1528,"GLOW UP",{size:17,fill:C.ink,weight:800,spacing:2.0,anchor:"middle"}) +
  text(68,1632,"Real hairstyle + real service moment.",{size:23,fill:"#d8d2cb",weight:400}) + text(68,1668,"Environment and finish refined through Couture House art direction.",{size:23,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"The Dreadlocks Salon Charlotte","Before → Glow Up"),
  extra:[
    {input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="310" y="780" width="720" height="720" fill="${C.paper}"/><rect x="55" y="1095" width="380" height="380" fill="${C.paper}"/></svg>`)},
    {input:revivalSculptAfter,left:325,top:795},
    {input:revivalSculptBefore,left:75,top:1115}
  ]
});

await render("story-the-glow-up-03-double-loc-bun", SW, SH, { body:
  header(SW,"Couture House / The Glow Up","Glow Up / 03") + text(68,230,"CHARLOTTE / DOUBLE LOC BUN",{size:19,fill:C.acid,weight:800,spacing:2.9}) +
  headline([{value:"THE FORM"},{value:"WAS THERE."},{value:"THE WORLD ARRIVED.",family:"serif",fill:C.coral,size:84}],{y:365,gap:100,size:92}) +
  text(68,690,"Salon context refined around the original loc design.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<rect x="57" y="1085" width="151" height="48" rx="24" fill="${C.ink}" stroke="${C.cream}"/><rect x="810" y="1495" width="200" height="50" rx="25" fill="${C.acid}"/>` +
  text(132,1117,"BEFORE",{size:17,fill:C.cream,weight:800,spacing:2.2,anchor:"middle"}) + text(910,1528,"GLOW UP",{size:17,fill:C.ink,weight:800,spacing:2.0,anchor:"middle"}) +
  text(68,1632,"Real hairstyle + real service moment.",{size:23,fill:"#d8d2cb",weight:400}) + text(68,1668,"Environment and finish refined through Couture House art direction.",{size:23,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"The Dreadlocks Salon Charlotte","Before → Glow Up"),
  extra:[
    {input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="310" y="780" width="720" height="720" fill="${C.paper}"/><rect x="55" y="1095" width="380" height="380" fill="${C.paper}"/></svg>`)},
    {input:revivalDoubleAfter,left:325,top:795},
    {input:revivalDoubleBefore,left:75,top:1115}
  ]
});

await render("story-the-glow-up-04-linda-microlocs", SW, SH, { body:
  header(SW,"Couture House / The Glow Up","Glow Up / 04") + text(68,230,"2TITEXPERIENCE / LINDA",{size:19,fill:C.acid,weight:800,spacing:3.0}) +
  headline([{value:"FULL-LENGTH"},{value:"ARTISTRY,"},{value:"READY TO LEAD.",family:"serif",fill:C.coral,size:90}],{y:365,gap:100,size:92}) +
  text(68,690,"Full-length composition + salon reconstruction.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<rect x="57" y="1085" width="151" height="48" rx="24" fill="${C.ink}" stroke="${C.cream}"/><rect x="810" y="1495" width="200" height="50" rx="25" fill="${C.acid}"/>` +
  text(132,1117,"BEFORE",{size:17,fill:C.cream,weight:800,spacing:2.2,anchor:"middle"}) + text(910,1528,"GLOW UP",{size:17,fill:C.ink,weight:800,spacing:2.0,anchor:"middle"}) +
  text(68,1632,"Real hairstyle + real service moment.",{size:23,fill:"#d8d2cb",weight:400}) + text(68,1668,"Environment and finish refined through Couture House art direction.",{size:23,fill:"#d8d2cb",weight:400}) + footer(SW,SH,"2titexperience","Before → Glow Up"),
  extra:[
    {input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="310" y="780" width="720" height="720" fill="${C.paper}"/><rect x="55" y="1095" width="380" height="380" fill="${C.paper}"/></svg>`)},
    {input:revivalLindaAfter,left:325,top:795},
    {input:revivalLindaBefore,left:75,top:1115}
  ]
});

await render("story-the-glow-up-05", SW, SH, { light:true, body:
  `<circle cx="925" cy="1460" r="430" fill="${C.pink}"/><circle cx="940" cy="1475" r="300" fill="${C.acid}" opacity=".9"/>` +
  header(SW,"Couture House / The Glow Up","Glow Up / 05",true) + text(68,285,"READY FOR EVERY BRAND TOUCHPOINT",{size:19,fill:C.coral,weight:800,spacing:2.7}) +
  headline([{value:"YOUR WORK"},{value:"DESERVES TO"},{value:"LOOK AS GOOD"},{value:"ONLINE.",family:"serif",fill:C.coral,size:126}],{y:455,gap:118,size:104,light:true}) +
  text(68,1010,"Stronger imagery for websites, campaigns,",{size:33,fill:"#4c4945",weight:400}) + text(68,1055,"service menus and social content.",{size:33,fill:"#4c4945",weight:400}) + footer(SW,SH,"Add link sticker: Explore content creation","couturehouse.co/services",true)
});

await render("story-process-01-discover", SW, SH, { bg:images.processHighlight, body:
  header(SW,"Couture House / How we work","Process / 01") + text(68,280,"01 / DISCOVER",{size:19,fill:C.acid,weight:800,spacing:3.3}) +
  headline([{value:"FIRST,"},{value:"WE LISTEN."},{value:"THEN WE LOOK",family:"serif",fill:C.coral,size:105},{value:"CLOSER."}],{y:455,gap:114,size:106}) +
  text(68,1015,"Goals. Audience. Offer. Current digital experience.",{size:32,fill:"#e1dcd5",weight:400}) + text(68,1062,"We find what is working, what is missing and what must change.",{size:30,fill:"#e1dcd5",weight:400}) +
  processRail(1) + footer(SW,SH,"Discover / Listen before designing","01 of 06")
});

await render("story-process-02-position", SW, SH, { light:true, body:
  `<circle cx="925" cy="430" r="390" fill="${C.pink}"/><circle cx="935" cy="430" r="245" fill="${C.acid}" opacity=".88"/><path d="M720 1340 C840 1220 930 1230 1065 1090" fill="none" stroke="${C.coral}" stroke-width="7"/>` +
  header(SW,"Couture House / How we work","Process / 02",true) + text(68,280,"02 / POSITION",{size:19,fill:C.coral,weight:800,spacing:3.3}) +
  headline([{value:"MAKE THE"},{value:"RIGHT THING"},{value:"CLEAR.",family:"serif",fill:C.coral,size:128}],{y:455,gap:118,size:108,light:true}) +
  text(68,895,"What should the business be known for?",{size:35,fill:"#4c4945",weight:400}) + text(68,943,"What does the right client need to understand?",{size:35,fill:"#4c4945",weight:400}) + text(68,1020,"Positioning turns those answers into a focused promise.",{size:31,fill:"#4c4945",weight:400}) +
  processRail(2,true) + footer(SW,SH,"Position / Clarity before aesthetics","02 of 06",true)
});

await render("story-process-03-direct", SW, SH, { body:
  `<path d="M720 110 C845 260 830 455 1015 565" fill="none" stroke="${C.coral}" stroke-width="4" opacity=".72"/><rect x="655" y="125" width="310" height="610" rx="155" fill="none" stroke="#4f4b47" stroke-width="3" transform="rotate(-13 810 430)"/><rect x="735" y="155" width="250" height="560" rx="125" fill="none" stroke="${C.acid}" stroke-width="3" opacity=".72" transform="rotate(15 860 430)"/>` +
  header(SW,"Couture House / How we work","Process / 03") + text(68,280,"03 / DIRECT",{size:19,fill:C.acid,weight:800,spacing:3.3}) +
  headline([{value:"GIVE THE"},{value:"BRAND A"},{value:"DIRECTION.",family:"serif",fill:C.coral,size:118}],{y:455,gap:118,size:108}) +
  text(68,920,"Visual world. Content hierarchy. Conversion journey.",{size:33,fill:"#e1dcd5",weight:400}) + text(68,968,"Every choice begins working toward the same feeling and action.",{size:30,fill:"#e1dcd5",weight:400}) +
  `<rect x="68" y="1135" width="360" height="76" rx="38" fill="none" stroke="${C.cream}" stroke-width="2"/>${text(248,1184,"LOOK + FEEL",{size:19,fill:C.cream,weight:800,spacing:2.5,anchor:"middle"})}<path d="M445 1173 H622" stroke="${C.coral}" stroke-width="4"/><path d="M606 1157 L626 1173 L606 1189" fill="none" stroke="${C.coral}" stroke-width="4"/><rect x="640" y="1135" width="360" height="76" rx="38" fill="${C.acid}"/>${text(820,1184,"NEXT ACTION",{size:19,fill:C.ink,weight:800,spacing:2.5,anchor:"middle"})}` +
  processRail(3) + footer(SW,SH,"Direct / One connected brand world","03 of 06")
});

await render("story-process-04-build", SW, SH, { body:
  header(SW,"Couture House / How we work","Process / 04") + text(68,245,"04 / BUILD",{size:19,fill:C.acid,weight:800,spacing:3.3}) +
  headline([{value:"THE STRATEGY"},{value:"BECOMES"},{value:"A SYSTEM.",family:"serif",fill:C.coral,size:116}],{y:390,gap:108,size:100}) +
  text(68,750,"Responsive website, booking connections, commerce",{size:30,fill:"#d8d2cb",weight:400}) + text(68,792,"and the supporting systems that make it useful.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<circle cx="70" cy="927" r="7" fill="${C.coral}"/><circle cx="94" cy="927" r="7" fill="${C.acid}"/><circle cx="118" cy="927" r="7" fill="#b8afa3"/>` +
  processRail(4) + footer(SW,SH,"Build / Super Sodiq","Responsive + connected"),
  extra:[
    {input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="900" width="1000" height="486" rx="14" fill="${C.paper}"/></svg>`)},
    {input:storySodiq,left:50,top:950}
  ]
});

await render("story-process-05-refine", SW, SH, { light:true, body:
  header(SW,"Couture House / How we work","Process / 05",true) + text(68,260,"05 / REFINE",{size:19,fill:C.coral,weight:800,spacing:3.3}) +
  headline([{value:"EVERY DETAIL"},{value:"GETS"},{value:"TESTED.",family:"serif",fill:C.coral,size:130}],{y:425,gap:118,size:106,light:true}) +
  text(68,805,"Before launch, the experience has to hold together everywhere.",{size:31,fill:"#4c4945",weight:400}) +
  [["MOBILE QA","Responsive layouts + tap targets"],["COPY","Clarity + calls to action"],["PERFORMANCE","Speed + media behavior"],["MEASUREMENT","Analytics + launch checks"]].map((item,i)=>`<rect x="68" y="${925+i*118}" width="944" height="94" rx="4" fill="${i===3?C.acid:"none"}" stroke="${C.ink}" stroke-width="2"/>${text(100,982+i*118,item[0],{size:21,fill:C.ink,weight:800,spacing:2.2})}${text(980,982+i*118,item[1],{size:20,fill:C.ink,weight:400,anchor:"end"})}`).join("") +
  processRail(5,true) + footer(SW,SH,"Refine / Ready before public","05 of 06",true)
});

await render("story-process-06-launch", SW, SH, { body:
  header(SW,"Couture House / How we work","Process / 06") + text(68,280,"06 / LAUNCH",{size:19,fill:C.acid,weight:800,spacing:3.3}) +
  headline([{value:"LAUNCH IS"},{value:"A BEGINNING."},{value:"NOT A GOODBYE.",family:"serif",fill:C.coral,size:92}],{y:455,gap:118,size:105}) +
  text(68,820,"Publish. Measure. Learn. Keep improving.",{size:35,fill:"#e1dcd5",weight:400}) + text(68,868,"The new digital home goes live with a clear next move.",{size:31,fill:"#e1dcd5",weight:400}) +
  text(75,940,"WASHINGTON WIZKIDS / LIVE BRAND WORLD",{size:17,fill:C.acid,weight:800,spacing:2.4}) +
  processRail(6) + footer(SW,SH,"Add link sticker: Build with us","couturehouse.co/start-a-project"),
  extra:[
    {input:Buffer.from(`<svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="965" width="930" height="540" rx="14" fill="${C.paper}"/><circle cx="105" cy="992" r="7" fill="${C.coral}"/><circle cx="129" cy="992" r="7" fill="${C.acid}"/><circle cx="153" cy="992" r="7" fill="#b8afa3"/></svg>`)},
    {input:storyWashington,left:75,top:1015}
  ]
});

await render("story-faq-01", SW, SH, { bg:images.faqHighlight, body:
  header(SW,"Couture House / FAQ","FAQ / 01") + text(68,305,"BEFORE WE BUILD",{size:19,fill:C.acid,weight:800,spacing:3.4}) +
  headline([{value:"QUESTIONS"},{value:"ARE PART OF"},{value:"THE PROCESS.",family:"serif",fill:C.coral,size:122}],{y:500,gap:120,size:108}) +
  text(68,930,"Clear answers before scope, design or commitment.",{size:34,fill:"#e1dcd5",weight:400}) + footer(SW,SH,"Seven answers / Start here","Couture House")
});

await render("story-faq-02-remote", SW, SH, { body:
  `<circle cx="850" cy="1165" r="290" fill="none" stroke="#4f4b47" stroke-width="3"/><circle cx="850" cy="1165" r="205" fill="none" stroke="${C.coral}" stroke-width="4"/><circle cx="850" cy="1165" r="112" fill="none" stroke="${C.acid}" stroke-width="5"/><path d="M120 1275 C350 1010 555 1430 850 1165" fill="none" stroke="${C.cream}" stroke-width="4" opacity=".82"/>` +
  header(SW,"Couture House / FAQ","FAQ / 02") + text(68,280,"01 / HOW WE WORK",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"DO YOU WORK"},{value:"REMOTELY?",family:"serif",fill:C.coral,size:138}],{y:455,gap:122,size:110}) +
  text(68,790,"Yes. Couture House works remotely nationwide.",{size:34,fill:"#d8d2cb",weight:400}) + text(68,838,"We can also meet in person when the project",{size:31,fill:"#d8d2cb",weight:400}) + text(68,882,"genuinely calls for it.",{size:31,fill:"#d8d2cb",weight:400}) +
  footer(SW,SH,"Remote nationwide / In-person when useful","Answer 01")
});

await render("story-faq-03-booking-platform", SW, SH, { light:true, body:
  header(SW,"Couture House / FAQ","FAQ / 03",true) + text(68,280,"02 / WEBSITE + BOOKING",{size:19,fill:C.coral,weight:800,spacing:3.0}) +
  headline([{value:"I ALREADY USE"},{value:"BOOKSY OR"},{value:"GLOSSGENIUS."},{value:"DO I STILL NEED"},{value:"A WEBSITE?",family:"serif",fill:C.coral,size:94}],{y:430,gap:104,size:88,light:true}) +
  text(68,1030,"Usually. Keep the platform for scheduling.",{size:33,fill:"#4c4945",weight:400}) + text(68,1078,"Let the website handle positioning, services, proof,",{size:30,fill:"#4c4945",weight:400}) + text(68,1122,"policies, search foundations and the path into booking.",{size:30,fill:"#4c4945",weight:400}) +
  `<rect x="68" y="1280" width="300" height="78" rx="39" fill="none" stroke="${C.ink}" stroke-width="2"/>${text(218,1330,"WEBSITE",{size:20,fill:C.ink,weight:800,spacing:2.5,anchor:"middle"})}<path d="M390 1319 H660" stroke="${C.coral}" stroke-width="5"/><path d="M642 1302 L665 1319 L642 1336" fill="none" stroke="${C.coral}" stroke-width="5"/><rect x="685" y="1280" width="327" height="78" rx="39" fill="${C.acid}"/>${text(848,1330,"BOOKING PLATFORM",{size:18,fill:C.ink,weight:800,spacing:2.0,anchor:"middle"})}` +
  footer(SW,SH,"Connect the tools / Own the experience","Answer 02",true)
});

await render("story-faq-04-photos", SW, SH, { body:
  header(SW,"Couture House / FAQ","FAQ / 04") + text(68,280,"03 / CONTENT READINESS",{size:19,fill:C.acid,weight:800,spacing:3.0}) +
  headline([{value:"DO I NEED"},{value:"PROFESSIONAL"},{value:"PHOTOS FIRST?",family:"serif",fill:C.coral,size:118}],{y:455,gap:116,size:104}) +
  text(68,850,"Not necessarily. We review what you already have,",{size:33,fill:"#d8d2cb",weight:400}) + text(68,898,"identify the gaps and shape the right content path.",{size:33,fill:"#d8d2cb",weight:400}) +
  `<g transform="translate(68 1060)"><rect width="270" height="360" rx="6" fill="#171513" stroke="#5d5751" stroke-width="2"/><path d="M35 285 L105 205 L158 252 L220 160 L245 285 Z" fill="${C.coral}" opacity=".48"/><circle cx="78" cy="92" r="28" fill="${C.acid}" opacity=".8"/><rect x="337" width="270" height="360" rx="6" fill="#171513" stroke="${C.coral}" stroke-width="3"/><path d="M372 285 L442 205 L495 252 L557 160 L582 285 Z" fill="${C.coral}" opacity=".78"/><circle cx="415" cy="92" r="28" fill="${C.acid}"/><rect x="674" width="270" height="360" rx="6" fill="#171513" stroke="${C.acid}" stroke-width="3"/><path d="M709 285 L779 205 L832 252 L894 160 L919 285 Z" fill="${C.cream}" opacity=".86"/><circle cx="752" cy="92" r="28" fill="${C.coral}"/></g>` +
  footer(SW,SH,"Audit / Refine / Direct","Answer 03")
});

await render("story-faq-05-timeline", SW, SH, { light:true, body:
  header(SW,"Couture House / FAQ","FAQ / 05",true) + text(68,280,"04 / PROJECT RHYTHM",{size:19,fill:C.coral,weight:800,spacing:3.1}) +
  headline([{value:"HOW LONG"},{value:"DOES A WEBSITE"},{value:"TAKE?",family:"serif",fill:C.coral,size:138}],{y:455,gap:120,size:106,light:true}) +
  text(68,855,"It depends on scope, content readiness",{size:32,fill:"#4c4945",weight:400}) + text(68,903,"and feedback rhythm. Your proposal defines the milestones—",{size:30,fill:"#4c4945",weight:400}) + text(68,947,"and what each side needs to keep the work moving.",{size:30,fill:"#4c4945",weight:400}) +
  `<line x1="105" y1="1240" x2="975" y2="1240" stroke="${C.ink}" stroke-width="3"/>${[[105,"SCOPE"],[395,"CONTENT"],[685,"BUILD"],[975,"LAUNCH"]].map(([x,label],i)=>`<circle cx="${x}" cy="1240" r="${i===3?18:12}" fill="${i===3?C.acid:C.paper}" stroke="${C.ink}" stroke-width="3"/>${text(x,1300,label,{size:17,fill:C.ink,weight:800,spacing:2.0,anchor:"middle"})}`).join("")}` + footer(SW,SH,"Clear milestones / Shared momentum","Answer 04",true)
});

await render("story-faq-06-investment", SW, SH, { body:
  header(SW,"Couture House / FAQ","FAQ / 06") + text(68,280,"05 / INVESTMENT",{size:19,fill:C.acid,weight:800,spacing:3.2}) +
  headline([{value:"WHAT WILL"},{value:"MY PROJECT"},{value:"COST?",family:"serif",fill:C.coral,size:138}],{y:455,gap:120,size:108}) +
  text(68,855,"Investment follows the work that actually needs to be built.",{size:32,fill:"#d8d2cb",weight:400}) + text(68,903,"After reviewing your goals, we recommend the right",{size:30,fill:"#d8d2cb",weight:400}) + text(68,947,"starting point and present a clear scope before commitment.",{size:30,fill:"#d8d2cb",weight:400}) +
  `<g transform="translate(68 1100)"><rect width="944" height="90" rx="45" fill="none" stroke="#4f4b47" stroke-width="2"/><rect width="285" height="90" rx="45" fill="${C.coral}" opacity=".9"/><rect x="320" width="285" height="90" rx="45" fill="${C.cream}" opacity=".92"/><rect x="640" width="304" height="90" rx="45" fill="${C.acid}"/>${text(142,57,"GOALS",{size:20,fill:C.ink,weight:800,spacing:2.2,anchor:"middle"})}${text(462,57,"SCOPE",{size:20,fill:C.ink,weight:800,spacing:2.2,anchor:"middle"})}${text(792,57,"PROPOSAL",{size:20,fill:C.ink,weight:800,spacing:2.2,anchor:"middle"})}</g>` + footer(SW,SH,"Right-sized scope / Clear proposal","Answer 05")
});

await render("story-faq-07-redesign", SW, SH, { light:true, body:
  header(SW,"Couture House / FAQ","FAQ / 07",true) + text(68,280,"06 / REVAMP OR REBUILD",{size:19,fill:C.coral,weight:800,spacing:3.0}) +
  headline([{value:"CAN YOU FIX"},{value:"MY EXISTING"},{value:"WEBSITE?",family:"serif",fill:C.coral,size:132}],{y:455,gap:120,size:104,light:true}) +
  text(68,850,"Yes. First we decide what is worth keeping.",{size:33,fill:"#4c4945",weight:400}) + text(68,898,"Then we recommend a focused revamp or full rebuild",{size:31,fill:"#4c4945",weight:400}) + text(68,944,"based on strategy, content, performance and ownership.",{size:31,fill:"#4c4945",weight:400}) +
  `<rect x="68" y="1095" width="430" height="245" rx="8" fill="none" stroke="${C.ink}" stroke-width="2"/>${text(105,1160,"KEEP THE FOUNDATION",{size:18,fill:C.coral,weight:800,spacing:2.1})}${text(105,1245,"REVAMP",{size:64,fill:C.ink,weight:800,spacing:-3})}<rect x="582" y="1095" width="430" height="245" rx="8" fill="${C.ink}"/>${text(619,1160,"CHANGE THE SYSTEM",{size:18,fill:C.acid,weight:800,spacing:2.1})}${text(619,1245,"REBUILD",{size:64,fill:C.cream,weight:800,spacing:-3})}` +
  footer(SW,SH,"Review first / Recommend second","Answer 06",true)
});

await render("story-faq-08", SW, SH, { body:
  `<circle cx="900" cy="1415" r="405" fill="${C.pink}" opacity=".94"/><circle cx="910" cy="1425" r="275" fill="${C.acid}"/><path d="M75 1230 C300 1020 520 1450 830 1180" fill="none" stroke="${C.coral}" stroke-width="7"/>` +
  header(SW,"Couture House / FAQ","FAQ / 08") + text(68,285,"YOUR QUESTION MAY BE THE NEXT ONE",{size:19,fill:C.acid,weight:800,spacing:2.7}) +
  headline([{value:"STILL"},{value:"WONDERING"},{value:"SOMETHING?",family:"serif",fill:C.coral,size:125}],{y:475,gap:120,size:108}) +
  text(68,900,"Tell us what you are building—or what is not working.",{size:33,fill:"#d8d2cb",weight:400}) + text(68,948,"We’ll help identify the right next conversation.",{size:33,fill:"#d8d2cb",weight:400}) +
  `<rect x="68" y="1075" width="390" height="72" rx="36" fill="${C.acid}"/>${text(263,1121,"START A PROJECT",{size:19,fill:C.ink,weight:800,spacing:2.3,anchor:"middle"})}` + footer(SW,SH,"Add link sticker: Start a project","couturehouse.co/start-a-project")
});

await render("story-audit", SW, SH, { bg:images.locs, body:
  header(SW,"Couture House / Free review","Limited weekly") + text(68,315,"THREE FOCUSED OBSERVATIONS",{size:19,fill:C.acid,weight:800,spacing:3}) +
  headline([{value:"IS YOUR WEBSITE"},{value:"READY FOR YOUR"},{value:"NEXT CLIENT?",family:"serif",fill:C.coral,size:128}],{y:510,gap:122,size:108}) +
  text(68,950,"Send your link. We’ll look at trust, booking",{size:34,fill:"#dfdad3",weight:400}) + text(68,997,"and discovery.",{size:34,fill:"#dfdad3",weight:400}) + footer(SW,SH,"DM “AUDIT”","No pressure / Real feedback",false,true)
});

console.log(`Rendered social assets to ${out}`);
