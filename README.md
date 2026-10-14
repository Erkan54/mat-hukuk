# MAT & ALPGÜL Hukuk Bürosu · Kurumsal Web Platformu

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Geliştirme_%26_Derleme-646CFF?logo=vite&logoColor=white)

[Web sitesi](https://www.sakaryamatalpgulhukuk.com/)

Hukuk bürosunun ekibini, çalışma alanlarını ve yayınlarını tanıtan; iletişim ve randevu taleplerini Web3Forms üzerinden ileten React uygulaması.

## Özellikler

- Ana sayfa, hakkımızda, ekip, çalışma alanı ve yayın detayları.
- Randevu tarih/saat seçimi ve başvuru formu; iletişim ve kariyer sayfaları.
- Sık sorulan sorular, KVKK, gizlilik, çerez ve sorumluluk metinleri.
- Framer Motion animasyonları ve mobil arayüz bileşenleri.

## Yerel kurulum

```sh
git clone https://github.com/Erkan54/mat-hukuk.git
cd mat-hukuk
npm ci
npm run dev
```

Node.js sürümü depodaki Vite paketinin `engines` gereksinimini karşılamalıdır. Diğer komutlar: `npm run lint`, `npm run build`, `npm run preview`.

## Dosya haritası

| Konum | Sorumluluk |
| --- | --- |
| [`src/pages/`](src/pages/) | İçerik, iletişim ve randevu sayfaları |
| [`src/components/`](src/components/) | Ortak düzen, ana sayfa ve randevu takvimi bileşenleri |
| [`src/data/`](src/data/) | Büro bilgileri, ekip, çalışma alanları, yayınlar ve form seçenekleri |
| [`api/`](api/) | İletişim/randevu için alternatif sunucu işlevleri |
| [`public/`](public/) | Statik varlıklar |
| [`vercel.json`](vercel.json) | Yayın yönlendirmeleri ve başlıklar |

## Form yapılandırması

Mevcut iletişim ve randevu sayfaları doğrudan `https://api.web3forms.com/submit` adresine gönderim yapar. Projeyi uyarlarken form ve `api/` işlevlerindeki Web3Forms erişim anahtarını kendi alıcı hesabınızla eşleyin; gerçek değer README'de tekrarlanmaz. Paket bağımlılıklarında EmailJS/Nodemailer bulunması, mevcut arayüz akışının SMTP kullandığı anlamına gelmez.

Randevu ekranı **talep toplar**; takvimde bir saat seçmek sunucuda kesinleşmiş rezervasyon oluşturmaz. E-posta teslimini ve tarih/saat akışını kendi test hesabınızla doğrulayın.

## Yayın

`npm run build` ile üretilen `dist/` çıktısını kullanın. Vercel dışındaki statik sunucularda React Router yolları için `index.html` fallback gerekir; `/api` işlevleri ayrıca barındırılmalıdır. Depoda kayıtlı eski `dist/` yerine güncel kaynaklardan build alın.
