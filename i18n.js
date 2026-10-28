(() => {
  'use strict';
  const translations = {
  "Success": "Başarılı",
  "Redirection": "Yönlendirme",
  "Client errors": "İstemci hataları",
  "Server errors": "Sunucu hataları",
  "HTTP response codes by class": "Sınıflarına göre HTTP yanıt kodları",

  "Shell & redirection": "Shell ve yönlendirme",
  "Windows network utilities": "Windows ağ araçları",
  "Use parentheses: search evaluates OR before AND; where and eval evaluate AND before OR.": "Parantez kullanın: search, OR işlemini AND’den önce; where ve eval ise AND işlemini OR’dan önce değerlendirir.",
  "Force-with-lease rewrites history; background fetches can weaken its default expected-ref check.": "Force-with-lease geçmişi yeniden yazar; arka plandaki fetch işlemleri varsayılan referans kontrolünü zayıflatabilir.",

  "About": "Hakkımda",
  "ABOUT ME": "HAKKIMDA",
  "Research": "Araştırmalar",
  "Projects": "Projeler",
  "Contact": "İletişim",
  "Istanbul, Turkey": "İstanbul, Türkiye",
  "SOC Analyst": "SOC Analist",
  "Cybersecurity Engineer": "Siber Güvenlik Mühendisi",
  "Download CV": "Özgeçmişi İndir",
  "Latest Contents": "Son İçerikler",
  "Mail": "E-posta",
  "Email": "E-posta",
  "Tools, SIEM labs and detection rules.": "Araçlar, SIEM laboratuvarları ve tespit kuralları.",
  "Read more": "Devamını oku",
  "View on GitHub": "GitHub’da görüntüle",
  "Explore the source code": "Kaynak kodunu incele",
  "← Projects": "← Projeler",
  "URL / defanged URL": "URL / defanged URL",
  "Refang & normalize": "Refang ve normalleştirme",
  "Intel + heuristics": "İstihbarat + heuristics",
  "Risk score": "Risk puanı",
  "Verdict": "Sonuç",
  "Parse & inspect": "Ayrıştırma ve inceleme",
  "Logistic Regression": "Lojistik regresyon",
  "Assessment": "Değerlendirme",
  "threat intelligence": "tehdit istihbaratı",
  "URL analysis": "URL analizi",
  "risk assessment": "risk değerlendirmesi",
  "email security": "e-posta güvenliği",
  "machine learning": "makine öğrenmesi",
  "offline analysis": "çevrimdışı analiz",
  "One view of URL reputation": "URL itibarını tek raporda değerlendirme",
  "From URL to assessment": "URL’den değerlendirmeye",
  "Prepare the input.": "Girdi hazırlanması",
  "Collect the evidence.": "Bulguların toplanması",
  "Explain the outcome.": "Sonuçların açıklanması",
  "Intelligence sources": "İstihbarat kaynakları",
  "What it includes": "Özellikler",
  "Run it locally": "Yerel ortamda çalıştırma",
  "Usage example": "Kullanım örneği",
  "A look at the terminal": "Terminal görünümü",
  "Reading the result": "Sonuçları yorumlama",
  "Local email triage, with context": "E-postaların yerel ortamda incelenmesi",
  "From message to assessment": "E-postadan değerlendirmeye",
  "Read the message.": "E-postanın okunması",
  "Classify the text.": "Metnin sınıflandırılması",
  "Add technical context.": "Teknik bulguların eklenmesi",
  "CVE analysis, threat intelligence and technical research.": "CVE analizleri, tehdit istihbaratı ve teknik araştırmalar.",
  "Published through": "üzerinden yayımlanmıştır",
  "Read report": "Raporu oku",
  "Read analysis": "Analizi oku",
  "VULNERABILITY ANALYSIS": "ZAFİYET ANALİZİ",
  "THREAT INTELLIGENCE": "TEHDİT İSTİHBARATI",
  "SECURITY INCIDENT": "GÜVENLİK OLAYI",
  "SUPPLY CHAIN": "TEDARİK ZİNCİRİ",
  "PRIVILEGE ESCALATION": "YETKİ YÜKSELTME",
  "Hack The Box and TryHackMe investigations, step by step.": "Adım adım Hack The Box ve TryHackMe incelemeleri.",
  "Platform": "Platform",
  "All": "Tümü",
  "Category": "Kategori",
  "Machines": "Makineler",
  "MALWARE ANALYSIS": "ZARARLI YAZILIM ANALİZİ",
  "Read write-up": "Write-up’ı oku",
  "No write-ups in this category yet.": "Bu kategoride henüz write-up yok.",
  "Practical commands and compact technical references.": "Pratik komutlar ve kısa teknik başvuru notları.",
  "File operations, text processing, permissions, networking and packages.": "Dosya işlemleri, metin işleme, izinler, ağ ve paket yönetimi.",
  "Files, object pipelines, processes, Windows events and data handling.": "Dosyalar, nesne tabanlı pipeline’lar, süreçler, Windows olayları ve veri işleme.",
  "Host discovery, port scans, service detection, NSE and scan output.": "Host keşfi, port taramaları, servis tespiti, NSE ve tarama çıktıları.",
  "Display filters, capture filters, TCP analysis and common inspection actions.": "Görüntüleme filtreleri, yakalama filtreleri, TCP analizi ve sık kullanılan inceleme işlemleri.",
  "Searches, field extraction, statistics, time charts and a complete SPL query.": "Aramalar, alan çıkarımı, istatistikler, zaman grafikleri ve tam bir SPL sorgusu.",
  "Requests, headers, authentication, cookies, HTTP methods and status codes.": "İstekler, header’lar, kimlik doğrulama, çerezler, HTTP metotları ve durum kodları.",
  "Modes, movement, editing, search, files and split windows.": "Modlar, gezinme, düzenleme, arama, dosyalar ve bölünmüş pencereler.",
  "Changes, commits, branches, remotes, history and recovery commands.": "Değişiklikler, commit’ler, branch’ler, uzak repolar, geçmiş ve kurtarma komutları.",
  "Syntax and availability depend on the tool version and platform.": "Komutların yazımı ve kullanılabilirliği, araç sürümüne ve platforma göre değişebilir.",
  "Essential command-line references for everyday administration and security analysis.": "Günlük sistem yönetimi ve güvenlik analizi için temel komut satırı notları.",
  "Replace <…> with your value; […] is optional.": "<…> yerine kendi değerinizi yazın; […] içindeki bölümler isteğe bağlıdır.",
  "ON THIS PAGE": "BU SAYFADA",
  "Files & directories": "Dosyalar ve dizinler",
  "Text & editing": "Metin ve düzenleme",
  "Permissions & accounts": "İzinler ve hesaplar",
  "System & terminal": "Sistem ve terminal",
  "Processes & services": "Süreçler ve servisler",
  "Networking & remote access": "Ağ ve uzaktan erişim",
  "Archives & compression": "Arşivleme ve sıkıştırma",
  "Package management": "Paket yönetimi",
  "Command / option": "Komut / seçenek",
  "Description": "Açıklama",
  "Example": "Örnek",
  "Command": "Komut",
  "Daily Git commands for reviewing changes, committing, branching and synchronizing repositories.": "Değişiklikleri inceleme, commit oluşturma, branch yönetimi ve repoları senkronize etme için günlük Git komutları.",
  "Daily workflow": "Günlük iş akışı",
  "Branches & integration": "Branch’ler ve birleştirme",
  "Remotes & synchronization": "Uzak repolar ve senkronizasyon",
  "History & inspection": "Geçmiş ve inceleme",
  "Undo & temporary work": "Geri alma ve geçici çalışmalar",
  "Setup & repositories": "Kurulum ve repolar",
  "Add untracked file patterns to .gitignore; it does not stop tracking files already committed.": "Takip edilmeyen dosyalar için .gitignore’a kurallar ekleyin; daha önce commit edilmiş dosyaların takibini durdurmaz.",
  "HTTP methods, response codes and practical curl options for everyday requests.": "Günlük istekler için HTTP metotları, yanıt kodları ve pratik curl seçenekleri.",
  "Options below follow curl <url>. In Windows PowerShell 5.1, use curl.exe to avoid the curl alias.": "Aşağıdaki seçenekler curl <url> komutuna eklenir. Windows PowerShell 5.1’de curl takma adı yerine curl.exe kullanın.",
  "Examples use POSIX-shell quoting and illustrative example.com URLs.": "Örneklerde POSIX shell tırnaklama kuralları ve örnek amaçlı example.com URL’leri kullanılır.",
  "Everyday requests": "Günlük istekler",
  "Request data & authentication": "İstek verileri ve kimlik doğrulama",
  "Files & output": "Dosyalar ve çıktı",
  "Connections & troubleshooting": "Bağlantılar ve sorun giderme",
  "HTTP methods": "HTTP metotları",
  "Method": "Metot",
  "Common response codes": "Sık karşılaşılan yanıt kodları",
  "Status code": "Durum kodu",
  "Quick references for host discovery, port scanning, service detection and scan output.": "Host keşfi, port taraması, servis tespiti ve tarama çıktıları için kısa başvuru notları.",
  "Usage: nmap [options] <target>. Options below attach to this command.": "Kullanım: nmap [options] <target>. Aşağıdaki seçenekler bu komuta eklenir.",
  "Targets & discovery": "Hedefler ve keşif",
  "Ports & scan types": "Portlar ve tarama türleri",
  "Service & OS detection": "Servis ve işletim sistemi tespiti",
  "NSE scripts": "NSE script’leri",
  "Timing & performance": "Zamanlama ve performans",
  "Output & troubleshooting": "Çıktı ve sorun giderme",
  "Everyday commands for files, object pipelines, processes and Windows administration.": "Dosyalar, nesne tabanlı pipeline’lar, süreçler ve Windows yönetimi için günlük komutlar.",
  "Files & navigation": "Dosyalar ve gezinme",
  "Pipelines & objects": "Pipeline’lar ve nesneler",
  "Logs & networking": "Loglar ve ağ",
  "Data & requests": "Veriler ve istekler",
  "Help & scripting": "Yardım ve script yazımı",
  "Classic SPL search patterns for filtering events, transforming fields and building summaries.": "Olayları filtreleme, alanları dönüştürme ve özetler oluşturma için klasik SPL arama kalıpları.",
  "Examples use illustrative indexes and fields; replace them with names from your data.": "Örneklerdeki index ve alan adlarını kendi verilerinizdekilerle değiştirin.",
  "Search & filtering": "Arama ve filtreleme",
  "SPL query": "SPL sorgusu",
  "Fields & result order": "Alanlar ve sonuç sıralaması",
  "Counts & summaries": "Sayımlar ve özetler",
  "Time-based analysis": "Zamana dayalı analiz",
  "Calculated fields": "Hesaplanan alanlar",
  "Extraction & enrichment": "Veri çıkarımı ve zenginleştirme",
  "Essential Vim keys for editing, movement, search, saving and working with multiple files.": "Düzenleme, gezinme, arama, kaydetme ve birden fazla dosyayla çalışma için temel Vim tuşları.",
  "Keys apply in Normal mode unless stated. : starts a command; / between keys separates alternatives.": "Aksi belirtilmedikçe tuşlar Normal modda kullanılır. : bir komut başlatır; tuşlar arasındaki / alternatifleri ayırır.",
  "In examples, → separates successive keystrokes; do not type the arrows.": "Örneklerde → ardışık tuş basımlarını ayırır; ok işaretlerini yazmayın.",
  "Modes & inserting": "Modlar ve metin ekleme",
  "Key / command": "Tuş / komut",
  "Saving & quitting": "Kaydetme ve çıkış",
  "Movement": "Gezinme",
  "Editing & undo": "Düzenleme ve geri alma",
  "Search & replace": "Arama ve değiştirme",
  "Files, windows & help": "Dosyalar, pencereler ve yardım",
  "Display filters and capture expressions for everyday packet analysis.": "Günlük paket analizi için görüntüleme filtreleri ve yakalama ifadeleri.",
  "Hosts & ports": "Host’lar ve portlar",
  "Filter / expression": "Filtre / ifade",
  "Common protocols": "Yaygın protokoller",
  "Filter operators": "Filtre operatörleri",
  "HTTP fields require decoded HTTP traffic; encrypted HTTPS needs decryption.": "HTTP alanları, çözümlenmiş HTTP trafiği gerektirir; şifreli HTTPS trafiğinin şifresi çözülmelidir.",
  "TCP analysis": "TCP analizi",
  "Capture filters": "Yakalama filtreleri",
  "Set these before capture; the filter tables above use display syntax.": "Bu filtreleri yakalamadan önce ayarlayın; yukarıdaki tablolarda görüntüleme filtresi sözdizimi kullanılır.",
  "Common actions": "Sık kullanılan işlemler",
  "Action / menu": "İşlem / menü",
  "I'm an Electrical Engineering graduate building my career in cybersecurity, with a focus on SOC operations, threat intelligence and network security.": "Elektrik Mühendisliği mezunu olup kariyerimi güvenlik operasyonları, tehdit istihbaratı ve ağ güvenliğine odaklanarak siber güvenlik alanında geliştiriyorum.",
  "With an engineering background and hands-on experience in Splunk and IBM QRadar, I focus on analyzing security logs, investigating alerts, and understanding attacker behavior. I share my work through security research, practical tools, and investigation write-ups.": "Mühendislik altyapım ve Splunk ile IBM QRadar üzerinde edindiğim uygulamalı deneyimle güvenlik loglarını analiz etmeye, alarmları incelemeye ve saldırgan davranışlarını anlamaya odaklanıyorum. Yaptığım güvenlik araştırmalarını, geliştirdiğim araçları ve teknik inceleme yazılarımı burada paylaşıyorum.",
  "A CLI tool combining eight intelligence sources, plus optional OpenPhish support, with domain context and URL heuristics. Delivers a unified report with a risk score, verdict and coverage summary.": "Sekiz tehdit istihbaratı kaynağını ve isteğe bağlı OpenPhish desteğini, alan adı bilgileri ve URL heuristics ile birleştiren bir komut satırı aracı. Risk puanını, değerlendirme sonucunu ve sorgulanan kaynakların kapsamını tek bir raporda sunar.",
  "A lightweight, offline CLI tool that analyzes .eml files using machine learning and technical email inspection. Combines text classification with header, link and domain analysis.": ".eml dosyalarını makine öğrenmesi ve teknik e-posta incelemesiyle analiz eden, hafif ve çevrimdışı çalışan bir komut satırı aracı. Metin sınıflandırmasını e-posta başlıkları, bağlantılar ve alan adı analiziyle birleştirir.",
  "The checker brings existing threat records, domain and IP context, and URL structure into a single report. It does not directly visit the submitted website or submit a new scan.": "Araç; mevcut tehdit kayıtlarını, alan adı ve IP bilgilerini, URL yapısıyla birlikte değerlendirir. Girilen web sitesini doğrudan ziyaret etmez ve yeni bir tarama başlatmaz.",
  "Normalize the URL and handle defanged input before extracting its domain and structural indicators.": "URL normalleştirilir, defanged biçimdeyse Refang işlemi uygulanır. Ardından alan adı ve URL’nin yapısal özellikleri belirlenir.",
  "Combine existing intelligence records with DNS, RDAP, domain age, ASN and geolocation context, then inspect impersonation and URL heuristics.": "İstihbarat kaynaklarından gelen kayıtlar; DNS, RDAP, alan adı yaşı, ASN ve coğrafi konum bilgileriyle bir araya getirilir. Marka taklidi belirtileri ve URL heuristics de değerlendirmeye katılır.",
  "Finish with a 0–100 risk score, verdict and coverage summary. Missing keys or failed requests are shown as unavailable, not reported as clean.": "Bulgular, 0–100 arasında bir risk puanı ve değerlendirme sonucuyla sunulur. Hangi kaynaklardan yanıt alındığı ayrıca gösterilir. API anahtarı eksikse veya bir sorgu başarısız olmuşsa, bu durum temiz sonuç olarak kabul edilmez.",
  "Eight intelligence integrations are available, with optional support for a user-provided OpenPhish list. Domain and IP context is included separately.": "Araç sekiz istihbarat kaynağını destekler. Bunlara ek olarak, kullanıcının sağladığı bir OpenPhish listesi de kullanılabilir. Alan adı ve IP bilgileri ayrı olarak toplanır.",
  "Single-URL analysis and TXT/CSV batch input.": "Tek bir URL’yi veya TXT/CSV dosyasındaki URL’leri toplu olarak analiz etme.",
  "Typosquatting, brand impersonation and Unicode/Punycode heuristics.": "Typosquatting, marka taklidi ve Unicode/Punycode heuristics.",
  "JSON or Markdown reports, selectable providers and automation-friendly exit codes.": "JSON ve Markdown raporları, kullanılacak kaynakların seçimi ve otomasyona uygun çıkış kodları.",
  "Python 3.10+ with no external Python packages required.": "Harici Python paketi gerektirmeden Python 3.10 ve üzeri sürümlerle çalışma.",
  "Configure the API keys you have in your local .env file. Providers without required credentials are marked as skipped or unavailable.": "Kullanacağınız servislerin API anahtarlarını yerel .env dosyasına ekleyin. Gerekli API anahtarı bulunmayan kaynaklar atlanır veya kullanılamıyor olarak gösterilir.",
  "These screenshots come from the repository’s EICAR example. EICAR is a harmless anti-malware test file; the displayed verdict reflects the intelligence records at the time of that example.": "Ekran görüntüleri, repodaki EICAR örneğinden alınmıştır. EICAR, antivirüs yazılımlarını test etmek için kullanılan zararsız bir dosyadır. Görsellerdeki değerlendirme, örneğin çalıştırıldığı tarihte kaynaklardan alınan sonuçlara dayanır.",
  "Source results and their availability.": "Kaynaklardan alınan sonuçlar ve sorguların durumu.",
  "Context, findings and the final assessment.": "Alan adı ve IP bilgileri, bulgular ve son değerlendirme.",
  "The risk score is not a probability, and a missing match does not prove safety. Review the findings and coverage together. Third-party lookups may receive the submitted URL; report redaction affects displayed and saved output rather than provider requests.": "Risk puanı, URL’nin zararlı olma olasılığını gösteren bir yüzde değildir. Kaynaklarda eşleşme bulunmaması da URL’nin güvenli olduğu anlamına gelmez. Bu yüzden puanı, bulgular ve yanıt alınabilen kaynaklarla birlikte değerlendirmek gerekir.\n\nSorgulama sırasında URL, üçüncü taraf sağlayıcılara gönderilebilir. Rapordaki hassas bilgileri gizleme özelliği yalnızca ekranda gösterilen ve kaydedilen çıktıyı etkiler; sağlayıcılara gönderilen sorguları değiştirmez.",
  "The tool brings text classification and technical message inspection into one local workflow. It reads a saved email rather than requiring access to an inbox, so the message can be examined without sending its contents to a remote service.": "Araç, metin sınıflandırmasını ve e-postanın teknik incelemesini tek bir iş akışında birleştirir. Gelen kutusuna erişmek yerine kaydedilmiş bir e-posta dosyasını okur. Böylece mesajın içeriği uzak bir servise gönderilmeden incelenebilir.",
  "Parse the .eml structure, headers, and plain-text or HTML content.": ".eml dosyasının yapısı, e-posta başlıkları ve düz metin veya HTML içeriği ayrıştırılır.",
  "Combine word-level and character-level TF-IDF features with logistic regression to estimate phishing likelihood.": "Kelime ve karakter düzeyindeki TF-IDF özellikleri, lojistik regresyon modeliyle değerlendirilerek e-postanın phishing olma olasılığı tahmin edilir.",
  "Inspect sender and Reply-To domains, linked domains, HTML link targets and other message warnings alongside the model prediction.": "Gönderen ve Reply-To alan adları, bağlantılarda kullanılan alan adları, HTML bağlantılarının gerçek hedefleri ve diğer uyarılar modelin tahminiyle birlikte incelenir.",
  "Offline analysis of native .eml files.": ".eml dosyalarını çevrimdışı analiz etme.",
  "A lightweight inference package using Python’s standard library; no ML framework installation is needed.": "Python’ın standart kütüphanesini kullanan hafif bir tahmin paketi; ayrıca bir makine öğrenmesi framework’ü kurulması gerekmez.",
  "A terminal summary and structured JSON output.": "Terminalde sonuç özeti ve yapılandırılmış JSON çıktısı.",
  "Separate model predictions, technical findings and warnings for review.": "Model tahminlerinin, teknik bulguların ve uyarıların ayrı ayrı sunulması.",
  "With Python 3 installed, run these commands from the directory containing app.py and model.json.gz.": "Python 3 kurulu bir sistemde, app.py ve model.json.gz dosyalarının bulunduğu dizinde aşağıdaki komutları çalıştırın.",
  "The final assessment may be PHISHING, LEGITIMATE, REVIEW or UNCERTAIN. The classification threshold is 0.50, but the model estimate is an investigation signal rather than proof.": "Nihai değerlendirme PHISHING, LEGITIMATE, REVIEW veya UNCERTAIN olabilir. Sınıflandırma eşiği 0,50 olarak belirlenmiştir. Ancak modelin tahmini tek başına kanıt değildir; incelemeyi destekleyen bir bulgu olarak değerlendirilmelidir.",
  "Attachment contents, images and QR codes are not analyzed. The tool does not visit linked sites, perform live URL reputation checks or independently validate SPF, DKIM and DMARC through DNS.": "Ek dosyaların içeriği, görseller ve QR kodları analiz edilmez. Araç, e-postadaki bağlantıları ziyaret etmez, canlı URL itibar sorgusu yapmaz ve SPF, DKIM veya DMARC kayıtlarını DNS üzerinden bağımsız olarak doğrulamaz.",
  "Pipelines pass objects. Pipeline commands follow <command> |; Windows-only cmdlets require Windows.": "Pipeline’lar nesneleri aktarır. Pipeline komutları <command> | ifadesinden sonra gelir; Windows’a özel cmdlet’ler Windows gerektirir.",
  "Skip to content": "İçeriğe geç",
  "Main navigation": "Ana gezinme",
  "Footer navigation": "Alt gezinme",
  "Topics": "Konular",
  "Project": "Proje",
  "Previous": "Önceki",
  "Next": "Sonraki",
  "This section could not load.": "Bu bölüm yüklenemedi.",
  "Try again": "Tekrar dene",
  "Examples": "Örnekler",
  "← Research": "← Araştırmalar",
  "← All write-ups": "← Tüm write-up’lar",
  "Download Report (PDF)": "Raporu İndir (PDF)",
  "View LinkedIn Post": "LinkedIn Gönderisini Görüntüle",
  "Published Report": "Yayımlanan Rapor",
  "Sources": "Kaynaklar",
  "IN THIS REPORT": "BU RAPORDA",
  "IN THIS WRITE-UP": "BU WRITE-UP’TA",
  "Article contents": "Yazı içeriği",
  "Table of contents": "İçindekiler",
  "Analysis workflow": "Analiz akışı",
  "Codex topics": "Codex konuları",
  "Vulnerability Analysis": "Zafiyet Analizi",
  "Previous research page": "Önceki araştırma sayfası",
  "Next research page": "Sonraki araştırma sayfası",
  "Research page 1": "Araştırmalar: sayfa 1",
  "Research page 2": "Araştırmalar: sayfa 2",
  "Sacit Çınar — About": "Sacit Çınar — Hakkımda"
};
  const originals = new WeakMap();
  const attributes = new WeakMap();
  const publishers = new WeakMap();
  const key = 'portfolio.language';
  let language = 'en';
  try { language = localStorage.getItem(key) === 'tr' ? 'tr' : 'en'; } catch {}
  const normalize = text => text.replace(/\s+/g, ' ').trim();
  const months = {Jan:'Oca',Feb:'Şub',Mar:'Mar',Apr:'Nis',May:'May',Jun:'Haz',Jul:'Tem',Aug:'Ağu',Sep:'Eyl',Oct:'Eki',Nov:'Kas',Dec:'Ara',January:'Ocak',February:'Şubat',March:'Mart',April:'Nisan',June:'Haziran',July:'Temmuz',August:'Ağustos',September:'Eylül',October:'Ekim',November:'Kasım',December:'Aralık'};
  function translate(text, date = false) {
    const normalized = normalize(text);
    let translated = translations[normalized];
    if (!translated && /\s[→↗↓]$/.test(normalized)) {
      const main = normalized.slice(0, -2);
      if (translations[main]) translated = translations[main] + normalized.slice(-2);
    }
    if (!translated && date) {
      translated = normalized.replace(/Published on LinkedIn:/g, 'LinkedIn’de yayımlanma:')
        .replace(/Research published:/g, 'Araştırmanın yayımlanma tarihi:').replace(/Vendor disclosure:/g, 'Üretici duyurusu:').replace(/Published/g, 'Yayımlanma').replace(/Advisory/g, 'Güvenlik duyurusu')
        .replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, month => months[month]);
    }
    if (!translated) return text;
    return (text.match(/^\s*/)?.[0] || '') + translated + (text.match(/\s*$/)?.[0] || '');
  }
  function localizeCounts() {
    document.querySelectorAll('[data-research-count], [data-writeup-count]').forEach(label => {
      const selector = label.hasAttribute('data-research-count') ? '.research-card' : '.writeup-card:not([hidden])';
      const count = document.querySelectorAll('main ' + selector).length;
      label.textContent = `${count} ${language === 'tr' ? 'sonuç' : count === 1 ? 'result' : 'results'}`;
    });
    const range = document.querySelector('[data-research-range]');
    if (range) {
      const count = document.querySelectorAll('main .research-card').length;
      const page = Number(document.querySelector('main').dataset.researchPage) || 1;
      const start = count ? (page - 1) * 10 + 1 : 0;
      const end = Math.min(page * 10, count);
      range.textContent = language === 'tr' ? `${count} sonuçtan ${start}–${end}` : `${start}–${end} of ${count}`;
    }
  }
  function apply() {
    document.documentElement.lang = language;
    // Keep the publisher's link and reading order natural in both languages.
    document.querySelectorAll('.research-publisher, .research-byline').forEach(publisher => {
      if (!publishers.has(publisher)) publishers.set(publisher, publisher.innerHTML);
      publisher.innerHTML = publishers.get(publisher);
      if (language === 'tr') {
        const link = publisher.querySelector('a');
        if (link && /Published through/.test(publishers.get(publisher))) {
          const prefix = publisher.classList.contains('research-byline') ? 'Mehmet Sacit Çınar · ' : '';
          publisher.replaceChildren(document.createTextNode(prefix), link, document.createTextNode(' üzerinden yayımlanmıştır.'));
        }
      }
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, pre, code, textarea, td, .cs-example-description, .language-toggle, .research-publisher, .research-byline:has(a), [data-research-count], [data-research-range], [data-writeup-count], .research-card .project-description, .research-card .project-tags, .writeup-card .project-description, .writeup-card .project-tags')) continue;
      const articleBody = parent.closest('.research-copy');
      if (articleBody && !parent.closest('#publication, #sources')) continue;
      const tocLink = parent.closest('.article-toc a');
      if (tocLink && !['#publication', '#sources'].includes(tocLink.getAttribute('href'))) continue;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const date = !!parent.closest('.research-date, time, .research-dates, .report-dates, .research-edition');
      node.nodeValue = language === 'tr' ? translate(original, date) : original;
    }
    document.querySelectorAll('[aria-label], [title], [placeholder]').forEach(element => {
      if (element.closest('.language-toggle, pre, code, td')) return;
      if (!attributes.has(element)) attributes.set(element, {});
      const saved = attributes.get(element);
      ['aria-label', 'title', 'placeholder'].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, language === 'tr' ? translate(saved[attribute]) : saved[attribute]);
      });
    });
    localizeCounts();
    const titles = {Research:'Araştırmalar',Projects:'Projeler',Contact:'İletişim',Writeups:'Write-ups'};
    const reverse = Object.fromEntries(Object.entries(titles).map(([en,tr]) => [tr,en]));
    const english = reverse[document.title] || document.title;
    document.title = language === 'tr' ? titles[english] || english : english;
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
      toggle.setAttribute('aria-checked', String(language === 'tr'));
      toggle.setAttribute('aria-label', language === 'tr' ? 'Switch language to English' : 'Dili Türkçe yap');
      toggle.querySelectorAll('[data-language]').forEach(option => option.classList.toggle('selected', option.dataset.language === language));
    }
  }
  const header = document.querySelector('.header-inner');
  if (header) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'language-toggle';
    toggle.setAttribute('role', 'switch');
    toggle.innerHTML = '<span data-language="en">EN</span><span data-language="tr">TR</span>';
    toggle.addEventListener('click', () => {
      language = language === 'en' ? 'tr' : 'en';
      try { localStorage.setItem(key, language); } catch {}
      apply();
      document.dispatchEvent(new Event('portfolio:languagechange'));
    });
    header.append(toggle);
  }
  window.PortfolioI18n = { apply };
  apply();
})();
