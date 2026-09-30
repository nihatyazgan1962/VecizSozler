const fs = require('fs');
const path = require('path');

const verbatimUpdates = {
  14: {
    text: "Namazın mânâsı, Cenâb-ı Hakk'ı tesbih ve tâzim ve şükürdür.",
    source: "Sözler",
    section: "9. Söz",
    wisdom: "Namaz; kâinatın Hâlık'ına karşı zikir, tazim ve hamd vazifesinin fihristesidir."
  },
  16: {
    text: "Yirmi dört saat ömürden, yalnız bir tek saati beş vakit namaza abdestle kâfidir.",
    source: "Sözler",
    section: "4. Söz",
    wisdom: "Günde bir saati ebedî sermaye yapmak, aklın ve hikmetin gereğidir."
  },
  22: {
    text: "İbadet, mukaddeme-i mükâfat-ı lâhika değil, belki netice-i nimet-i sâbıkadır.",
    source: "Lem'alar",
    section: "17. Lem'a",
    wisdom: "İbadet, verilmiş sonsuz nimetlerin şükrüdür; peşin alınan ikramların mukabelesidir."
  },
  35: {
    text: "Dünkü gün geçti, yarın ise meçhuldür; öyle ise hakikî ömrünü, bulunduğun gün bil.",
    source: "Sözler",
    section: "21. Söz",
    wisdom: "Geçmişin hüznü ve geleceğin endişesi yerine, içinde bulunduğun anın hakkını ver."
  },
  38: {
    text: "Sizdeki gençlik kat’iyen gidecek. Eğer daire-i meşruada kalmazsanız, o gençlik zayi olup gayet azaplı ve elemli belâlar getirecek.",
    source: "Sözler",
    section: "Gençlik Rehberi / 13. Söz",
    wisdom: "Gençliğin kıymeti ve ebedî saadeti, iffet ve istikamet dairesinde yaşanmasıyladır."
  },
  48: {
    text: "Kendi rızasıyla zarara girene merhamet edilmez ve lâyık değildir.",
    source: "Sözler",
    section: "Hakikat Çekirdekleri / 26. Söz",
    wisdom: "Bile bile günaha ve yanlışa giren kimse, neticelerine katlanmaya mahkûmdur."
  },
  49: {
    text: "En bahtiyar odur ki: Dünya için âhiretini unutmasın, âhiretini dünyaya feda etmesin.",
    source: "Mektubat",
    section: "16. Mektup",
    wisdom: "Dünya ile âhiret arasındaki mânevî dengeyi kuran kimse, her iki âlemde de huzur bulur."
  },
  54: {
    text: "Şükrün mikyası: Kanaattir ve iktisattır ve rızadır ve kısmetinden memnuniyettir.",
    source: "Mektubat",
    section: "28. Mektup",
    wisdom: "Şükretmek; aza kanaat, israftan kaçınmak ve İlâhî taksime razı olmakla tezahür eder."
  },
  55: {
    text: "Sabır üçtür: Biri mâsiyete karşı sabırdır, biri musibete karşı sabırdır, biri de ibadette sebattır.",
    source: "Lem'alar",
    section: "2. Lem'a",
    wisdom: "Sabır; günahlardan kaçınmak, dertlere göğüs germek ve ibadette devamlılık göstermektir."
  },
  57: {
    text: "İktisat eden, maişetçe aile zahmetini ve meşakkatini çok çekmez.",
    source: "Lem'alar",
    section: "19. Lem'a (İktisat Risalesi)",
    wisdom: "Tutumlu yaşayan kimse, geçim darlığı ve borç zilleti yaşamaz."
  },
  58: {
    text: "İsraf ise kanaatsizliği intaç eder. Kanaatsizlik ise sa’ye, çalışmaya şevki kırar, tembelliğe atar.",
    source: "Lem'alar",
    section: "19. Lem'a",
    wisdom: "İsraf bereketsizliği, doyumsuzluğu ve tembelliği netice verir."
  },
  60: {
    text: "İman tevhidi, tevhid teslimi, teslim tevekkülü, tevekkül saadet-i dâreyni iktiza eder.",
    source: "Sözler",
    section: "23. Söz",
    wisdom: "İman zinciri; teslim ve tevekkülle insanı iki cihan saadetine ulaştırır."
  },
  70: {
    text: "Bir incir çekirdeğinden koca incir ağacını çıkaran Kudret, insanı da kabirden haşre çıkarmaya kadirdir.",
    source: "Sözler",
    section: "10. Söz",
    wisdom: "Kâinattaki harika yaratılış delilleri, öldükten sonra dirilmeyi gözler önüne serer."
  },
  80: {
    text: "Gıybet, ehl-i adavet ve hasedin en alçak bir silâhıdır.",
    source: "Mektubat",
    section: "22. Mektup (Uhuvvet Risalesi)",
    wisdom: "Gıybet; kin, haset ve düşmanlık besleyenlerin en çirkin sığınağıdır."
  },
  82: {
    text: "İttifakta kuvvet var, ittihadda hayat var, uhuvvette saadet var.",
    source: "Münazarat",
    section: "Münazarat",
    wisdom: "Birlik ve kardeşlik, cemiyetin hayat ve saadet kaynağıdır."
  },
  84: {
    text: "İhlası kazanmak ve muhafaza etmek, en mühim ve en lüzumlu bir esastır.",
    source: "Lem'alar",
    section: "21. Lem'a",
    wisdom: "Hizmette ve kullukta en büyük kuvvet ve koruyucu zırh ihlastır."
  },
  88: {
    text: "Milletimin imanını selâmette görürsem, Cehennemin alevleri içinde yanmaya razıyım. Çünki vücudum yanarken, gönlüm gül-gülistan olur.",
    source: "Tarihçe-i Hayat",
    section: "Tahliller",
    wisdom: "Ehl-i imanın selâmeti için nefsi ve şahsî rahatı tamamen feda etme fedakârlığıdır."
  },
  93: {
    text: "Ümitsiz olmayınız; şu istikbal inkılâbı içinde en yüksek gür sadâ, İslâmın sadâsı olacaktır!",
    source: "Hutbe-i Şamiye",
    section: "Hutbe-i Şamiye / Tarihçe-i Hayat",
    wisdom: "Geleceğe dâir sarsılmaz bir iman, şevk ve hakikat müjdesidir."
  },
  99: {
    text: "Sıdk, İslâmiyetin üssü'l-esasıdır; ulvî seciyelerin rabıtasıdır; hissiyât-ı âliyenin meş'alesidir.",
    source: "Hutbe-i Şamiye",
    section: "Hutbe-i Şamiye",
    wisdom: "Doğruluk ve dürüstlük, bütün ahlâkî faziletlerin ve dinin temel direğidir."
  },
  101: {
    text: "Yeis, ümmetin hayat damarını kesen en dehşetli bir hastalıktır.",
    source: "Hutbe-i Şamiye",
    section: "Hutbe-i Şamiye",
    wisdom: "Ümitsizlik, bütün gayret ve mânevî terakkiyi felç eden öldürücü bir illettir."
  },
  102: {
    text: "Bâtıl şeyleri iyice tasvir, sâfi zihinleri idlâldir.",
    source: "Münazarat",
    section: "Hakikat Çekirdekleri / Münazarat",
    wisdom: "Yanlış ve çirkin şeyleri ayrıntısıyla anlatmak, temiz zihinleri bulandırmaktan başka işe yaramaz."
  }
};

// 1. Update app.js
let appJsContent = fs.readFileSync('app.js', 'utf8');

for (const [idStr, upd] of Object.entries(verbatimUpdates)) {
  const id = parseInt(idStr);
  // Match the object with this id in app.js
  const regex = new RegExp(`({\\s*id:\\s*${id},[\\s\\S]*?text:\\s*\")[^\"]*(\"[\\s\\S]*?source:\\s*\")[^\"]*(\"[\\s\\S]*?section:\\s*\")[^\"]*(\"[\\s\\S]*?})`);
  
  if (regex.test(appJsContent)) {
    appJsContent = appJsContent.replace(regex, (match, p1, p2, p3, p4) => {
      // let's do precise replacement
      return match
        .replace(/text:\s*"[^"]*"/, `text: "${upd.text}"`)
        .replace(/source:\s*"[^"]*"/, `source: "${upd.source}"`)
        .replace(/section:\s*"[^"]*"/, `section: "${upd.section}"`)
        .replace(/wisdom:\s*"[^"]*"/, `wisdom: "${upd.wisdom}"`);
    });
    console.log(`Updated app.js id: ${id}`);
  } else {
    console.warn(`Could not find id: ${id} with regex in app.js`);
  }
}

fs.writeFileSync('app.js', appJsContent, 'utf8');
console.log('app.js written successfully.');

// 2. Update VECIZ_SOZLER.md
let mdContent = fs.readFileSync('VECIZ_SOZLER.md', 'utf8');
for (const [idStr, upd] of Object.entries(verbatimUpdates)) {
  const id = parseInt(idStr);
  // Match markdown pattern e.g. "14. **\"...\"**  \n> *Kaynak: ...* | *Hikmet Özü: ...*"
  const mdRegex = new RegExp(`(${id}\\.\\s*\\*\\*\")[^\"]*(\"\\*\\*[\\s\\S]*?>\\s*\\*Kaynak:\\s*)[^\\*]*(\\*\\s*\\|\\s*\\*Hikmet Özü:\\s*)[^\\n]*`);
  if (mdRegex.test(mdContent)) {
    mdContent = mdContent.replace(mdRegex, `$1${upd.text}$2${upd.source} (${upd.section})$3${upd.wisdom}`);
    console.log(`Updated VECIZ_SOZLER.md id: ${id}`);
  } else {
    console.warn(`Could not find id: ${id} in VECIZ_SOZLER.md`);
  }
}

fs.writeFileSync('VECIZ_SOZLER.md', mdContent, 'utf8');
console.log('VECIZ_SOZLER.md written successfully.');
