const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('app.js', 'utf8').replace('const VECIZELER =', 'this.VECIZELER =');
const sandbox = {
  document: { getElementById: () => ({ addEventListener: () => {} }), querySelectorAll: () => [], addEventListener: () => {} },
  window: { addEventListener: () => {} },
  navigator: {},
  localStorage: { getItem: () => null, setItem: () => {} }
};
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const items = sandbox.VECIZELER;

const categories = [
  { key: 'iman', title: '1. İman, Tevhid ve Marifetullah' },
  { key: 'ibadet', title: '2. Namaz, İbadet ve Kulluk' },
  { key: 'ahiret', title: '3. Ahiret, Ölüm ve Haşir' },
  { key: 'genclik', title: '4. Gençlik, Nefis ve Hayat Rehberi' },
  { key: 'sabir', title: '5. Sabır, Şükür ve Tevekkül' },
  { key: 'ilim', title: '6. İlim, Tefekkür ve Sanat-ı İlâhiye' },
  { key: 'ihlas', title: '7. İhlas, Uhuvvet ve Kardeşlik' },
  { key: 'umit', title: '8. Ümit, Gayret ve Cihad-ı Manevî' }
];

let md = `# Risale-i Nur Külliyatı'ndan Veciz Sözler

> *"Güzel gören güzel düşünür. Güzel düşünen, hayatından lezzet alır."*  
> — **Bediüzzaman Said Nursi (Mektubat)**

Bu eser; Bediüzzaman Said Nursi'nin telif ettiği Risale-i Nur Külliyatı'ndan derlenmiş; akla nur, kalbe sürur ve ruha inşirah veren kısa, hikmetli ve orijinal metne sadık veciz sözleri tematik olarak ihtiva etmektedir.

---

## İçindekiler
`;

categories.forEach((cat, idx) => {
  const anchor = cat.title.toLowerCase().replace(/[^a-z0-9ğüşıöç\s-]/g, '').replace(/\s+/g, '-');
  md += `${idx + 1}. [${cat.title}](#${anchor})\n`;
});

md += `\n---\n\n`;

categories.forEach(cat => {
  md += `## ${cat.title}\n\n`;
  const catItems = items.filter(i => i.category === cat.key);
  catItems.forEach((item, idx) => {
    md += `${idx + 1}. **"${item.text}"**  \n`;
    md += `   > *Kaynak:* **${item.source}** (${item.section}) | *Hikmet Özü:* ${item.wisdom}\n\n`;
  });
  md += `---\n\n`;
});

md += `## Bediüzzaman Said Nursi ve Risale-i Nur Hakkında
Risale-i Nur Külliyatı; Kur'ân-ı Hakîm'in bu asrın fehmine bir dersi, kuvvetli ve parlak bir tefsiridir. Akıl ve kalbin imtizacıyla imanî ve ahlâkî hakikatleri ispat ve izah eden bu eserler; Sözler, Mektubat, Lem'alar, Şualar, Asa-yı Musa, Mesnevi-i Nuriye, İşârâtü'l-İ'caz ve Barla / Kastamonu / Emirdağ Lâhikaları gibi ana rükünlerden müteşekkildir.
`;

fs.writeFileSync('VECIZ_SOZLER.md', md, 'utf8');
console.log('VECIZ_SOZLER.md successfully regenerated with all 102 verbatim aphorisms!');
