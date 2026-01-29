# SOSO MEDIA CO Landing

## Kasma / performans

Site Tailwind CDN yerine **build edilmiş CSS** ve **defer script** kullanıyor; böylece ana thread daha az yüklenir.

### İlk kurulum ve çalıştırma

1. **Bağımlılıkları yükle ve CSS’i üret:**
   ```bash
   npm install
   npm run build
   ```
2. `css/main.css` oluşacak. Sonrasında `index.html`’i tarayıcıda aç veya bir sunucu ile servis et.

### Yapı

- **index.html** — Yapı + template’ler; `<link href="css/main.css">` + `<script defer src="js/app.js">`
- **css/input.css** — Tailwind direktifleri + özel stiller
- **css/main.css** — `npm run build` ile üretilir (Tailwind + özel stiller, minify)
- **js/app.js** — Deferred section inject + scroll reveal (defer = parse bloklamaz)
- **tailwind.config.js** — `content: ["./index.html"]`

### Geliştirme

Stil değişikliği yaptıktan sonra tekrar build al:

```bash
npm run build
```

Geliştirme için minify olmadan:

```bash
npm run build:dev
```
