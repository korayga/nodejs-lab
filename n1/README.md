# CLI Notes App

Node.js kullanılarak geliştirilmiş, terminal tabanlı basit ve etkili bir not alma uygulamasıdır. `yargs` ile komut satırı argümanları yönetilmiş ve `chalk` kütüphanesi ile kullanıcıya renkli geribildirimler sağlanmıştır.

## Özellikler

- Yeni not ekleme
- Var olan notları silme
- Sistemdeki tüm notları listeleme
- Belirli bir başlığa ait notun içeriğini okuma

## Kurulum

Projeyi bilgisayarınıza indirdikten sonra, bağımlılıkları yüklemek için proje dizininde şu komutu çalıştırın:

```bash
npm install
```

## Kullanım

Aşağıdaki komutları kullanarak uygulamayı terminal üzerinden test edebilirsiniz.

**1. Yeni Not Ekleme**
Yeni bir not oluşturur. Başlık (`--title`) ve içerik (`--body`) verilmesi zorunludur.
```bash
node app.js ekle --title="Alışveriş Listesi" --body="Süt, Ekmek, Yumurta"
```

**2. Not Silme**
Başlığı verilen notu sistemden siler.
```bash
node app.js sil --title="Alışveriş Listesi"
```

**3. Notları Listeleme**
Eklenmiş olan tüm notların başlık ve içeriklerini listeler.
```bash
node app.js list
```

**4. Not Okuma**
Sadece başlığı belirtilen spesifik bir notun detaylarını okumak için kullanılır.
```bash
node app.js oku --title="Alışveriş Listesi"
```

## Kullanılan Teknolojiler
- **Node.js** (File System modülü ile JSON veri saklama)
- **Yargs:** Terminal komutlarını yönetmek için.
- **Chalk:** Terminal çıktılarını renklendirmek için.
