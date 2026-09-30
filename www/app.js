/**
 * VECİZELER UYGULAMASI
 * Kur'an-ı Kerim Ayetleri, Hadis-i Şerifler ve Risale-i Nur Külliyatı'ndan Hikmetli Sözler
 */

// ==========================================================================
// 1. ZENGİN VE SAHİH VERİ SETİ (RİSALE-İ NUR, KUR'AN-I KERİM, HADİS-İ ŞERİF)
// ==========================================================================
const VECIZELER = [
  // ------------------------------------------------------------------------
  // A) RİSALE-İ NUR KÜLLİYATI (E-RİSALE ORİJİNAL METİNLERİ)
  // ------------------------------------------------------------------------
  {
    id: 1,
    sourceType: "risale",
    text: "İman hem nurdur, hem kuvvettir. Evet, hakikî imanı elde eden adam, kâinata meydan okuyabilir.",
    source: "Sözler",
    section: "23. Söz",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "İman insana sınırsız bir mânevî cesaret ve sarsılmaz bir emniyet kazandırır.",
    tags: ["iman", "nur", "kuvvet", "meydan okumak", "cesaret", "sözler"]
  },
  {
    id: 2,
    sourceType: "risale",
    text: "Bismillâh her hayrın başıdır. Biz dahi başta ona başlarız.",
    source: "Sözler",
    section: "1. Söz",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Her meşru işe İlâhî bereket ve intisap şuuru ile başlama prensibidir.",
    tags: ["bismillah", "hayır", "başlangıç", "bereket", "sözler"]
  },
  {
    id: 3,
    sourceType: "risale",
    text: "Allah’a abd olana her şey musahhardır; olmayana her şey düşmandır.",
    source: "Mesnevi-i Nuriye",
    section: "Katre",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Yaratıcısına itaat eden, mahlûkatın efendisi hükmüne geçer.",
    tags: ["abd", "itaat", "kulluk", "düşman", "mesnevi"]
  },
  {
    id: 4,
    sourceType: "risale",
    text: "Bir köy muhtarsız olmaz. Bir iğne ustasız olmaz, sahibsiz olamaz. Bir harf kâtibsiz olamaz, biliyorsun. Nasıl olur ki, nihayet derecede muntazam şu memleket hâkimsiz olur?",
    source: "Sözler",
    section: "10. Söz (Haşir Risalesi)",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Kâinattaki mükemmel intizam, Mutlak Sanatkâr ve Hâkim'i ilan eder.",
    tags: ["iğne", "harf", "intizam", "kâtip", "tevhid", "haşir", "sözler"]
  },
  {
    id: 5,
    sourceType: "risale",
    text: "Cenâb-ı Hakk'ı tanıyan ve itaat eden, zindanda dahi olsa bahtiyardır. O’nu unutan, saraylarda da olsa zindandadır, bedbahttır.",
    source: "Asâ-yı Mûsâ",
    section: "Meyve Risalesi",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Hakiki hürriyet ve saadet mekânda değil, kalpteki marifetullahtadır.",
    tags: ["zindan", "saray", "bahtiyar", "marifet", "asa-yı musa"]
  },
  {
    id: 6,
    sourceType: "risale",
    text: "Tevhid ve vahdette cemal-i İlâhî ve kemal-i Rabbânî tezahür eder.",
    source: "Lem'alar",
    section: "30. Lem'a (İsm-i Âzam)",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Kâinattaki tüm cemal ve kemal, ancak tevhid nazarıyla idrak edilir.",
    tags: ["tevhid", "cemal", "kemal", "vahdet", "lemalar"]
  },
  {
    id: 7,
    sourceType: "risale",
    text: "İman, insanı insan eder; belki insanı sultan eder.",
    source: "Sözler",
    section: "23. Söz",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "İnsanın kıymet ve rütbesi, Yaratıcısına olan intisap ve imanı nisbetindedir.",
    tags: ["insan", "sultan", "kıymet", "mertebe", "sözler"]
  },
  {
    id: 8,
    sourceType: "risale",
    text: "Her bir mevcudatta bir ilânnâme-i Vahdaniyet, her bir çiçekte bir mühr-ü Ehadiyet vardır.",
    source: "Sözler",
    section: "33. Söz",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Kâinattaki her zerre ve canlı, Yaratıcısının birliğini ilan eder.",
    tags: ["vahdaniyet", "ehadiyet", "mühür", "çiçek", "sözler"]
  },
  {
    id: 9,
    sourceType: "risale",
    text: "Namaz, mü'minin miracıdır ve Hâlık-ı Zülcelal ile bir mükâlemedir.",
    source: "Sözler",
    section: "9. Söz",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Namaz kulun Rabbi ile en samimi ve doğrudan mülakatıdır.",
    tags: ["namaz", "miraç", "mükaleme", "ibadet", "sözler"]
  },
  {
    id: 10,
    sourceType: "risale",
    text: "Yirmi dört saat ömürden yalnız bir saati, beş vakit namaza kâfi gelir.",
    source: "Sözler",
    section: "4. Söz",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Günde sadece bir saat ayırarak ebedi ahiret sermayesi kazanılır.",
    tags: ["namaz", "yirmi dört saat", "ömür", "vakit", "sözler"]
  },
  {
    id: 11,
    sourceType: "risale",
    text: "Dua bir sırr-ı ubudiyettir; ubudiyet ise, hâlisen livechillâh olmalı.",
    source: "Mektubat",
    section: "24. Mektup",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Dua ibadetin özüdür ve karşılık beklemeden sırf Allah rızası için yapılır.",
    tags: ["dua", "ubudiyet", "ihlas", "mektubat"]
  },
  {
    id: 12,
    sourceType: "risale",
    text: "Ölüm, ehl-i iman için terhis tezkeresidir; zindan-ı dünyadan bostan-ı cinâna bir davettir.",
    source: "Mektubat",
    section: "1. Mektup",
    category: "ahiret",
    categoryName: "Ahiret & Ölüm & Haşir",
    wisdom: "Ölüm bir yok oluş değil, ebedi mutluluk yurduna açılan kapıdır.",
    tags: ["ölüm", "terhis", "zindan", "cennet", "mektubat"]
  },
  {
    id: 13,
    sourceType: "risale",
    text: "Kabir var; hiç kimse inkâr edemez. Herkes ister istemez oraya girecek.",
    source: "Asâ-yı Mûsâ",
    section: "1. Kısım",
    category: "ahiret",
    categoryName: "Ahiret & Ölüm & Haşir",
    wisdom: "Ölüm ve kabir hakikati, insanın hayatına çeki düzen veren en kesin derstir.",
    tags: ["kabir", "ölüm", "inkar", "asa-yı musa"]
  },
  {
    id: 14,
    sourceType: "risale",
    text: "Eğer gençlik şeriat dairesinde, istikamet ve iffette sarf olunsa; o fani gençlik, baki bir gençlik kazandırır.",
    source: "Şualar",
    section: "11. Şua (Meyve Risalesi)",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "İffetle yaşanan bir gençlik, ebedi cennette taze bir gençlik meyvesi verir.",
    tags: ["gençlik", "iffet", "şeriat", "istikamet", "şualar"]
  },
  {
    id: 15,
    sourceType: "risale",
    text: "Helâl dairesi geniştir, keyfe kâfi gelir. Harama girmeye hiç lüzum yoktur.",
    source: "Sözler",
    section: "6. Söz",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "Meşru lezzetler ruhun ve kalbin tüm ihtiyaçlarını fazlasıyla karşılar.",
    tags: ["helal", "haram", "keyif", "daire", "sözler"]
  },
  {
    id: 16,
    sourceType: "risale",
    text: "Güzel gören güzel düşünür. Güzel düşünen, hayatından lezzet alır.",
    source: "Mektubat",
    section: "Hakikat Çekirdekleri",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Müspet bakış açısı insanın ruhunu rahatlatır ve hayata huzur katar.",
    tags: ["güzel görmek", "güzel düşünmek", "lezzet", "mektubat"]
  },
  {
    id: 17,
    sourceType: "risale",
    text: "Kaderi tenkit eden, başını örse vurur, kırar. Rahmete itiraz eden, rahmetten mahrum kalır.",
    source: "Sözler",
    section: "26. Söz (Kader Risalesi)",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Kadere rıza ve teslimiyet kalbe huzur ve selamet bahşeder.",
    tags: ["kader", "rahmet", "teslim", "örs", "sözler"]
  },
  {
    id: 18,
    sourceType: "risale",
    text: "Amelinizde rıza-yı İlâhî olmalı. Eğer O razı olsa, bütün dünya küsse ehemmiyeti yok.",
    source: "Lem'alar",
    section: "21. Lem'a (İhlas Risalesi)",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "Hakiki ihlas, amellerde yalnızca Allah'ın rızasını gözetmektir.",
    tags: ["ihlas", "rıza", "dünya", "lemalar"]
  },
  {
    id: 19,
    sourceType: "risale",
    text: "Vicdanın ziyası, ulûm-u diniyedir. Aklın nuru, fünun-u medeniyedir. İkisinin imtizacıyla hakikat tecelli eder.",
    source: "Münazarat",
    section: "Münazarat",
    category: "ilim",
    categoryName: "İlim, Hikmet & Tefekkür",
    wisdom: "Akıl ile kalbin, fen ilimleri ile din ilimlerinin sentezi hakiki maarifi doğurur.",
    tags: ["vicdan", "akıl", "fen", "din", "hakikat", "münazarat"]
  },
  {
    id: 20,
    sourceType: "risale",
    text: "Kimin himmeti milleti ise, o kimse tek başıyla bir millettir.",
    source: "Münazarat",
    section: "Münazarat",
    category: "uhuvvet",
    categoryName: "Kardeşlik & Uhuvvet",
    wisdom: "Yüksek gayeli ve fedakâr fertler, tek başlarına bir millet gücündedir.",
    tags: ["himmet", "millet", "gayret", "fedakarlık", "münazarat"]
  },
  {
    id: 21,
    sourceType: "risale",
    text: "Biz muhabbet fedaileriyiz; husumete vaktimiz yoktur.",
    source: "Tarihçe-i Hayat",
    section: "İlk Hayatı",
    category: "uhuvvet",
    categoryName: "Kardeşlik & Uhuvvet",
    wisdom: "Mü'min sevgi ve kardeşliğe odaklanır; kin ve düşmanlığa prim vermez.",
    tags: ["muhabbet", "husumet", "fedai", "tarihçe"]
  },
  {
    id: 22,
    sourceType: "risale",
    text: "Ümitsizlik her kemâle mânidir. 'Ye's, ümmetlerin ve milletlerin kanseridir.'",
    source: "Hutbe-i Şâmiye",
    section: "Hutbe-i Şamiye",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Ye's ve karamsarlık ruhu felç eder; ümit ise dirilişin mayasıdır.",
    tags: ["yeis", "ümit", "kanser", "millet", "şamiye"]
  },

  // ------------------------------------------------------------------------
  // B) KUR'AN-I KERİM AYET-İ KERİMELERİ
  // ------------------------------------------------------------------------
  {
    id: 101,
    sourceType: "kuran",
    text: "Şüphesiz güçlükle beraber bir kolaylık vardır. Gerçekten, güçlükle beraber bir kolaylık vardır.",
    source: "Kur'an-ı Kerim",
    section: "İnşirâh Sûresi, 5-6. Âyet",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Her zorluğun içinde ve ardında mutlaka İlahi bir ferahlık ve kolaylık saklıdır.",
    tags: ["inşirah", "kolaylık", "zorluk", "ayet", "kuran"]
  },
  {
    id: 102,
    sourceType: "kuran",
    text: "Bilesiniz ki, kalpler ancak Allah'ı anmakla huzur bulur.",
    source: "Kur'an-ı Kerim",
    section: "Ra'd Sûresi, 28. Âyet",
    category: "iman",
    categoryName: "İman & Tevhid",
    wisdom: "Ruhun hakiki tesellisi ve kalbin sükûneti yalnız zikrullah ile mümkündür.",
    tags: ["kalp", "huzur", "zikir", "rad", "kuran"]
  },
  {
    id: 103,
    sourceType: "kuran",
    text: "Kullarım sana beni sorduklarında bilsinler ki, şüphesiz ben onlara çok yakınım. Bana dua ettiği vakit dua edenin dileğine karşılık veririm.",
    source: "Kur'an-ı Kerim",
    section: "Bakara Sûresi, 186. Âyet",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Rabbimiz kuluna şah damarından daha yakındır ve samimi duaları cevapsız bırakmaz.",
    tags: ["dua", "yakınlık", "bakara", "icabet", "kuran"]
  },
  {
    id: 104,
    sourceType: "kuran",
    text: "Kim Allah'a tevekkül ederse, O kendisine yeter. Şüphesiz Allah, emrini yerine getirendir.",
    source: "Kur'an-ı Kerim",
    section: "Talâk Sûresi, 3. Âyet",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Allah'a tam güvenip dayanan kimse, hiçbir sebepten endişe duymaz.",
    tags: ["tevekkül", "talak", "kifayet", "ayet", "kuran"]
  },
  {
    id: 105,
    sourceType: "kuran",
    text: "Eğer şükrederseniz, elbette size (nimetimi) artırırım.",
    source: "Kur'an-ı Kerim",
    section: "İbrâhîm Sûresi, 7. Âyet",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Şükür nimeti ziyadeleştirir; nankörlük ise bereketi kaçırır.",
    tags: ["şükür", "nimet", "ibrahim", "ziyade", "kuran"]
  },
  {
    id: 106,
    sourceType: "kuran",
    text: "Mü'minler ancak kardeştirler. Öyleyse kardeşlerinizin arasını düzeltin ve Allah'tan korkun ki merhamet olunasınız.",
    source: "Kur'an-ı Kerim",
    section: "Hucurât Sûresi, 10. Âyet",
    category: "uhuvvet",
    categoryName: "Kardeşlik & Uhuvvet",
    wisdom: "İslam kardeşliği nesep bağından üstün mânevî bir vahdet bağıdır.",
    tags: ["kardeşlik", "uhuvvet", "hucurat", "sulh", "kuran"]
  },
  {
    id: 107,
    sourceType: "kuran",
    text: "De ki: 'Hiç bilenlerle bilmeyenler bir olur mu?' Ancak akıl sahipleri öğüt alırlar.",
    source: "Kur'an-ı Kerim",
    section: "Zümer Sûresi, 9. Âyet",
    category: "ilim",
    categoryName: "İlim, Hikmet & Tefekkür",
    wisdom: "İlim insanı cehaletin karanlığından marifetullahın aydınlığına çıkarır.",
    tags: ["ilim", "bilenler", "z Праimer", "tefekkür", "kuran"]
  },
  {
    id: 108,
    sourceType: "kuran",
    text: "Şüphesiz namaz, insanı hayasızlıktan ve kötülükten alıkoyar.",
    source: "Kur'an-ı Kerim",
    section: "Ankebût Sûresi, 45. Âyet",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Huzurla kılınan namaz, kul için kötülüklere karşı koruyucu bir kalkandır.",
    tags: ["namaz", "hayasızlık", "ankebut", "kötülük", "kuran"]
  },
  {
    id: 109,
    sourceType: "kuran",
    text: "Her nefis ölümü tadacaktır. Sonra bize döndürüleceksiniz.",
    source: "Kur'an-ı Kerim",
    section: "Ankebût Sûresi, 57. Âyet",
    category: "ahiret",
    categoryName: "Ahiret & Ölüm & Haşir",
    wisdom: "Dünya fani bir misafirhanedir; asıl ebedi yurt ahirettir.",
    tags: ["ölüm", "nefis", "ankebut", "haşir", "kuran"]
  },
  {
    id: 110,
    sourceType: "kuran",
    text: "İyilikle kötülük bir olmaz. Sen kötülüğü en güzel olan şeyle sav; o zaman göreceksin ki seninle arasında düşmanlık bulunan kimse, sımsıcak bir dost oluvermiştir.",
    source: "Kur'an-ı Kerim",
    section: "Fussilet Sûresi, 34. Âyet",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "Kötülüğe iyilikle mukabele etmek, düşmanlıkları muhabbete tebdil eder.",
    tags: ["iyilik", "kötülük", "fussilet", "ahlak", "dostluk", "kuran"]
  },
  {
    id: 111,
    sourceType: "kuran",
    text: "De ki: 'Ey kendi nefisleri aleyhine haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin. Şüphesiz Allah bütün günahları bağışlar.'",
    source: "Kur'an-ı Kerim",
    section: "Zümer Sûresi, 53. Âyet",
    category: "merhamet",
    categoryName: "Merhamet & Şefkat",
    wisdom: "Allah'ın mağfiret ve merhamet kapısı tövbe eden herkese daima açıktır.",
    tags: ["rahmet", "ümit", "tövbe", "bağışlanma", "zümer", "kuran"]
  },

  // ------------------------------------------------------------------------
  // C) HADİS-İ ŞERİFLER
  // ------------------------------------------------------------------------
  {
    id: 201,
    sourceType: "hadis",
    text: "İnsanların en hayırlısı, insanlara faydalı olanıdır.",
    source: "Hadis-i Şerif",
    section: "Buhârî, Megâzî 35 / Taberânî",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "İmanın kemali, cemiyete hayır ve fayda ulaştırmakla tezahür eder.",
    tags: ["fayda", "hayırlı insan", "buhari", "hadis"]
  },
  {
    id: 202,
    sourceType: "hadis",
    text: "Ameller niyetlere göredir. Herkes için ancak niyet ettiği şey vardır.",
    source: "Hadis-i Şerif",
    section: "Buhârî, Bed'ü'l-Vahy 1; Müslim, İmâre 155",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "Her amelin kıymeti ve sevabı kalpteki ihlaslı niyete bağlıdır.",
    tags: ["niyet", "amel", "ihlas", "buhari", "müslim", "hadis"]
  },
  {
    id: 203,
    sourceType: "hadis",
    text: "Sizden biriniz, kendisi için arzu ettiğini kardeşi için de arzu etmedikçe gerçek anlamda iman etmiş olmaz.",
    source: "Hadis-i Şerif",
    section: "Buhârî, Îmân 7; Müslim, Îmân 71",
    category: "uhuvvet",
    categoryName: "Kardeşlik & Uhuvvet",
    wisdom: "Hakiki iman, kardeşinin iyiliğini ve hayrını kendi nefsi gibi gözetmeyi gerektirir.",
    tags: ["kardeşlik", "iman", "fedakarlık", "buhari", "müslim", "hadis"]
  },
  {
    id: 204,
    sourceType: "hadis",
    text: "Mü'minin durumu ne hoştur! Her hâli kendisi için bir hayırdır: Genişliğe ererse şükreder, bu onun için hayır olur. Başına darlık gelirse sabreder, bu da onun için hayır olur.",
    source: "Hadis-i Şerif",
    section: "Müslim, Zühd 64",
    category: "sabir",
    categoryName: "Sabır, Şükür & Tevekkül",
    wisdom: "Mü'min sabır ve şükür dengesiyle her imtihanı mânevî kazanca dönüştürür.",
    tags: ["sabır", "şükür", "mümin", "müslim", "hadis"]
  },
  {
    id: 205,
    sourceType: "hadis",
    text: "Merhamet edenlere Rahmân olan Allah da merhamet eder. Siz yerdekilere merhamet edin ki, göktekiler de size merhamet etsin.",
    source: "Hadis-i Şerif",
    section: "Tirmizî, Birr 16; Ebû Dâvûd, Edeb 58",
    category: "merhamet",
    categoryName: "Merhamet & Şefkat",
    wisdom: "İlahi rahmete nail olmanın yolu, mahlûkata şefkat ve merhamet göstermekten geçer.",
    tags: ["merhamet", "şefkat", "rahman", "tirmizi", "hadis"]
  },
  {
    id: 206,
    sourceType: "hadis",
    text: "Dua mü'minin silahı, dinin direği, göklerin ve yerin nurudur.",
    source: "Hadis-i Şerif",
    section: "Hâkim, el-Müstedrek, I/669",
    category: "ibadet",
    categoryName: "Namaz & İbadet & Dua",
    wisdom: "Dua kulun aczini ve fakrını itiraf edip Sonsuz Kudret'e ilticasıdır.",
    tags: ["dua", "silah", "nur", "hadis"]
  },
  {
    id: 207,
    sourceType: "hadis",
    text: "İlim tahsil etmek her Müslümana farzdır.",
    source: "Hadis-i Şerif",
    section: "İbn Mâce, Mukaddime 17",
    category: "ilim",
    categoryName: "İlim, Hikmet & Tefekkür",
    wisdom: "İlim öğrenmek, hayatı istikamet üzere yaşamanın vazgeçilmez rehberidir.",
    tags: ["ilim", "farz", "ibn mace", "hadis"]
  },
  {
    id: 208,
    sourceType: "hadis",
    text: "Kolaylaştırınız, güçleştirmeyiniz; müjdeleyiniz, nefret ettirmeyiniz.",
    source: "Hadis-i Şerif",
    section: "Buhârî, İlim 11; Müslim, Cihâd 6",
    category: "ahlak",
    categoryName: "Güzel Ahlak & İhlas",
    wisdom: "İslam'ın tebliğ ve irşad üslubu sevgi, kolaylık ve müjde üzerine kuruludur.",
    tags: ["kolaylık", "müjde", "buhari", "müslim", "hadis"]
  },
  {
    id: 209,
    sourceType: "hadis",
    text: "Lezzetleri tahrip edip acılaştıran ölümü çokça zikrediniz.",
    source: "Hadis-i Şerif",
    section: "Tirmizî, Kıyâmet 26; İbn Mâce, Zühd 31",
    category: "ahiret",
    categoryName: "Ahiret & Ölüm & Haşir",
    wisdom: "Ölümü hatırlamak gaflet perdelerini yırtar ve ahiret şuurunu canlı tutar.",
    tags: ["ölüm", "zikir", "tirmizi", "hadis"]
  },
  {
    id: 210,
    sourceType: "hadis",
    text: "Müslüman, elinden ve dilinden diğer Müslümanların emniyette olduğu kimsedir.",
    source: "Hadis-i Şerif",
    section: "Buhârî, Îmân 4; Müslim, Îmân 64",
    category: "uhuvvet",
    categoryName: "Kardeşlik & Uhuvvet",
    wisdom: "Hakiki Müslümanlık, etrafına daima emniyet ve huzur veren bir ahlaktır.",
    tags: ["emniyet", "dil", "el", "buhari", "müslim", "hadis"]
  }
];

// ==========================================================================
// 2. KATEGORİ VE KONU LİSTESİ
// ==========================================================================
const KATEGORILER = [
  { id: "all", name: "✨ Tümü" },
  { id: "iman", name: "💎 İman & Tevhid" },
  { id: "ibadet", name: "🕌 Namaz & Dua" },
  { id: "sabir", name: "🌿 Sabır & Tevekkül" },
  { id: "ahlak", name: "🕊️ Güzel Ahlak & İhlas" },
  { id: "ilim", name: "📚 İlim & Tefekkür" },
  { id: "ahiret", name: "⏳ Ahiret & Ölüm" },
  { id: "uhuvvet", name: "🤝 Kardeşlik & Birlik" },
  { id: "merhamet", name: "💖 Merhamet & Şefkat" }
];

// ==========================================================================
// 3. UYGULAMA DURUMU (STATE MANAGEMENT)
// ==========================================================================
const state = {
  currentSourceType: "all", // 'all' | 'risale' | 'kuran' | 'hadis'
  currentCategory: "all",
  searchQuery: "",
  activeTab: "all", // 'all' | 'favorites'
  favorites: JSON.parse(localStorage.getItem("vecizeler_favorites") || "[]"),
  currentFeatured: VECIZELER[0],
  
  // Font, Renk & Ses Ayarları
  selectedFont: localStorage.getItem("vecizeler_font") || "'Amiri', serif",
  selectedTextColor: localStorage.getItem("vecizeler_color") || "#ffffff",
  selectedVoiceGender: localStorage.getItem("vecizeler_voice_gender") || "male_deep",
  fontScale: parseFloat(localStorage.getItem("vecizeler_font_scale") || "1.05"),
  
  // Modal & Tam Ekran Durumu
  modalQuote: null,
  cardTheme: "emerald",
  floralPattern: "rose_vines", // 'rose_vines' | 'ottoman_tezhip' | 'gold_tulips' | 'floral_wreath'
  cardFormat: "square", // 'square' (1:1) | 'story' (9:16)
  
  fullscreenIndex: 0,
  filteredQuotesList: []
};

// ==========================================================================
// 4. DOM ELEMANLARI
// ==========================================================================
const DOM = {
  // Brand & Nav
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  categoryPills: document.getElementById("categoryPills"),
  sourceTypePills: document.getElementById("sourceTypePills"),
  resultsCount: document.getElementById("resultsCount"),
  quotesGrid: document.getElementById("quotesGrid"),
  noResults: document.getElementById("noResults"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  allQuotesTabBtn: document.getElementById("allQuotesTabBtn"),
  favoritesTabBtn: document.getElementById("favoritesTabBtn"),
  favBadge: document.getElementById("favBadge"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  
  // Font, Renk & Ses Seçiciler
  globalFontSelect: document.getElementById("globalFontSelect"),
  globalColorPalette: document.getElementById("globalColorPalette"),
  globalVoiceSelect: document.getElementById("globalVoiceSelect"),
  customColorPicker: document.getElementById("customColorPicker"),
  fontDecBtn: document.getElementById("fontDecBtn"),
  fontResetBtn: document.getElementById("fontResetBtn"),
  fontIncBtn: document.getElementById("fontIncBtn"),
  
  // Hero / Featured
  featuredCard: document.getElementById("featuredCard"),
  featuredQuoteText: document.getElementById("featuredQuoteText"),
  featuredSourceText: document.getElementById("featuredSourceText"),
  featuredSourceIcon: document.getElementById("featuredSourceIcon"),
  featuredCategoryTag: document.getElementById("featuredCategoryTag"),
  featuredBadgeText: document.getElementById("featuredBadgeText"),
  featuredFullscreenBtn: document.getElementById("featuredFullscreenBtn"),
  speakFeaturedBtn: document.getElementById("speakFeaturedBtn"),
  randomQuoteBtn: document.getElementById("randomQuoteBtn"),
  copyFeaturedBtn: document.getElementById("copyFeaturedBtn"),
  cardModalBtn: document.getElementById("cardModalBtn"),
  favFeaturedBtn: document.getElementById("favFeaturedBtn"),
  openFullscreenFeedBtn: document.getElementById("openFullscreenFeedBtn"),

  // Fullscreen Viewer
  fullscreenViewer: document.getElementById("fullscreenViewer"),
  fsSourceBadge: document.getElementById("fsSourceBadge"),
  fsCategoryBadge: document.getElementById("fsCategoryBadge"),
  fsCounter: document.getElementById("fsCounter"),
  fsCloseBtn: document.getElementById("fsCloseBtn"),
  fsPrevBtn: document.getElementById("fsPrevBtn"),
  fsNextBtn: document.getElementById("fsNextBtn"),
  fsSwipeArea: document.getElementById("fsSwipeArea"),
  fsActiveCard: document.getElementById("fsActiveCard"),
  fsQuoteText: document.getElementById("fsQuoteText"),
  fsQuoteSource: document.getElementById("fsQuoteSource"),
  fsQuoteWisdom: document.getElementById("fsQuoteWisdom"),
  fsSpeakBtn: document.getElementById("fsSpeakBtn"),
  fsSpeakIcon: document.getElementById("fsSpeakIcon"),
  fsSpeakLabel: document.getElementById("fsSpeakLabel"),
  fsSaveGalleryBtn: document.getElementById("fsSaveGalleryBtn"),
  fsShareWaBtn: document.getElementById("fsShareWaBtn"),
  fsShareIgBtn: document.getElementById("fsShareIgBtn"),
  fsShareFbBtn: document.getElementById("fsShareFbBtn"),
  fsShareNativeBtn: document.getElementById("fsShareNativeBtn"),
  fsCopyBtn: document.getElementById("fsCopyBtn"),
  fsFavBtn: document.getElementById("fsFavBtn"),
  fsFavIcon: document.getElementById("fsFavIcon"),

  // Modal
  cardModal: document.getElementById("cardModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  quoteCanvas: document.getElementById("quoteCanvas"),
  cardThemePicker: document.getElementById("cardThemePicker"),
  floralPatternPicker: document.getElementById("floralPatternPicker"),
  modalFontSelect: document.getElementById("modalFontSelect"),
  modalColorPalette: document.getElementById("modalColorPalette"),
  formatSquareBtn: document.getElementById("formatSquareBtn"),
  formatStoryBtn: document.getElementById("formatStoryBtn"),
  downloadCardBtn: document.getElementById("downloadCardBtn"),
  shareWaBtn: document.getElementById("shareWaBtn"),
  shareIgBtn: document.getElementById("shareIgBtn"),
  shareFbBtn: document.getElementById("shareFbBtn"),
  shareNativeBtn: document.getElementById("shareNativeBtn"),
  openCardTabBtn: document.getElementById("openCardTabBtn"),

  // Toast
  toast: document.getElementById("toast"),
  toastIcon: document.getElementById("toastIcon"),
  toastMessage: document.getElementById("toastMessage")
};

// ==========================================================================
// 5. BAŞLANGIÇ & INITIALIZATION
// ==========================================================================
function init() {
  // Kaydedilen Temayı Yükle
  const savedTheme = localStorage.getItem("vecizeler_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Kaydedilen Font & Rengi Uygula
  applyFontAndColor();
  if (DOM.globalFontSelect) DOM.globalFontSelect.value = state.selectedFont;
  if (DOM.modalFontSelect) DOM.modalFontSelect.value = state.selectedFont;

  // Kategorileri Oluştur
  renderCategories();

  // Rastgele Günün Hikmetini Seç
  pickRandomFeatured();

  // Kartları Filtrele ve Listele
  filterAndRenderQuotes();
  updateFavBadge();

  // Olay Dinleyicilerini Başlat
  setupEventListeners();
}

// ==========================================================================
// 6. FONT & RENK YÖNETİMİ
// ==========================================================================
function applyFontAndColor() {
  document.documentElement.style.setProperty("--active-quote-font", state.selectedFont);
  document.documentElement.style.setProperty("--active-quote-color", state.selectedTextColor);
  document.documentElement.style.setProperty("--quote-font-scale", state.fontScale);

  // Aktif renk swatch'unu işaretle
  document.querySelectorAll(".color-swatch-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.color.toLowerCase() === state.selectedTextColor.toLowerCase());
  });
}

function setFont(fontFamily) {
  state.selectedFont = fontFamily;
  localStorage.setItem("vecizeler_font", fontFamily);
  applyFontAndColor();
  if (DOM.globalFontSelect) DOM.globalFontSelect.value = fontFamily;
  if (DOM.modalFontSelect) DOM.modalFontSelect.value = fontFamily;
  if (DOM.cardModal.classList.contains("open")) {
    drawCardCanvas();
  }
}

function setTextColor(colorHex) {
  state.selectedTextColor = colorHex;
  localStorage.setItem("vecizeler_color", colorHex);
  applyFontAndColor();
  if (DOM.cardModal.classList.contains("open")) {
    drawCardCanvas();
  }
}

// ==========================================================================
// 7. KATEGORİ VE KAYNAK FİLTRELEME
// ==========================================================================
function renderCategories() {
  DOM.categoryPills.innerHTML = KATEGORILER.map(cat => `
    <button class="cat-pill-btn ${state.currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.name}
    </button>
  `).join("");

  DOM.categoryPills.querySelectorAll(".cat-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentCategory = btn.dataset.cat;
      updateActiveCategoryPills();
      filterAndRenderQuotes();
    });
  });
}

function updateActiveCategoryPills() {
  DOM.categoryPills.querySelectorAll(".cat-pill-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === state.currentCategory);
  });
}

function updateActiveSourcePills() {
  DOM.sourceTypePills.querySelectorAll(".source-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.source === state.currentSourceType);
  });
}

// ==========================================================================
// 8. VECİZE LİSTELEME VE FİLTRELEME
// ==========================================================================
function getFilteredQuotes() {
  return VECIZELER.filter(item => {
    // 1. Kaynak Türü Filtresi (Tümü / Risale / Kur'an / Hadis)
    if (state.currentSourceType !== "all" && item.sourceType !== state.currentSourceType) {
      return false;
    }

    // 2. Kategori Filtresi
    if (state.currentCategory !== "all" && item.category !== state.currentCategory) {
      return false;
    }

    // 3. Favoriler Tabı
    if (state.activeTab === "favorites" && !state.favorites.includes(item.id)) {
      return false;
    }

    // 4. Arama Sorgusu
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      const inText = item.text.toLowerCase().includes(q);
      const inSource = item.source.toLowerCase().includes(q);
      const inSection = item.section.toLowerCase().includes(q);
      const inWisdom = item.wisdom ? item.wisdom.toLowerCase().includes(q) : false;
      const inCategory = item.categoryName.toLowerCase().includes(q);
      const inTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(q)) : false;

      if (!inText && !inSource && !inSection && !inWisdom && !inCategory && !inTags) {
        return false;
      }
    }

    return true;
  });
}

function filterAndRenderQuotes() {
  const filtered = getFilteredQuotes();
  state.filteredQuotesList = filtered;

  DOM.resultsCount.textContent = `Toplam ${filtered.length} hikmet listeleniyor`;

  if (filtered.length === 0) {
    DOM.quotesGrid.innerHTML = "";
    DOM.noResults.style.display = "block";
    return;
  }

  DOM.noResults.style.display = "none";
  DOM.quotesGrid.innerHTML = filtered.map((quote, index) => {
    const isFav = state.favorites.includes(quote.id);
    const sourceBadgeIcon = quote.sourceType === "kuran" ? "🕋" : (quote.sourceType === "hadis" ? "📜" : "📖");
    
    return `
      <article class="quote-card" data-id="${quote.id}" data-index="${index}">
        <div>
          <div class="card-top">
            <span class="card-source-tag">
              <span>${sourceBadgeIcon}</span> ${escapeHTML(quote.source)}
            </span>
            <span class="card-cat-tag">${escapeHTML(quote.categoryName)}</span>
          </div>

          <p class="card-quote-text" onclick="openFullscreenForIndex(${index})" title="Tam Ekran Göster">
            "${escapeHTML(quote.text)}"
          </p>
        </div>

        <div>
          <div class="card-reference">${escapeHTML(quote.section)}</div>
          ${quote.wisdom ? `<div class="card-wisdom">${escapeHTML(quote.wisdom)}</div>` : ''}

          <div class="card-actions">
            <div class="card-action-group">
              <button class="card-action-btn card-speak-btn" data-action="speak" data-id="${quote.id}" title="Sesli Oku">
                <span>🔊</span> Dinle
              </button>
              <button class="card-action-btn" data-action="fullscreen" data-id="${quote.id}" data-index="${index}" title="Tam Ekran Modu">
                <span>⛶</span> Tam Ekran
              </button>
              <button class="card-action-btn" data-action="image" data-id="${quote.id}" title="Sosyal Medya Kartı Oluştur & İndir">
                <span>🖼️</span> Kart Paylaş
              </button>
              <button class="card-action-btn" data-action="copy" data-id="${quote.id}" title="Metni Kopyala">
                <span>📋</span> Kopyala
              </button>
            </div>
            <button class="card-action-btn card-fav-btn ${isFav ? 'favorited' : ''}" data-action="fav" data-id="${quote.id}" title="Favorilere Ekle / Çıkar">
              ${isFav ? '❤️' : '♡'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 9. GÜNÜN HİKMETİ (FEATURED)
// ==========================================================================
function pickRandomFeatured() {
  const randomIndex = Math.floor(Math.random() * VECIZELER.length);
  state.currentFeatured = VECIZELER[randomIndex];
  renderFeaturedQuote();
}

function renderFeaturedQuote() {
  const q = state.currentFeatured;
  if (!q) return;

  DOM.featuredQuoteText.textContent = `"${q.text}"`;
  DOM.featuredSourceText.textContent = `${q.source} • ${q.section}`;
  DOM.featuredCategoryTag.textContent = q.categoryName;
  
  const icon = q.sourceType === "kuran" ? "🕋" : (q.sourceType === "hadis" ? "📜" : "📖");
  DOM.featuredSourceIcon.textContent = icon;
  
  const typeName = q.sourceType === "kuran" ? "ÂYET-İ KERİME" : (q.sourceType === "hadis" ? "HADİS-İ ŞERİF" : "RİSALE-İ NUR VECİZESİ");
  DOM.featuredBadgeText.textContent = typeName;

  const isFav = state.favorites.includes(q.id);
  DOM.favFeaturedBtn.innerHTML = `<span class="fav-icon">${isFav ? '❤️' : '♡'}</span>`;
  DOM.favFeaturedBtn.classList.toggle("favorited", isFav);
}

// ==========================================================================
// 10. TAM EKRAN KART GÖRÜNÜMÜ (FULLSCREEN IMMERSIVE VIEWER)
// ==========================================================================
function openFullscreenForIndex(index) {
  const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
  if (index < 0) index = 0;
  if (index >= list.length) index = list.length - 1;
  
  state.fullscreenIndex = index;
  renderFullscreenCard();
  
  DOM.fullscreenViewer.classList.add("open");
  DOM.fullscreenViewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeFullscreenViewer() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    stopSpeakingUI();
  }
  DOM.fullscreenViewer.classList.remove("open");
  DOM.fullscreenViewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderFullscreenCard() {
  const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
  const quote = list[state.fullscreenIndex];
  if (!quote) return;

  // Yeni karta geçildiğinde konuşma durumunu butonla eşleştir
  if (DOM.fsSpeakBtn) {
    const isSpeakingThis = (window.speechSynthesis && window.speechSynthesis.speaking && currentSpeakingId === quote.id);
    DOM.fsSpeakBtn.classList.toggle("tts-speaking", isSpeakingThis);
    if (DOM.fsSpeakIcon) DOM.fsSpeakIcon.textContent = isSpeakingThis ? "⏹️" : "🔊";
    if (DOM.fsSpeakLabel) DOM.fsSpeakLabel.textContent = isSpeakingThis ? "Durdur" : "Sesli Dinle";
  }

  const icon = quote.sourceType === "kuran" ? "🕋" : (quote.sourceType === "hadis" ? "📜" : "📖");
  DOM.fsSourceBadge.textContent = `${icon} ${quote.source}`;
  DOM.fsCategoryBadge.textContent = quote.categoryName;
  DOM.fsCounter.textContent = `${state.fullscreenIndex + 1} / ${list.length}`;

  DOM.fsQuoteText.textContent = `"${quote.text}"`;
  DOM.fsQuoteSource.textContent = `${quote.source} • ${quote.section}`;
  DOM.fsQuoteWisdom.textContent = quote.wisdom || "";

  const isFav = state.favorites.includes(quote.id);
  DOM.fsFavIcon.textContent = isFav ? "❤️" : "♡";
}

function nextFullscreenCard() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    stopSpeakingUI();
  }
  const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
  state.fullscreenIndex = (state.fullscreenIndex + 1) % list.length;
  renderFullscreenCard();
}

function prevFullscreenCard() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    stopSpeakingUI();
  }
  const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
  state.fullscreenIndex = (state.fullscreenIndex - 1 + list.length) % list.length;
  renderFullscreenCard();
}

// ==========================================================================
// 11. GÖRSEL KART OLUŞTURUCU VE CANVAS MOTORU (HD 1080x1080 / 1080x1920)
// ==========================================================================
function openCardModal(quote) {
  state.modalQuote = quote || state.currentFeatured;
  DOM.cardModal.classList.add("open");
  DOM.cardModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawCardCanvas();
}

function closeCardModal() {
  DOM.cardModal.classList.remove("open");
  DOM.cardModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function drawCardCanvas() {
  const quote = state.modalQuote || state.currentFeatured;
  if (!quote) return;

  const canvas = DOM.quoteCanvas;
  const isStory = state.cardFormat === "story";
  const W = 1080;
  const H = isStory ? 1920 : 1080;

  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Renk ve Desen Temaları
  const themes = {
    emerald: {
      bg1: "#041a11",
      bg2: "#0d3626",
      accent: "#d4af37",
      accentSoft: "#faeaab",
      roseColor: "#f5a6b1",
      roseGlow: "rgba(245, 166, 177, 0.45)",
      text: state.selectedTextColor || "#ffffff",
      textMuted: "#b8cbbe",
      border: "rgba(212, 175, 55, 0.6)",
      innerBorder: "rgba(212, 175, 55, 0.3)"
    },
    midnight: {
      bg1: "#06101c",
      bg2: "#102540",
      accent: "#64b5f6",
      accentSoft: "#bbdefb",
      roseColor: "#90caf9",
      roseGlow: "rgba(100, 181, 246, 0.4)",
      text: state.selectedTextColor || "#ffffff",
      textMuted: "#a4b9ce",
      border: "rgba(100, 181, 246, 0.65)",
      innerBorder: "rgba(100, 181, 246, 0.3)"
    },
    obsidian: {
      bg1: "#0d0d0d",
      bg2: "#1f1f1f",
      accent: "#f4dc81",
      accentSoft: "#fff3cc",
      roseColor: "#ffd54f",
      roseGlow: "rgba(244, 220, 129, 0.45)",
      text: state.selectedTextColor || "#ffffff",
      textMuted: "#ababab",
      border: "rgba(244, 220, 129, 0.65)",
      innerBorder: "rgba(244, 220, 129, 0.3)"
    },
    parchment: {
      bg1: "#fdf8ee",
      bg2: "#e8dcbe",
      accent: "#7c5c16",
      accentSoft: "#4a3507",
      roseColor: "#b71c1c",
      roseGlow: "rgba(183, 28, 28, 0.25)",
      text: "#1a160e",
      textMuted: "#594d37",
      border: "rgba(124, 92, 22, 0.65)",
      innerBorder: "rgba(124, 92, 22, 0.3)"
    },
    ruby: {
      bg1: "#26060b",
      bg2: "#520f18",
      accent: "#f5a6b1",
      accentSoft: "#ffe3e6",
      roseColor: "#ff80ab",
      roseGlow: "rgba(255, 128, 171, 0.5)",
      text: state.selectedTextColor || "#ffffff",
      textMuted: "#d4a9af",
      border: "rgba(245, 166, 177, 0.65)",
      innerBorder: "rgba(245, 166, 177, 0.3)"
    },
    turquoise: {
      bg1: "#031b1e",
      bg2: "#0d3f44",
      accent: "#4dd0e1",
      accentSoft: "#b2ebf2",
      roseColor: "#80deea",
      roseGlow: "rgba(77, 208, 225, 0.4)",
      text: state.selectedTextColor || "#ffffff",
      textMuted: "#9fc6c9",
      border: "rgba(77, 208, 225, 0.65)",
      innerBorder: "rgba(77, 208, 225, 0.3)"
    }
  };

  const theme = themes[state.cardTheme] || themes.emerald;
  const pattern = state.floralPattern || "rose_vines";

  // 1. Arka Plan Degrade & Zemin Dokusu
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, theme.bg1);
  grad.addColorStop(1, theme.bg2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // 2. Çerçeve & Çizgiler
  const outerM = 40;
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 3;
  ctx.strokeRect(outerM, outerM, W - (2 * outerM), H - (2 * outerM));

  const innerM = 65;
  ctx.strokeStyle = theme.innerBorder;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(innerM, innerM, W - (2 * innerM), H - (2 * innerM));

  // 3. KENAR GÜL VE ÇİÇEK DESENLERİ (Zengin Tezhib Sanatı)
  drawFloralBordersAndGarlands(ctx, W, H, outerM, innerM, theme, pattern);

  // 4. Üst Başlık & Kaynak Türü
  ctx.save();
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 26px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  
  let headerTitle = "✦  VECİZELER  ✦";
  if (quote.sourceType === "kuran") headerTitle = "✦  KUR'ÂN-I KERÎM  ✦";
  else if (quote.sourceType === "hadis") headerTitle = "✦  HADÎS-İ ŞERÎF  ✦";
  else if (quote.sourceType === "risale") headerTitle = "✦  RİSALE-İ NUR KÜLLİYATI  ✦";

  const topHeaderY = isStory ? 235 : 135;
  ctx.fillText(headerTitle, W / 2, topHeaderY);

  ctx.fillStyle = theme.accentSoft;
  ctx.font = "italic 22px 'Amiri', serif";
  const subTitle = quote.sourceType === "risale" ? "Bediüzzaman Said Nursi" : quote.categoryName;
  ctx.fillText(subTitle, W / 2, topHeaderY + 38);
  ctx.restore();

  // 5. Üst Çiçekli Taç & Tırnak İşareti
  ctx.save();
  drawTopFloralCrest(ctx, W / 2, isStory ? topHeaderY + 95 : topHeaderY + 80, 160, theme);
  
  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = 0.28;
  ctx.font = "bold 125px 'Amiri', serif";
  ctx.textAlign = "center";
  const quoteMarkY = isStory ? topHeaderY + 180 : topHeaderY + 150;
  ctx.fillText("“", W / 2, quoteMarkY);
  ctx.restore();

  // 6. Vecize / Ayet Metni
  ctx.save();
  ctx.fillStyle = theme.text;
  ctx.textAlign = "center";

  const textLength = quote.text.length;
  let fontSize = isStory ? 54 : 50;
  let lineHeight = isStory ? 84 : 78;

  if (textLength > 180) {
    fontSize = isStory ? 40 : 38;
    lineHeight = isStory ? 66 : 62;
  } else if (textLength > 120) {
    fontSize = isStory ? 48 : 44;
    lineHeight = isStory ? 76 : 70;
  }

  ctx.font = `600 ${fontSize}px ${state.selectedFont}`;

  const maxWidth = W - 260;
  const lines = wrapText(ctx, `"${quote.text}"`, maxWidth);
  const totalTextHeight = lines.length * lineHeight;
  const startY = (H / 2) - (totalTextHeight / 2) + (isStory ? 20 : 30);

  lines.forEach((line, idx) => {
    ctx.fillText(line, W / 2, startY + (idx * lineHeight));
  });
  ctx.restore();

  // 7. Alt Bilgi & Çiçekli Ayırıcı
  ctx.save();
  const bottomY = isStory ? H - 240 : H - 150;

  // Çiçekli Ayırıcı Bordür
  drawFloralDivider(ctx, W / 2, bottomY - 45, 340, theme, pattern);

  // Kaynak İsmi
  ctx.font = "bold 34px 'Outfit', sans-serif";
  ctx.fillStyle = theme.accentSoft;
  ctx.textAlign = "center";
  ctx.fillText(`${quote.source} • ${quote.section}`, W / 2, bottomY);

  // Kategori
  ctx.font = "500 24px 'Outfit', sans-serif";
  ctx.fillStyle = theme.textMuted;
  ctx.fillText(quote.categoryName, W / 2, bottomY + 40);
  ctx.restore();
}

// ==========================================================================
// ÇİÇEK VE GÜL VEKTÖR ÇİZİM FONKSİYONLARI (HIGH-PRECISION FLORAL ENGINE)
// ==========================================================================

function drawFloralBordersAndGarlands(ctx, W, H, outerM, innerM, theme, pattern) {
  const corners = [
    { x: innerM, y: innerM, dx: 1, dy: 1 },
    { x: W - innerM, y: innerM, dx: -1, dy: 1 },
    { x: innerM, y: H - innerM, dx: 1, dy: -1 },
    { x: W - innerM, y: H - innerM, dx: -1, dy: -1 }
  ];

  // 4 Köşe Gül ve Çiçek Sarmaşıkları (Büyük & Belirgin Ölçek)
  corners.forEach(c => {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(c.dx, c.dy);

    if (pattern === "rose_vines") {
      drawCornerRoseArabesque(ctx, 0, 0, 160, theme);
    } else if (pattern === "ottoman_tezhip") {
      drawOttomanTezhipCorner(ctx, 0, 0, 165, theme);
    } else if (pattern === "gold_tulips") {
      drawGoldTulipCorner(ctx, 0, 0, 160, theme);
    } else {
      drawFloralWreathCorner(ctx, 0, 0, 155, theme);
    }
    ctx.restore();
  });

  // Yan Kenar Sarmaşık ve Çiçek Düğümleri
  drawSideFloralAccents(ctx, W, H, innerM, theme);
}

// 1. GÜL VE SARMAŞIK KÖŞE DESENİ (Büyük & Zengin Detay)
function drawCornerRoseArabesque(ctx, x, y, size, theme) {
  // Altın Sarmaşık Dalı (S-Curves)
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.bezierCurveTo(20, size * 0.6, 35, 60, size * 0.6, 20);
  ctx.lineTo(size, 0);
  ctx.stroke();

  // Küçük kıvrım tendrilleri (Spiral sarmaşıklar)
  drawSpiralTendril(ctx, 35, 60, 24, theme.accentSoft);
  drawSpiralTendril(ctx, 75, 28, 20, theme.accentSoft);

  // Yapraklar
  drawLeaf(ctx, 16, size * 0.7, 24, -Math.PI / 4, theme.accent);
  drawLeaf(ctx, size * 0.7, 16, 24, Math.PI / 4, theme.accent);
  drawLeaf(ctx, 48, 48, 22, Math.PI / 4, theme.accentSoft);

  // Açmış Katmerli Büyük Gül Motifi (Köşe Odak Noktası)
  drawRoseBlossom(ctx, 38, 38, 32, theme.roseColor, theme.accent, theme.roseGlow);

  // Yan Gül Tomurcukları (Buds)
  drawRoseBud(ctx, 6, size * 0.85, 16, theme.roseColor, theme.accent);
  drawRoseBud(ctx, size * 0.85, 6, 16, theme.roseColor, theme.accent);
}

// 2. OSMANLI TEZHİBİ & HATEMİ ÇİÇEK KÖŞESİ (Büyük & İhtişamlı)
function drawOttomanTezhipCorner(ctx, x, y, size, theme) {
  // Rumi ve Hatayi Eğrileri
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.quadraticCurveTo(size * 0.45, size * 0.45, size, 0);
  ctx.stroke();

  // Katmerli Rozet Çiçek (Merkez Hatayi)
  drawIlluminatedRosette(ctx, 44, 44, 35, theme.accent, theme.accentSoft);

  // Palmet yaprakları
  drawPalmetteLeaf(ctx, 20, 88, 30, -0.6, theme.accent);
  drawPalmetteLeaf(ctx, 88, 20, 30, 0.6, theme.accent);
}

// 3. ALTIN LALE VE KARANFİL KÖŞESİ (Büyük & Zarif)
function drawGoldTulipCorner(ctx, x, y, size, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.bezierCurveTo(28, size * 0.5, size * 0.5, 28, size, 0);
  ctx.stroke();

  // Klasik Osmanlı Lalesi (Tulip)
  drawOttomanTulip(ctx, 44, 44, 38, theme.accent, theme.accentSoft);

  // Yan Karanfil Motifi (Carnation)
  drawCarnation(ctx, 12, size * 0.75, 22, theme.roseColor, theme.accent);
  drawCarnation(ctx, size * 0.75, 12, 22, theme.roseColor, theme.accent);
}

// 4. BAHAR ÇELENGİ KÖŞESİ (Büyük & Çiçekli)
function drawFloralWreathCorner(ctx, x, y, size, theme) {
  ctx.strokeStyle = theme.accentSoft;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(48, 48, 38, 0, Math.PI * 2);
  ctx.stroke();

  // Çelenk üzerinde çiçekler
  for (let i = 0; i < 7; i++) {
    const angle = (i * Math.PI * 2) / 7;
    const fx = 48 + Math.cos(angle) * 38;
    const fy = 48 + Math.sin(angle) * 38;
    drawSmallBlossom(ctx, fx, fy, 11, theme.roseColor, theme.accent);
  }
}

// KATMERLİ AÇMIŞ GÜL MOTİFİ (Multi-petaled Blooming Rose)
function drawRoseBlossom(ctx, cx, cy, radius, petalColor, goldColor, glowColor) {
  ctx.save();
  
  // Parıltı Halesi
  if (glowColor) {
    ctx.fillStyle = glowColor;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dış Taç Yaprakları (Outer Layer)
  ctx.fillStyle = petalColor;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1.2;

  const numOuterPetals = 6;
  for (let i = 0; i < numOuterPetals; i++) {
    const angle = (i * 2 * Math.PI) / numOuterPetals;
    const px = cx + Math.cos(angle) * (radius * 0.6);
    const py = cy + Math.sin(angle) * (radius * 0.6);
    
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Orta Taç Yaprakları (Middle Layer)
  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.85;
  const numMidPetals = 5;
  for (let i = 0; i < numMidPetals; i++) {
    const angle = (i * 2 * Math.PI) / numMidPetals + 0.5;
    const px = cx + Math.cos(angle) * (radius * 0.35);
    const py = cy + Math.sin(angle) * (radius * 0.35);
    
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.38, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.globalAlpha = 1.0;

  // Gülün Merkez Sarmalı / Göbeği (Golden Spiral Core)
  ctx.fillStyle = goldColor;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.22, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.12, 0, Math.PI * 1.6);
  ctx.stroke();

  ctx.restore();
}

// GÜL TOMURCUĞU (Rosebud)
function drawRoseBud(ctx, cx, cy, size, color, goldColor) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.ellipse(cx, cy, size * 0.6, size, Math.PI / 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Çanak yaprak (Seval)
  ctx.fillStyle = goldColor;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.5, cy + size * 0.3);
  ctx.lineTo(cx, cy + size * 0.8);
  ctx.lineTo(cx + size * 0.5, cy + size * 0.3);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// OSMANLI LALESİ (Lale Motif)
function drawOttomanTulip(ctx, cx, cy, size, goldColor, accentColor) {
  ctx.save();
  ctx.fillStyle = accentColor;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1.5;

  // Lale Gövdesi ve Uçları
  ctx.beginPath();
  ctx.moveTo(cx, cy + size * 0.7);
  ctx.bezierCurveTo(cx - size * 0.8, cy + size * 0.2, cx - size * 0.7, cy - size * 0.6, cx - size * 0.4, cy - size * 0.9);
  ctx.bezierCurveTo(cx - size * 0.2, cy - size * 0.3, cx, cy - size * 0.4, cx, cy - size * 0.8);
  ctx.bezierCurveTo(cx, cy - size * 0.4, cx + size * 0.2, cy - size * 0.3, cx + size * 0.4, cy - size * 0.9);
  ctx.bezierCurveTo(cx + size * 0.7, cy - size * 0.6, cx + size * 0.8, cy + size * 0.2, cx, cy + size * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

// KARANFİL (Carnation)
function drawCarnation(ctx, cx, cy, size, color, goldColor) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.arc(cx, cy, size, Math.PI * 1.1, Math.PI * 1.9);
  ctx.lineTo(cx, cy + size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

// ZARİF YAPRAK (Leaf)
function drawLeaf(ctx, cx, cy, size, angle, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.quadraticCurveTo(size * 0.5, 0, 0, size);
  ctx.quadraticCurveTo(-size * 0.5, 0, 0, -size);
  ctx.fill();
  ctx.restore();
}

// HELEZON SARMAŞIK (Spiral Tendril)
function drawSpiralTendril(ctx, cx, cy, radius, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 1.5);
  ctx.stroke();
  ctx.restore();
}

// KÜÇÜK ÇİÇEK (Small Blossom)
function drawSmallBlossom(ctx, cx, cy, radius, color, goldColor) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

// ROZET HATAYİ ÇİÇEK
function drawIlluminatedRosette(ctx, cx, cy, size, goldColor, accentColor) {
  ctx.save();
  ctx.fillStyle = accentColor;
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1.5;

  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const px = cx + Math.cos(angle) * (size * 0.5);
    const py = cy + Math.sin(angle) * (size * 0.5);
    ctx.beginPath();
    ctx.arc(px, py, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.fillStyle = goldColor;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPalmetteLeaf(ctx, cx, cy, size, angle, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.3, size, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// YAN KENAR ÇİÇEK DÜĞÜMLERİ
function drawSideFloralAccents(ctx, W, H, margin, theme) {
  // Üst ve Alt Orta Çiçek Düğümleri
  drawRoseBlossom(ctx, W / 2, margin, 18, theme.roseColor, theme.accent, theme.roseGlow);
  drawRoseBlossom(ctx, W / 2, H - margin, 18, theme.roseColor, theme.accent, theme.roseGlow);

  // Sol ve Sağ Orta Çiçek Düğümleri
  drawRoseBlossom(ctx, margin, H / 2, 18, theme.roseColor, theme.accent, theme.roseGlow);
  drawRoseBlossom(ctx, W - margin, H / 2, 18, theme.roseColor, theme.accent, theme.roseGlow);
}

// ÜST TEZHİB VE ÇİÇEKLİ TAÇ (Top Floral Crest - Büyük & İhtişamlı)
function drawTopFloralCrest(ctx, cx, cy, width, theme) {
  ctx.save();
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 2.2;

  // Sol ve Sağ Dal
  ctx.beginPath();
  ctx.moveTo(cx - width / 2, cy);
  ctx.bezierCurveTo(cx - width / 4, cy - 24, cx - 36, cy + 12, cx - 22, cy);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx + width / 2, cy);
  ctx.bezierCurveTo(cx + width / 4, cy - 24, cx + 36, cy + 12, cx + 22, cy);
  ctx.stroke();

  // Merkez Gül Motifi
  drawRoseBlossom(ctx, cx, cy - 6, 22, theme.roseColor, theme.accent, theme.roseGlow);

  // Yan Yapraklar
  drawLeaf(ctx, cx - width / 3, cy - 8, 16, -0.4, theme.accentSoft);
  drawLeaf(ctx, cx + width / 3, cy - 8, 16, 0.4, theme.accentSoft);

  ctx.restore();
}

// ALT ÇİÇEKLİ AYIRICI (Bottom Floral Divider - Büyük & Zengin)
function drawFloralDivider(ctx, cx, cy, width, theme, pattern) {
  ctx.save();
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 2;

  // Sol Çizgi
  ctx.beginPath();
  ctx.moveTo(cx - width / 2, cy);
  ctx.lineTo(cx - 32, cy);
  ctx.stroke();

  // Sağ Çizgi
  ctx.beginPath();
  ctx.moveTo(cx + 32, cy);
  ctx.lineTo(cx + width / 2, cy);
  ctx.stroke();

  // Orta Açmış Gül
  drawRoseBlossom(ctx, cx, cy, 18, theme.roseColor, theme.accent, theme.roseGlow);

  // İki Yan Tomurcuk
  drawRoseBud(ctx, cx - 55, cy, 11, theme.roseColor, theme.accent);
  drawRoseBud(ctx, cx + 55, cy, 11, theme.roseColor, theme.accent);

  ctx.restore();
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

// ==========================================================================
// 12. GALERİYE KAYDETME VE SOSYAL MEDYA PAYLAŞIMI
// ==========================================================================

// A) Galeriye / Resimler Klasörüne İndirme
async function downloadCardImage() {
  const quote = state.modalQuote || state.currentFeatured;
  const filename = `vecizeler-${quote.sourceType}-${quote.id}.png`;
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");

  // 1. Android Capacitor Ortamı (Özel NativeGallery Eklentimiz ile Galeriye Kayıt)
  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugins = window.Capacitor.Plugins;
      
      // Özel NativeGallery eklentimiz (MediaStore ile doğrudan Galeriye / Risale-i Nur albümüne kaydeder)
      if (plugins && plugins.NativeGallery && plugins.NativeGallery.saveImageToGallery) {
        const res = await plugins.NativeGallery.saveImageToGallery({
          base64: dataUrl,
          filename: filename
        });
        showToast("Görsel telefonunuzun Galerisine (Risale-i Nur albümüne) kaydedildi! 🖼️", "✅");
        return;
      }

      // Yedek: Filesystem
      if (plugins && plugins.Filesystem) {
        const saved = await plugins.Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: "DOCUMENTS"
        });
        showToast("Cihazınızın Belgeler / Resimler klasörüne kaydedildi!", "✅");
        return;
      }
    } catch (err) {
      console.warn("Capacitor save error:", err);
    }
  }

  // 2. Modern PC Tarayıcı FilePicker
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{
          description: "PNG Görseli",
          accept: { "image/png": [".png"] }
        }]
      });
      const writable = await handle.createWritable();
      const blob = await new Promise(resolve => DOM.quoteCanvas.toBlob(resolve, "image/png"));
      await writable.write(blob);
      await writable.close();
      showToast("Görsel seçtiğiniz Resimler klasörüne kaydedildi! 🖼️", "✅");
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }

  // 3. Standart İndirme Fallback
  if (DOM.quoteCanvas.toBlob) {
    DOM.quoteCanvas.toBlob(blob => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = filename;
      link.href = blobUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      showToast("Görsel İndirilenler klasörüne kaydedildi!", "💾");
    }, "image/png");
  } else {
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("İndirilenler klasörüne kaydedildi!", "💾");
  }
}

// B) WhatsApp Paylaşımı
async function shareToWhatsApp() {
  const quote = state.modalQuote || state.currentFeatured;
  const filename = `vecizeler-${quote.id}.png`;
  const text = `"${quote.text}"\n\n— ${quote.source} (${quote.section})\n\n📲 VECİZELER Uygulaması`;
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");

  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugins = window.Capacitor.Plugins;
      if (plugins && plugins.Filesystem && plugins.Share) {
        const saved = await plugins.Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: "CACHE"
        });

        await plugins.Share.share({
          title: "Vecizeler",
          text: text,
          url: saved.uri,
          dialogTitle: "WhatsApp ile Paylaş"
        });
        showToast("WhatsApp paylaşım menüsü açıldı!", "💬");
        return;
      }
    } catch (err) {
      console.warn("WhatsApp share error:", err);
    }
  }

  if (navigator.share && DOM.quoteCanvas.toBlob) {
    try {
      const blob = await new Promise(resolve => DOM.quoteCanvas.toBlob(resolve, "image/png"));
      if (blob) {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "Vecizeler",
            text: text
          });
          showToast("WhatsApp ile paylaşıldı!", "💬");
          return;
        }
      }
    } catch (err) {
      if (err.name !== "AbortError") console.warn(err);
    }
  }

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
  showToast("WhatsApp açılıyor...", "💬");
}

// C) Instagram Paylaşımı
async function shareToInstagram() {
  const quote = state.modalQuote || state.currentFeatured;
  const filename = `vecizeler-${quote.id}.png`;
  const text = `"${quote.text}"\n\n— ${quote.source} (${quote.section})`;
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");

  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugins = window.Capacitor.Plugins;
      if (plugins && plugins.Filesystem && plugins.Share) {
        const saved = await plugins.Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: "CACHE"
        });

        await plugins.Share.share({
          title: "Vecizeler",
          text: text,
          url: saved.uri,
          dialogTitle: "Instagram ile Paylaş"
        });
        showToast("Instagram menüsü açıldı!", "📸");
        return;
      }
    } catch (err) {
      console.warn("Instagram share error:", err);
    }
  }

  if (navigator.share && DOM.quoteCanvas.toBlob) {
    try {
      const blob = await new Promise(resolve => DOM.quoteCanvas.toBlob(resolve, "image/png"));
      if (blob) {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "Vecizeler",
            text: text
          });
          showToast("Instagram ile paylaşıldı!", "📸");
          return;
        }
      }
    } catch (err) {
      if (err.name !== "AbortError") console.warn(err);
    }
  }

  window.open("https://www.instagram.com/", "_blank");
  downloadCardImage();
  showToast("Görsel indirildi ve Instagram açıldı!", "📸");
}

// D) Facebook Paylaşımı
async function shareToFacebook() {
  const quote = state.modalQuote || state.currentFeatured;
  const filename = `vecizeler-${quote.id}.png`;
  const text = `"${quote.text}"\n\n— ${quote.source} (${quote.section})`;
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");

  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugins = window.Capacitor.Plugins;
      if (plugins && plugins.Filesystem && plugins.Share) {
        const saved = await plugins.Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: "CACHE"
        });

        await plugins.Share.share({
          title: "Vecizeler",
          text: text,
          url: saved.uri,
          dialogTitle: "Facebook ile Paylaş"
        });
        showToast("Facebook paylaşım menüsü açıldı!", "📘");
        return;
      }
    } catch (err) {
      console.warn("Facebook share error:", err);
    }
  }

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}`;
  window.open(fbUrl, "_blank");
  showToast("Facebook açılıyor...", "📘");
}

// E) Yerel / Diğer Paylaşım
async function shareNativeGeneral() {
  const quote = state.modalQuote || state.currentFeatured;
  const filename = `vecizeler-${quote.id}.png`;
  const text = `"${quote.text}"\n\n— ${quote.source} (${quote.section})\n\n📲 VECİZELER`;
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");

  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugins = window.Capacitor.Plugins;
      if (plugins && plugins.Filesystem && plugins.Share) {
        const saved = await plugins.Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: "CACHE"
        });

        await plugins.Share.share({
          title: "VECİZELER",
          text: text,
          url: saved.uri,
          dialogTitle: "Uygulama ile Paylaş"
        });
        showToast("Paylaşım menüsü açıldı!", "📲");
        return;
      }
    } catch (err) {
      console.warn("Native share error:", err);
    }
  }

  if (navigator.share && DOM.quoteCanvas.toBlob) {
    try {
      const blob = await new Promise(resolve => DOM.quoteCanvas.toBlob(resolve, "image/png"));
      if (blob) {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "VECİZELER",
            text: text
          });
          showToast("Paylaşıldı!", "📲");
          return;
        }
      }
    } catch (err) {
      if (err.name !== "AbortError") console.warn(err);
    }
  }

  copyQuoteText(quote);
  openCardInNewTab();
}

function openCardInNewTab() {
  const dataUrl = DOM.quoteCanvas.toDataURL("image/png");
  const win = window.open();
  if (win) {
    win.document.write(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VECİZELER Görsel Kartı</title>
        <style>
          body { margin: 0; background: #071710; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, sans-serif; color: #f4dc81; text-align: center; padding: 20px; box-sizing: border-box; }
          img { max-width: 90vw; max-height: 75vh; border-radius: 14px; box-shadow: 0 10px 35px rgba(0,0,0,0.8); border: 1.5px solid #d4af37; }
          .hint { margin-top: 18px; font-size: 15px; color: #c2cfc7; max-width: 480px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <img src="${dataUrl}" alt="Vecizeler Kartı">
        <p class="hint">💡 <strong>Nasıl Kaydedilir?</strong><br>Bilgisayarda resme sağ tıklayıp <strong>"Resmi Farklı Kaydet..."</strong> diyebilirsiniz.<br>Telefonda ise resme basılı tutup <strong>"Resmi İndir / Paylaş"</strong> yapabilirsiniz.</p>
      </body>
      </html>
    `);
    win.document.close();
  }
}

// ==========================================================================
// 13. FAVORİ VE KOPYALAMA İŞLEMLERİ
// ==========================================================================
function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast("Favorilerden çıkarıldı", "💔");
  } else {
    state.favorites.push(id);
    showToast("Favorilere eklendi!", "❤️");
  }

  localStorage.setItem("vecizeler_favorites", JSON.stringify(state.favorites));
  updateFavBadge();

  if (state.currentFeatured && state.currentFeatured.id === id) {
    renderFeaturedQuote();
  }

  if (DOM.fullscreenViewer.classList.contains("open")) {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    const current = list[state.fullscreenIndex];
    if (current && current.id === id) {
      DOM.fsFavIcon.textContent = state.favorites.includes(id) ? "❤️" : "♡";
    }
  }

  filterAndRenderQuotes();
}

function updateFavBadge() {
  DOM.favBadge.textContent = state.favorites.length;
}

function copyQuoteText(quote) {
  if (!quote) return;
  const text = `"${quote.text}"\n\n— ${quote.source} (${quote.section})\n\n📲 VECİZELER`;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Vecize panoya kopyalandı!", "📋");
  }).catch(() => {
    showToast("Kopyalama başarısız", "❌");
  });
}

function showToast(message, icon = "✔") {
  DOM.toastIcon.textContent = icon;
  DOM.toastMessage.textContent = message;
  DOM.toast.classList.add("show");
  clearTimeout(DOM.toast._timer);
  DOM.toast._timer = setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 2600);
}

// ==========================================================================
// 14. SESLİ OKUMA MOTORU (NATIVE ANDROID TTS + WEB SPEECH FALLBACK)
// ==========================================================================
let currentSpeakingId = null;
let turkishVoice = null;
let isNativeTTSAvailable = false;

function initVoices() {
  if (window.Capacitor && window.Capacitor.isPluginAvailable("NativeTTS")) {
    isNativeTTSAvailable = true;
    try {
      const NativeTTS = window.Capacitor.Plugins.NativeTTS;
      NativeTTS.addListener("ttsEvent", (data) => {
        if (data && (data.event === "done" || data.event === "error")) {
          stopSpeakingUI();
        }
      });
    } catch (e) {
      console.warn("NativeTTS listener bind error:", e);
    }
  }

  if ("speechSynthesis" in window) {
    const voices = window.speechSynthesis.getVoices();
    turkishVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("tr")) || null;
  }
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = initVoices;
}
document.addEventListener("DOMContentLoaded", initVoices);

async function speakQuoteText(quote, callerBtn = null) {
  if (!quote) return;

  const plugins = window.Capacitor && window.Capacitor.Plugins;
  const hasNativeTTS = !!(plugins && plugins.NativeTTS);
  const profile = state.selectedVoiceGender || "male_deep";

  // Eğer zaten okunuyorsa durdur
  if (currentSpeakingId === quote.id) {
    if (hasNativeTTS) {
      try { await plugins.NativeTTS.stop(); } catch (e) {}
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    stopSpeakingUI();
    showToast("Sesli okuma durduruldu", "⏹️");
    return;
  }

  // Önceki konuşmayı durdur
  if (hasNativeTTS) {
    try { await plugins.NativeTTS.stop(); } catch (e) {}
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  stopSpeakingUI();

  // Okunacak metin
  const fullText = `${quote.text}. Kaynak: ${quote.source}, ${quote.section}.`;
  currentSpeakingId = quote.id;

  // UI güncelle
  if (callerBtn) {
    callerBtn.classList.add("tts-speaking");
    const label = callerBtn.querySelector(".tts-label");
    if (label) label.textContent = "Durdur";
  }

  if (DOM.fsSpeakBtn && DOM.fullscreenViewer.classList.contains("open")) {
    DOM.fsSpeakBtn.classList.add("tts-speaking");
    if (DOM.fsSpeakIcon) DOM.fsSpeakIcon.textContent = "⏹️";
    if (DOM.fsSpeakLabel) DOM.fsSpeakLabel.textContent = "Durdur";
  }

  let toastTitle = "Tok & Kalın erkek sesiyle okunuyor...";
  if (profile === "male_natural") toastTitle = "Doğal erkek sesiyle okunuyor...";
  else if (profile === "female_soft") toastTitle = "Zarif hanım sesiyle okunuyor...";
  else if (profile === "female_clear") toastTitle = "Net hanım sesiyle okunuyor...";
  else if (profile === "meditation") toastTitle = "Derin tefekkür moduyla okunuyor...";

  showToast(toastTitle, "🎙️");

  // 1. Tercih: Doğrudan Android Sistem TTS (Tok & Kalın Bas Erkek Sesi)
  if (hasNativeTTS) {
    try {
      await plugins.NativeTTS.speak({
        text: fullText,
        id: String(quote.id),
        gender: profile
      });
      return;
    } catch (err) {
      console.warn("Native TTS hatası, web TTS deneniyor:", err);
    }
  }

  // 2. Tercih: Web Speech API Fallback (Tarayıcı / Destekleyen WebView)
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = "tr-TR";

    if (profile === "male_deep") {
      utterance.pitch = 0.72; // Tok, derin bas erkek tonu
      utterance.rate = 0.85;  // Ağırbaşlı, tane tane ve vakarlı
    } else if (profile === "male_natural") {
      utterance.pitch = 0.86;
      utterance.rate = 0.90;
    } else if (profile === "female_soft") {
      utterance.pitch = 1.02;
      utterance.rate = 0.90;
    } else if (profile === "female_clear") {
      utterance.pitch = 1.12;
      utterance.rate = 0.95;
    } else if (profile === "meditation") {
      utterance.pitch = 0.68;
      utterance.rate = 0.78;
    }

    if (turkishVoice) {
      utterance.voice = turkishVoice;
    } else {
      initVoices();
      if (turkishVoice) utterance.voice = turkishVoice;
    }

    utterance.onend = () => stopSpeakingUI();
    utterance.onerror = () => stopSpeakingUI();

    window.speechSynthesis.speak(utterance);
    return;
  }

  // Her ikisi de yoksa kullanıcıya bildir
  stopSpeakingUI();
  showToast("Cihazınızda sesli okuma motoru bulunamadı", "⚠️");
}

function stopSpeakingUI() {
  currentSpeakingId = null;
  document.querySelectorAll(".tts-speaking").forEach(el => {
    el.classList.remove("tts-speaking");
    const label = el.querySelector(".tts-label");
    if (label) label.textContent = "Sesli Dinle";
  });

  if (DOM.fsSpeakBtn) {
    DOM.fsSpeakBtn.classList.remove("tts-speaking");
    if (DOM.fsSpeakIcon) DOM.fsSpeakIcon.textContent = "🔊";
    if (DOM.fsSpeakLabel) DOM.fsSpeakLabel.textContent = "Sesli Dinle";
  }
}

// ==========================================================================
// 15. TEMA VE YAZI BOYUTU
// ==========================================================================
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("vecizeler_theme", target);
  updateThemeIcon(target);
  showToast(target === "dark" ? "Koyu tema aktif" : "Açık tema aktif", target === "dark" ? "🌙" : "☀️");
}

function updateThemeIcon(theme) {
  DOM.themeToggleBtn.querySelector(".theme-icon").textContent = theme === "dark" ? "🌙" : "☀️";
}

function adjustFontSize(delta) {
  if (delta === 0) {
    state.fontScale = 1.05;
  } else {
    state.fontScale = Math.min(1.5, Math.max(0.85, state.fontScale + delta));
  }
  localStorage.setItem("vecizeler_font_scale", state.fontScale);
  document.documentElement.style.setProperty("--quote-font-scale", state.fontScale);
}

// ==========================================================================
// 15. OLAY DİNLEYİCİLERİ (EVENT LISTENERS)
// ==========================================================================
function setupEventListeners() {
  // Arama Girişi
  DOM.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    DOM.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    filterAndRenderQuotes();
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    state.searchQuery = "";
    DOM.clearSearchBtn.style.display = "none";
    filterAndRenderQuotes();
  });

  DOM.resetFiltersBtn.addEventListener("click", () => {
    state.searchQuery = "";
    state.currentCategory = "all";
    state.currentSourceType = "all";
    state.activeTab = "all";
    DOM.searchInput.value = "";
    DOM.clearSearchBtn.style.display = "none";
    updateActiveCategoryPills();
    updateActiveSourcePills();
    updateFilterTabs();
    filterAndRenderQuotes();
  });

  // Kaynak Türü Filtresi (Tümü, Risale, Kur'an, Hadis)
  DOM.sourceTypePills.addEventListener("click", (e) => {
    const pill = e.target.closest(".source-pill");
    if (!pill) return;
    state.currentSourceType = pill.dataset.source;
    updateActiveSourcePills();
    filterAndRenderQuotes();
  });

  // Tablar (Tümü vs Favoriler)
  DOM.allQuotesTabBtn.addEventListener("click", () => {
    state.activeTab = "all";
    updateFilterTabs();
    filterAndRenderQuotes();
  });

  DOM.favoritesTabBtn.addEventListener("click", () => {
    state.activeTab = "favorites";
    updateFilterTabs();
    filterAndRenderQuotes();
  });

  function updateFilterTabs() {
    DOM.allQuotesTabBtn.classList.toggle("active", state.activeTab === "all");
    DOM.favoritesTabBtn.classList.toggle("active", state.activeTab === "favorites");
  }

  // Font & Ses Seçimi
  DOM.globalFontSelect.addEventListener("change", (e) => {
    setFont(e.target.value);
  });
  DOM.modalFontSelect.addEventListener("change", (e) => {
    setFont(e.target.value);
  });
  if (DOM.globalVoiceSelect) {
    DOM.globalVoiceSelect.value = state.selectedVoiceGender;
    DOM.globalVoiceSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      state.selectedVoiceGender = val;
      localStorage.setItem("vecizeler_voice_gender", val);
      const plugins = window.Capacitor && window.Capacitor.Plugins;
      if (plugins && plugins.NativeTTS) {
        try { plugins.NativeTTS.setGender({ gender: val }); } catch (err) {}
      }
      let msg = "Tok & Kalın erkek sesi aktif";
      if (val === "male_natural") msg = "Doğal erkek sesi aktif";
      else if (val === "female_soft") msg = "Zarif hanım sesi aktif";
      else if (val === "female_clear") msg = "Net hanım sesi aktif";
      else if (val === "meditation") msg = "Derin tefekkür modu aktif";
      showToast(msg, "🎙️");
    });
  }

  // Renk Seçimi
  DOM.globalColorPalette.addEventListener("click", (e) => {
    const btn = e.target.closest(".color-swatch-btn");
    if (btn) setTextColor(btn.dataset.color);
  });
  DOM.modalColorPalette.addEventListener("click", (e) => {
    const btn = e.target.closest(".color-swatch-btn");
    if (btn) setTextColor(btn.dataset.color);
  });
  DOM.customColorPicker.addEventListener("input", (e) => {
    setTextColor(e.target.value);
  });

  // Font Boyutu
  DOM.fontDecBtn.addEventListener("click", () => adjustFontSize(-0.1));
  DOM.fontResetBtn.addEventListener("click", () => adjustFontSize(0));
  DOM.fontIncBtn.addEventListener("click", () => adjustFontSize(0.1));

  // Tema Değiştirme
  DOM.themeToggleBtn.addEventListener("click", toggleTheme);

  // Öne Çıkan Hikmet Aksiyonları
  DOM.randomQuoteBtn.addEventListener("click", () => {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      stopSpeakingUI();
    }
    pickRandomFeatured();
  });
  if (DOM.speakFeaturedBtn) {
    DOM.speakFeaturedBtn.addEventListener("click", () => {
      speakQuoteText(state.currentFeatured, DOM.speakFeaturedBtn);
    });
  }
  DOM.copyFeaturedBtn.addEventListener("click", () => copyQuoteText(state.currentFeatured));
  DOM.cardModalBtn.addEventListener("click", () => openCardModal(state.currentFeatured));
  DOM.favFeaturedBtn.addEventListener("click", () => toggleFavorite(state.currentFeatured.id));
  DOM.featuredFullscreenBtn.addEventListener("click", () => {
    const idx = state.filteredQuotesList.findIndex(q => q.id === state.currentFeatured.id);
    openFullscreenForIndex(idx >= 0 ? idx : 0);
  });

  // Üst Menü Tam Ekran Butonu
  DOM.openFullscreenFeedBtn.addEventListener("click", () => {
    openFullscreenForIndex(0);
  });

  // Kart Tıklamaları (Event Delegation)
  DOM.quotesGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-action-btn");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;
    const index = Number(btn.dataset.index);
    const quote = VECIZELER.find(v => v.id === id);
    if (!quote) return;

    if (action === "speak") {
      speakQuoteText(quote, btn);
    } else if (action === "copy") {
      copyQuoteText(quote);
    } else if (action === "image") {
      openCardModal(quote);
    } else if (action === "fav") {
      toggleFavorite(id);
    } else if (action === "fullscreen") {
      openFullscreenForIndex(index);
    }
  });

  // Tam Ekran Görünüm Kontrolleri
  DOM.fsCloseBtn.addEventListener("click", closeFullscreenViewer);
  DOM.fsNextBtn.addEventListener("click", nextFullscreenCard);
  DOM.fsPrevBtn.addEventListener("click", prevFullscreenCard);
  
  if (DOM.fsSpeakBtn) {
    DOM.fsSpeakBtn.addEventListener("click", () => {
      const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
      const current = list[state.fullscreenIndex];
      speakQuoteText(current, DOM.fsSpeakBtn);
    });
  }
  
  DOM.fsSaveGalleryBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    state.modalQuote = list[state.fullscreenIndex];
    drawCardCanvas();
    downloadCardImage();
  });
  DOM.fsShareWaBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    state.modalQuote = list[state.fullscreenIndex];
    drawCardCanvas();
    shareToWhatsApp();
  });
  DOM.fsShareIgBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    state.modalQuote = list[state.fullscreenIndex];
    drawCardCanvas();
    shareToInstagram();
  });
  DOM.fsShareFbBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    state.modalQuote = list[state.fullscreenIndex];
    drawCardCanvas();
    shareToFacebook();
  });
  DOM.fsShareNativeBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    state.modalQuote = list[state.fullscreenIndex];
    drawCardCanvas();
    shareNativeGeneral();
  });
  DOM.fsCopyBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    copyQuoteText(list[state.fullscreenIndex]);
  });
  DOM.fsFavBtn.addEventListener("click", () => {
    const list = state.filteredQuotesList.length > 0 ? state.filteredQuotesList : VECIZELER;
    toggleFavorite(list[state.fullscreenIndex].id);
  });

  // Dokunmatik Kaydırma (Swipe Gestures)
  let touchStartX = 0;
  DOM.fsSwipeArea.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  DOM.fsSwipeArea.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextFullscreenCard();
      else prevFullscreenCard();
    }
  }, { passive: true });

  // Modal Kontrolleri
  DOM.closeModalBtn.addEventListener("click", closeCardModal);
  DOM.cardModal.addEventListener("click", (e) => {
    if (e.target === DOM.cardModal) closeCardModal();
  });

  // Format Seçimi (Kare vs Story)
  DOM.formatSquareBtn.addEventListener("click", () => {
    state.cardFormat = "square";
    DOM.formatSquareBtn.classList.add("active");
    DOM.formatStoryBtn.classList.remove("active");
    drawCardCanvas();
  });
  DOM.formatStoryBtn.addEventListener("click", () => {
    state.cardFormat = "story";
    DOM.formatStoryBtn.classList.add("active");
    DOM.formatSquareBtn.classList.remove("active");
    drawCardCanvas();
  });

  // Kart Tema Seçimi
  DOM.cardThemePicker.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-color-btn");
    if (!btn) return;
    document.querySelectorAll(".theme-color-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.cardTheme = btn.dataset.style;
    drawCardCanvas();
  });

  // Çiçek & Gül Deseni Seçimi
  if (DOM.floralPatternPicker) {
    DOM.floralPatternPicker.addEventListener("click", (e) => {
      const btn = e.target.closest(".floral-btn");
      if (!btn) return;
      document.querySelectorAll(".floral-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.floralPattern = btn.dataset.floral;
      drawCardCanvas();
    });
  }

  // Modal İndirme & Paylaşım
  DOM.downloadCardBtn.addEventListener("click", downloadCardImage);
  DOM.shareWaBtn.addEventListener("click", shareToWhatsApp);
  DOM.shareIgBtn.addEventListener("click", shareToInstagram);
  DOM.shareFbBtn.addEventListener("click", shareToFacebook);
  DOM.shareNativeBtn.addEventListener("click", shareNativeGeneral);
  DOM.openCardTabBtn.addEventListener("click", openCardInNewTab);

  // Klavye Kısayolları (ESC, Sol/Sağ Ok)
  window.addEventListener("keydown", (e) => {
    if (DOM.fullscreenViewer.classList.contains("open")) {
      if (e.key === "Escape") closeFullscreenViewer();
      else if (e.key === "ArrowRight") nextFullscreenCard();
      else if (e.key === "ArrowLeft") prevFullscreenCard();
    } else if (DOM.cardModal.classList.contains("open")) {
      if (e.key === "Escape") closeCardModal();
    }
  });
}

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Başlat
document.addEventListener("DOMContentLoaded", init);
