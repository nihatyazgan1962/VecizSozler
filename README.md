# 💬 Veciz Sözler — Kuran, Hadis & Risale-i Nur Vecizeleri

Kur'an-ı Kerim'den ayetler, Hadis-i Şerifler ve Risale-i Nur'dan seçme vecizeleri bir arada sunan; ekran görüntüsü alıp paylaşabileceğiniz bir Android uygulamasıdır.

## ✨ Özellikler

- 📖 Kuran-ı Kerim vecizeleri
- 🕌 Hadis-i Şerifler
- 📚 Risale-i Nur seçmeleri
- 🖼️ Güzel arka planlarla vecize kartları
- 📸 Ekran görüntüsü paylaşımı (@capacitor/share)
- 📁 Medya galerisine kaydetme (@capacitor-community/media)
- 🔀 Rastgele vecize
- ⭐ Favorilere ekleme

## 🛠️ Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Mobil Wrapper | Capacitor 6.x |
| Medya Kaydetme | @capacitor-community/media |
| Paylaşım | @capacitor/share |
| Dosya Sistemi | @capacitor/filesystem |
| Platform | Android APK |

## 📋 Gereksinimler

- Node.js 18+
- Android Studio
- Java 17+
- Android SDK 21+

## 🚀 Kurulum

```bash
npm install
npx cap sync android
npx cap open android
```

### APK Derleme
```powershell
.\apk_yap.ps1
# veya
.\apk_yap.bat
```

## 📁 Proje Yapısı

```
├── www/              # Web uygulaması
├── android/          # Android native proje
├── tools/            # Yardımcı araçlar
└── package.json
```

## 👨‍💻 Geliştirici

**Nihat Yazgan** — Yazgan Bileşim  
GitHub: [@nihatyazgan1962](https://github.com/nihatyazgan1962)
