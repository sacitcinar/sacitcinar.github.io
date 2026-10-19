# Mehmet Sacit Çınar — Portfolio

Target URL: https://sacitcinar.github.io

## GitHub Pages kurulumu

1. ZIP içindeki dosya ve klasörleri `sacitcinar.github.io` reposunun köküne koyun.
   `index.html`, `assets`, `research`, `projects` ve `write-ups` aynı seviyede olmalı.
2. `.nojekyll` dosyasını da yükleyin. Linux'ta noktayla başlayan dosyalar gizli görünebilir;
   `git add .` bu dosyayı da ekler.
3. GitHub'da **Settings → Pages → Build and deployment** bölümünde:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Save'e basın ve Pages yayınının tamamlanmasını bekleyin.

Node.js, npm, derleme komutu veya veritabanı gerekmiyor.

## Yerelde açma

Dosyaya çift tıklamak yerine site kökünde HTTP sunucusu açın:

```bash
python3 -m http.server 8000
```

Tarayıcıda http://localhost:8000 adresine gidin. Menü içerikleri `fetch` ile yüklendiği
ve yollar site kökünden başladığı için `file://` üzerinden açmayın.

## Sonraki güncellemeler

Güncel dosyaları aynı konumlara kopyalayıp mevcut dosyaların üzerine yazın.
Repoda başka değişiklikler varsa önce uygun şekilde eşitleyin. Sonra:

```bash
git status
git add .
git commit -m "Update portfolio"
git push
```

Bu paket bir statik site kopyasıdır; Git geçmişi veya kimlik doğrulama bilgisi içermez.
Mevcut dosya ve klasör düzeni korunmuştur. Eski demo sayfaları da aynen bırakılmıştır.

GitHub Pages kaynak ayarları:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
