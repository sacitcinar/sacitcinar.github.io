(() => {
  'use strict';
  const translations = {
  "A lightweight command-line tool for investigating suspicious emails saved as .eml files. The analysis runs entirely offline, so the message stays on your computer.": ".eml olarak kaydedilmiş şüpheli e-postaları incelemek için geliştirdiğim hafif bir komut satırı aracı. Araç tüm analizi bilgisayarınızda çevrimdışı yapar.",
  "Read the subject, headers and body from the .eml file.": ".eml dosyasından konu satırını, başlıkları ve mesaj gövdesini okur.",
  "Prepare the text using the same steps as during training.": "Metni eğitimdeki adımlarla hazırlar.",
  "Score the message with word- and character-level TF-IDF features and logistic regression.": "Kelime ve karakter düzeyindeki TF-IDF özelliklerini kullanıp lojistik regresyonla mesaja puan verir.",
  "Check the sender and Reply-To domains and inspect links in the email.": "Gönderen adresiyle Reply-To adresinin alan adlarını karşılaştırır, e-postadaki bağlantıları inceler.",
  "Report the model prediction, technical findings and final assessment separately.": "Model tahminini, teknik bulguları ve son değerlendirmeyi ayrı ayrı raporlar.",
  "How it works": "Nasıl çalışır?",
  "Open a terminal in the folder containing app.py and model.json.gz. Run the first command for a terminal summary or the second for JSON output.": "app.py ve model.json.gz dosyalarının bulunduğu klasörde terminali açın. İlk komut terminalde bir özet gösterir. İkinci komut JSON çıktısı verir.",
  "On Windows, use python if that’s how Python is installed.": "Windows’ta python3 yerine python kullanmanız gerekebilir.",
  "Jose Nazario Phishing Corpus for phishing emails.": "Jose Nazario Phishing Corpus koleksiyonundan kimlik avı e-postaları.",
  "Apache SpamAssassin Public Corpus for legitimate emails, including the easy_ham collection.": "Apache SpamAssassin Public Corpus arşivinden, easy_ham koleksiyonu da dahil olmak üzere normal e-postalar.",
  "CEAS for additional labelled email samples used during development.": "Geliştirme sırasında CEAS koleksiyonundan etiketli e-postalar da kullandım.",
  "Email datasets": "Kullanılan e-posta veri setleri",
  "The model classifies messages scoring 0.50 or higher as PHISHING. A strong technical finding can trigger REVIEW while the model score stays the same. When the available text or evidence is too limited, the final assessment can be UNCERTAIN.": "Model, puanı 0,50 veya üzeri olan mesajları PHISHING olarak sınıflandırır. Güçlü bir teknik bulgu, model puanını değiştirmeden son değerlendirmeyi REVIEW olarak işaretleyebilir. Karar vermeye yetecek metin veya bulgu yoksa araç UNCERTAIN sonucu verebilir.",
  "Attachment contents, images, QR codes, live URL reputation lookups and independent SPF, DKIM or DMARC verification are outside the scope of the analysis.": "Eklerin içeriği, görseller, QR kodları, canlı URL itibar sorguları ve bağımsız SPF, DKIM veya DMARC doğrulaması analiz kapsamı dışında.",
  "A command-line tool for checking suspicious URLs. It looks up existing threat records, gathers domain and IP information, and checks the address for signs of impersonation. The tool performs lookups without opening the target site or submitting a new scan.": "Şüpheli URL’leri incelemek için geliştirdiğim bir komut satırı aracı. Mevcut tehdit kayıtlarını sorgular, alan adı ve IP bilgilerini toplar, adreste taklit belirtisi arar. Hedef siteyi açmadan ve yeni bir tarama başlatmadan çalışır.",
  "Normalize the URL, including defanged input such as hxxps[:]//example[.]com.": "hxxps[:]//example[.]com gibi defanged adresleri standart URL biçimine döndürür.",
  "Look up existing reputation records and gather DNS, RDAP and IP information.": "Mevcut itibar kayıtlarını sorgular ve DNS, RDAP ve IP bilgilerini toplar.",
  "Check the URL for lookalike domains, brand impersonation and other suspicious patterns.": "Bilinen alan adlarına benzeyen yazımları, marka taklitlerini ve şüpheli URL yapılarını arar.",
  "Report a risk score from 0 to 100, a verdict and the coverage of the reputation checks.": "0-100 arasında bir risk puanı verir. Raporda değerlendirmeyi ve hangi itibar sorgularından sonuç alındığını da gösterir.",
  "Run the commands from the project folder with Python 3.10 or newer. Add any provider API keys you have to a local .env file. Sources that require a missing key are marked as skipped or unavailable.": "Komutları proje klasöründe Python 3.10 veya üzeriyle çalıştırın. Elinizdeki API anahtarlarını yerel .env dosyasına ekleyin. Anahtar gerektiren bir kaynak için anahtar yoksa rapor, sorgunun atlandığını veya kaynağa erişilemediğini gösterir.",
  "For batch checks, use a TXT file with one URL per line or a CSV with a url column. Use --offline to check an address against local feeds and URL rules without making network requests.": "Birden çok adresi sorgulamak için her satırda bir URL bulunan TXT dosyası veya url sütunu olan bir CSV kullanın. --offline seçeneği ağ sorgusu yapmadan yerel listelerle ve URL kurallarıyla çalışır.",
  "URL reputation": "URL itibarı",
  "Domain and IP": "Alan adı ve IP",
  "Optional feed": "İsteğe bağlı kaynak",
  "Local list": "Yerel liste",
  "The risk score reflects the evidence the tool found. Coverage shows how many reputation sources supplied usable results. A low score with limited coverage calls for further checking. UNKNOWN means there wasn’t enough evidence for a verdict of LIKELY SAFE.": "Risk puanı bulunan kanıtlara dayanır. Kapsam, kaç itibar kaynağından kullanılabilir sonuç geldiğini gösterir. Kaynak kapsamı düşükse risk puanı düşük çıkan bir adresi de ayrıca incelemek gerekebilir. UNKNOWN, adresi LIKELY SAFE olarak değerlendirmek için yeterli kanıt bulunmadığı anlamına gelir.",
  "A command-line tool for investigating recorded network traffic offline. It looks for behavior such as TCP scans and recurring connections, then produces an interactive HTML report and structured JSON. Packet references let you trace findings back to the original capture.": "PCAP dosyalarındaki ağ trafiğini çevrimdışı incelemek için geliştirdiğim bir komut satırı aracı. Bulguları etkileşimli bir HTML raporuna ve JSON dosyasına yazar. Rapordaki paket referansları, her bulgunun hangi paketlere dayandığını gösterir.",
  "Decode the packets, group related traffic into flows and pair DNS queries with their replies.": "Paketleri ayrıştırıp ağ akışlarını çıkarır. DNS sorgularını yanıtlarıyla eşleştirir.",
  "Look for TCP sweeps across hosts or ports, recurring connections, long-lived flows and clusters of NXDOMAIN replies.": "Birden çok makineyi veya portu hedefleyen TCP taramalarını, düzenli aralıklarla tekrarlanan TCP bağlantılarını ve uzun süreli TCP akışlarını arar. NXDOMAIN yanıtlarının yoğunlaştığı durumları da belirler.",
  "Report each finding with its endpoints, time window and supporting evidence. Use the packet references to check it against the capture.": "Her bulgunun kaynağını, hedefini ve gözlemlendiği zaman aralığını rapora yazar.",
  "Clone and install the tool with Git and Python 3.10 or newer.": "Git ve Python 3.10 veya üzeri kuruluysa aşağıdaki komutlarla repoyu klonlayıp aracı çalıştırabilirsiniz.",
  "The command writes JSON and HTML reports by default. Open the HTML file in a browser to explore it offline. To choose a different output name, run python -m pcapcore capture.pcap -o analysis.json.": "Komut varsayılan olarak JSON ve HTML raporları oluşturur. HTML raporunu tarayıcıda çevrimdışı açabilirsiniz. Çıktıya farklı bir ad vermek için python -m pcapcore capture.pcap -o analysis.json komutunu kullanın.",
  "Start with the overview to see which hosts and services appear in the capture. Then open Findings to inspect a specific behavior and follow its evidence back to the packets. For example, a periodic connection might come from a scheduled job. Its timing gives you a lead to investigate.": "Özet bölümünden trafik kaydındaki makinelere ve servislere bakın. Ardından Findings bölümünde bir bulguyu açıp dayandığı paketleri inceleyin. Düzenli aralıklarla tekrarlanan bir bağlantı, zamanlanmış bir işten kaynaklanabilir. Bunu kontrol etmek için bağlantı saatlerini işin çalışma saatleriyle karşılaştırın.",
  "Convert PCAPNG files to classic PCAP before running the tool. The current version covers selected network behaviors and leaves HTTP requests, TLS handshakes and DNS over TCP outside its analysis. It also lacks general TCP stream and IP fragment reassembly. Flows and DNS events stay in memory, so large captures can require more RAM.": "PCAPNG dosyalarını analizden önce klasik PCAP biçimine dönüştürün. Mevcut sürüm HTTP isteklerini, TLS el sıkışmalarını ve TCP üzerinden DNS trafiğini incelemiyor. TCP akışlarını veya IP parçalarını yeniden birleştirme desteği de yok. Araç, akışları ve DNS olaylarını bellekte tuttuğu için büyük trafik kayıtları daha fazla RAM gerektirebilir.",
  "PCAP Behavior Core analyzes recorded network traffic offline. Its HTML and JSON reports show what happened in the capture and which packets support each finding.": "PCAP Behavior Core, kaydedilmiş ağ trafiğini çevrimdışı inceler. HTML ve JSON raporlarında trafik kaydında neler olduğunu ve her bulguyu hangi paketlerin desteklediğini gösterir.",
  "How the capture becomes a report": "Trafik kaydından rapora",
  "The tool decodes packets, groups them into flows and matches DNS queries with their replies. It then checks connection timing, destination ports and hosts, and outbound traffic volumes. Findings include the endpoints, time window and packet references needed to check them against the capture.": "Araç paketleri ayrıştırıp akışlara ayırır ve DNS sorgularını yanıtlarıyla eşleştirir. Bağlantı aralıklarını, hedef port ve makineleri, ayrıca dışarı giden trafik hacmini inceler. Her bulgu, trafik kaydından kontrol edilebilmesi için kaynak ve hedef bilgilerini, zaman aralığını ve paket referanslarını içerir.",
  "TCP scans across destination ports or hosts, periodic connections and long-lived flows.": "Hedef port veya makine taramaları, periyodik TCP bağlantıları ve uzun süreli akışlar.",
  "DNS query and response pairs, including clusters of NXDOMAIN replies.": "DNS sorgu ve yanıt çiftleri, yoğun NXDOMAIN yanıtları.",
  "FTP control commands and server replies. The report omits credentials and file paths.": "FTP kontrol komutları ve sunucu yanıtları. Raporda kimlik bilgilerine ve dosya yollarına yer verilmez.",
  "Install with Git and Python 3.10 or newer. The tool uses Python’s standard library at runtime.": "Kurulum için Git ve Python 3.10 veya üzeri gerekir. Araç çalışırken Python’un standart kütüphanesini kullanır.",
  "The CLI writes a JSON file and an interactive HTML report you can open offline.": "Komut satırı aracı bir JSON dosyası ve çevrimdışı açılabilen etkileşimli bir HTML raporu oluşturur.",
  "Inside the report": "Raporun içinden",
  "Capture overview and observed network activity.": "Trafik kaydının özeti ve gözlemlenen ağ etkinliği.",
  "Findings table with endpoints, time windows and links to supporting evidence.": "Kaynak ve hedef bilgilerini, zaman aralıklarını ve kanıt bağlantılarını gösteren bulgu tablosu.",
  "Limits of the analysis": "Analizin sınırları",
  "Treat the findings as observations. Scheduled jobs can produce regular connections, and an incomplete or encrypted capture can hide useful context. Check the packet references before drawing a conclusion.": "Bulgular trafik kaydındaki gözlemleri gösterir. Zamanlanmış işler düzenli bağlantılar kurabilir. Eksik kayıtlarda veya şifreli trafikte önemli ayrıntılar görünmeyebilir. Sonuca varmadan önce paket referanslarını kontrol edin.",
  "Convert PCAPNG files to PCAP before analysis.": "PCAPNG dosyalarını analizden önce PCAP biçimine dönüştürün.",
  "HTTP requests, TLS handshakes and DNS over TCP are outside the current protocol coverage.": "Mevcut sürüm HTTP isteklerini, TLS el sıkışmalarını ve TCP üzerinden DNS trafiğini incelemiyor.",
  "The tool does not reassemble general TCP streams or IP fragments.": "Araç genel TCP akışlarını ve IP parçalarını yeniden birleştirmiyor.",
  "The SQLite index stores packet references. Flows and DNS events remain in memory, so large captures can require more RAM.": "SQLite dizini paket referanslarını saklar. Akışlar ve DNS olayları bellekte kaldığı için büyük trafik kayıtları daha fazla RAM gerektirebilir.",
  "Check a suspicious URL from the command line. The tool pulls existing threat records, looks up the domain and checks the address for signs of impersonation.": "Şüpheli bir URL’yi komut satırından inceleyin. Araç mevcut tehdit kayıtlarını toplar, alan adı bilgilerini sorgular ve adreste taklit belirtisi arar.",
  "What the checker looks at": "Araç neyi inceler?",
  "The checker restores defanged addresses and normalizes them before looking up existing records. DNS, RDAP, domain age, ASN and geolocation add context. Checks on the URL itself look for typosquatting, brand impersonation and Unicode or Punycode patterns.": "Araç defanged URL’leri normal biçimine getirip mevcut kayıtları sorgular. DNS ve RDAP bilgilerine, alan adının yaşına, ASN’ye ve IP konumuna bakar. URL’nin kendisinde ise benzer yazımla alan adı taklidi, marka taklidi ve Unicode ya da Punycode örüntüleri arar.",
  "It queries existing records and domain information without opening the target site or submitting a new scan.": "Hedef siteyi açmadan ve yeni tarama başlatmadan mevcut kayıtları ve alan adı bilgilerini sorgular.",
  "Eight sources are built in. You can also supply an OpenPhish list. The report marks sources that were skipped or unavailable so you can see which checks contributed to the assessment.": "Araç sekiz kaynakla çalışır. İsterseniz bir OpenPhish listesi de ekleyebilirsiniz. Rapor, atlanan veya yanıt alınamayan kaynakları işaretler. Böylece değerlendirmeye hangi sorguların girdiğini görebilirsiniz.",
  "The CLI runs on Python 3.10 or newer with no extra packages. Put your API keys in a local .env file. Pass one URL, a TXT list or a CSV with a url column. You can select providers, save a JSON or Markdown report and use risk-based exit codes in scripts.": "Komut satırı aracı Python 3.10 veya üzeriyle, ek paket gerektirmeden çalışır. API anahtarlarını yerel .env dosyasına yazın. Tek bir URL, TXT listesi veya url sütunu olan bir CSV verebilirsiniz. Sorgulanacak kaynakları seçebilir, raporu JSON ya da Markdown olarak kaydedebilir ve scriptlerde risk düzeyine göre çıkış kodu kullanabilirsiniz.",
  "Reading the report": "Raporu yorumlama",
  "Read the 0–100 risk score and verdict alongside source coverage. The score combines the available evidence. Coverage shows how much reputation data was available, and a low score with limited coverage calls for a closer look.": "0-100 arasındaki risk puanını ve sonucu kaynak kapsamıyla birlikte okuyun. Puan, toplanan bulgulara dayanır. Kapsam, ne kadar itibar verisine ulaşılabildiğini gösterir. Kapsam darsa düşük puanlı bir URL de ek inceleme gerektirebilir.",
  "Provider responses and lookup status.": "Kaynak yanıtları ve sorgu durumları.",
  "Domain and IP context, followed by the risk score, verdict and coverage.": "Alan adı ve IP bilgileri, ardından risk puanı, sonuç ve kaynak kapsamı.",
  "Provider requests and limits": "Kaynak sorguları ve sınırlar",
  "Online providers may receive the submitted URL. Redaction masks sensitive values in displayed and saved reports. Use offline mode when you want to limit the check to local feeds and URL heuristics.": "Çevrimiçi kaynaklara sorgulanan URL gönderilebilir. Maskeleme, ekranda gösterilen ve dosyaya kaydedilen raporlardaki hassas değerleri gizler. Yalnızca yerel listeleri ve URL kontrollerini kullanmak için çevrimdışı modu seçin.",
  "Phishing Email Detector examines saved .eml files on your computer. It reports a text-model prediction alongside findings from the message headers and links.": "Phishing Email Detector, kaydedilmiş .eml dosyalarını bilgisayarınızda inceler. Modelin mesaj metnine verdiği tahmini, e-posta başlıklarından ve bağlantılardan çıkan bulgularla birlikte gösterir.",
  "What the tool checks": "Araç neyi kontrol eder?",
  "The tool reads the subject and message body from the saved email. Logistic regression scores the text using word- and character-level TF-IDF features. The packaged model runs with Python’s standard library, so the analysis can stay offline.": "Araç, kaydedilen e-postadan konu satırını ve mesaj gövdesini okur. Lojistik regresyon, kelime ve karakter düzeyindeki TF-IDF özelliklerinden yararlanarak metne bir puan verir. Paketlenen model Python’un standart kütüphanesiyle çalıştığı için analiz çevrimdışı yapılabilir.",
  "Separate checks compare sender and Reply-To domains and inspect where HTML links actually point. Strong technical findings can trigger REVIEW even when the text model predicts LEGITIMATE. The model score stays visible so you can see how the two checks contributed.": "Araç ayrıca gönderen ve Reply-To alanlarındaki alan adlarını karşılaştırır, HTML bağlantılarının gerçek hedeflerine bakar. Model LEGITIMATE tahmini verse bile güçlü bir teknik bulgu sonucu REVIEW olarak değiştirebilir. Model puanı raporda ayrı görünür.",
  "The packaged model was trained on 27,761 emails. I reran the CLI on a saved list of 200 labelled messages with the classification threshold set to 0.50.": "Paketlenen modeli 27.761 e-postayla eğittim. Sınıflandırma eşiği 0,50 iken komut satırı aracını daha önce kaydettiğimiz 200 etiketli e-postayla yeniden çalıştırdım.",
  "Of 100 phishing emails from Nazario 2025, the final assessment marked 95 PHISHING, 2 REVIEW and 3 LEGITIMATE.": "Nazario 2025 setindeki 100 kimlik avı e-postasının 95’i PHISHING, 2’si REVIEW ve 3’ü LEGITIMATE sonucu aldı.",
  "All 100 legitimate emails from SpamAssassin easy_ham received LEGITIMATE.": "SpamAssassin easy_ham setindeki 100 normal e-postanın tamamı LEGITIMATE sonucu aldı.",
  "The results on the project card are specific to this test set, which includes historical legitimate mail.": "Proje kartındaki sonuçlar, eski tarihli normal e-postalar da içeren bu test setine ait.",
  "Use Python 3 and run the command from the folder containing app.py and model.json.gz. The default output is a terminal summary. Use the JSON option to pass the prediction and technical findings to another tool.": "Python 3 ile komutu app.py ve model.json.gz dosyalarının bulunduğu klasörde çalıştırın. Araç varsayılan olarak terminalde bir özet gösterir. Tahmini ve teknik bulguları başka bir araçta işlemek için JSON seçeneğini kullanın.",
  "How to read the assessment": "Son değerlendirmeyi okuma",
  "PHISHING and LEGITIMATE indicate the tool’s assessment based on the available evidence.": "PHISHING ve LEGITIMATE, aracın elindeki verilere göre verdiği değerlendirmelerdir.",
  "REVIEW means a technical finding needs a closer look. UNCERTAIN means the available evidence was too limited.": "REVIEW, bir teknik bulgunun daha yakından incelenmesi gerektiğini gösterir. UNCERTAIN ise eldeki bilginin karar vermeye yetmediğini belirtir.",
  "The analysis covers message text, headers and links. It leaves attachment contents, images, QR codes, live URL reputation and independent SPF, DKIM or DMARC validation to other tools.": "Analiz mesaj metnini, e-posta başlıklarını ve bağlantıları kapsar. Eklerin içeriği, görseller, QR kodları, canlı URL itibar sorguları ve bağımsız SPF, DKIM veya DMARC doğrulaması için başka araçlar gerekir.",
  "Network forensics · Behavioral Analysis": "Ağ adli analizi · Davranış analizi",
  "A Python command-line tool for investigating recorded network traffic. It reads a PCAP file and traces each finding back to the capture.": "Kaydedilmiş ağ trafiğini incelemek için yazdığım bir Python komut satırı aracı. PCAP dosyasını okur ve her bulgunun trafik kaydındaki karşılığını gösterir.",
  "Looks for TCP scanning patterns and connections that repeat at regular intervals.": "TCP taramalarını ve düzenli aralıklarla tekrarlanan bağlantıları arar.",
  "Matches DNS queries with their responses and flags clusters of NXDOMAIN replies.": "DNS sorgularını yanıtlarıyla eşleştirip NXDOMAIN yanıtlarının yoğunlaştığı yerleri işaretler.",
  "Writes a JSON report and a standalone HTML report with packet references.": "Paket referanslarını içeren bir JSON raporu ve bağımsız bir HTML raporu oluşturur.",
  "Parse packets": "Paketleri ayrıştır",
  "Build flows": "Akışları oluştur",
  "Detect behavior": "Davranışları belirle",
  "Scans · timing · DNS": "Taramalar · zamanlama · DNS",
  "Report": "Rapor",
  "8 findings": "8 bulgu",
  "Behavior breakdown": "Bulguların dağılımı",
  "TCP multiple-host probe sweep": "Birden çok ana makineye TCP taraması",
  "Periodic TCP connections": "Periyodik TCP bağlantıları",
  "Long-lived TCP flow": "Uzun süreli TCP akışı",
  "TCP destination port sweep": "TCP hedef port taraması",
  "View report screenshot": "Rapor görselini aç",
  "Example output": "Örnek çıktı",
  "Threat intelligence · URL analysis": "Tehdit istihbaratı · URL analizi",
  "A command-line tool for checking a suspicious URL. It collects existing reputation records and checks the address itself for signs of impersonation.": "Şüpheli URL’leri incelemek için yazdığım bir komut satırı aracı. Mevcut itibar kayıtlarını toplar ve adresi taklit belirtileri açısından inceler.",
  "Accepts defanged URLs and can read a batch from a TXT or CSV file.": "Defanged URL’leri kabul eder. TXT veya CSV dosyasından birden fazla adres okuyabilir.",
  "Checks eight intelligence sources and adds DNS, domain age and URL findings.": "Sekiz istihbarat kaynağını sorgulayıp DNS kayıtlarını, alan adı yaşını ve URL bulgularını rapora ekler.",
  "Reports a risk score and verdict, with coverage that shows which checks ran.": "Risk puanı ve değerlendirmeyle birlikte hangi kontrollerin çalıştığını gösterir.",
  "Reputation lookups": "İtibar sorguları",
  "Feeds + APIs": "Veri akışları ve API’ler",
  "Domain & URL checks": "Alan adı ve URL kontrolleri",
  "DNS · RDAP · heuristics": "DNS · RDAP · sezgisel kontroller",
  "Risk report": "Risk raporu",
  "Score · Verdict · Coverage": "Puan · Sonuç · Kapsam",
  "Coverage": "Kapsam",
  "Medium": "Orta",
  "View terminal screenshot": "Terminal görselini aç",
  "Email security · ML": "E-posta güvenliği · ML",
  "A Python command-line tool for investigating suspicious emails. Give it a saved .eml file and it analyzes the message locally.": "Şüpheli e-postaları incelemek için yazdığım bir Python komut satırı aracı. .eml olarak kaydettiğin mesajı kendi bilgisayarında analiz eder.",
  "Uses TF-IDF and logistic regression to estimate whether the message text looks like phishing.": "Mesaj metnindeki kimlik avı belirtilerini TF-IDF ve lojistik regresyonla değerlendirir.",
  "Checks sender and Reply-To domains and flags links whose displayed address differs from their destination.": "Gönderen ve Reply-To alanlarındaki alan adlarını kontrol eder. Görünen adresiyle gerçek hedefi farklı olan bağlantıları işaretler.",
  "Reports the model prediction and technical findings separately in a terminal summary or JSON.": "Model tahminini ve teknik bulguları terminal özetinde veya JSON çıktısında ayrı ayrı gösterir.",
  "Logistic regression": "Lojistik regresyon",
  "Parse email": "E-postayı ayrıştır",
  "Classify text": "Metni sınıflandır",
  "TF-IDF + logistic regression": "TF-IDF ve lojistik regresyon",
  "Inspect message": "Mesajı incele",
  "Headers + links": "Başlıklar ve bağlantılar",
  "Evaluation": "Değerlendirme",
  "Training samples": "Eğitim örneği",
  "27,761": "27.761",
  "Detection rate": "Yakalama oranı",
  "95%": "%95",
  "False alarms*": "Yanlış alarm*",
  "* Measured on 100 legitimate emails from SpamAssassin easy_ham.": "* SpamAssassin easy_ham setindeki 100 normal e-postayla ölçüldü.",
  "Technologies": "Teknolojiler",
  "With Python 3.10+ and Git installed, clone the repository and install the tool:": "Python 3.10+ ve Git kuruluysa repoyu klonlayıp aracı şu komutlarla kurabilirsiniz:",
  "Installation": "Kurulum",
  "Analyze a PCAP": "PCAP analizi",
  "Custom output": "Çıktı konumu",

  "An offline CLI tool that analyzes network behavior in PCAP files. Identifies scanning patterns, periodic connections and DNS activity, with supporting evidence in JSON and interactive HTML reports.": "PCAP dosyalarındaki ağ davranışlarını inceleyen çevrimdışı bir CLI aracı. Tarama örüntülerini, periyodik bağlantıları ve DNS etkinliğini belirleyerek bunları destekleyen bulguları JSON ve etkileşimli HTML raporlarında sunar.",
  "Packet & flow analysis": "Paket ve akış analizi",
  "Behavior findings": "Davranış bulguları",
  "PCAP Behavior Core examines captured network traffic and brings observable behavior into a single report. Analysis runs locally, and the generated HTML report can be explored without a server or internet connection.": "PCAP Behavior Core, kaydedilmiş ağ trafiğini inceleyerek gözlemlenen davranışları tek bir raporda toplar. Analiz yerel ortamda yapılır; oluşturulan HTML raporu bir sunucuya veya internet bağlantısına ihtiyaç duymadan incelenebilir.",
  "Network behavior, backed by packet evidence": "Paket kanıtlarıyla desteklenen ağ davranışı analizi",
  "Read the capture.": "Trafik kaydının okunması",
  "Parse packets and organize network activity into flows.": "Paketleri ayrıştırır ve ağ etkinliğini akışlar halinde düzenler.",
  "Examine the behavior.": "Davranışların incelenmesi",
  "Evaluate TCP scanning patterns, connection timing, DNS activity and traffic characteristics.": "TCP tarama örüntülerini, bağlantı zamanlamalarını, DNS etkinliğini ve trafiğin özelliklerini değerlendirir.",
  "Present the evidence.": "Bulguların sunulması",
  "Report endpoints, connection counts and time windows, with packet references that help trace each finding back to the capture.": "Uç noktaları, bağlantı sayılarını ve zaman aralıklarını raporlar. Paket referansları, her bulgunun trafik kaydındaki karşılığını incelemeyi kolaylaştırır.",
  "From capture to findings": "Trafik kaydından bulgulara",
  "TCP scanning patterns across destination ports and IP addresses.": "Hedef portlara ve IP adreslerine yönelik TCP tarama örüntüleri.",
  "Periodic TCP connections and timing consistency.": "Periyodik TCP bağlantıları ve zamanlama tutarlılığı.",
  "Matched DNS queries and responses, including concentrated NXDOMAIN activity.": "Eşleştirilen DNS sorguları ve yanıtları ile yoğun NXDOMAIN etkinliği.",
  "Long-duration TCP flows and outbound traffic volumes.": "Uzun süreli TCP akışları ve dışarı giden trafik hacimleri.",
  "FTP control commands and server responses, with credentials and file paths excluded from the report.": "Kimlik bilgileri ve dosya yolları rapora dahil edilmeden FTP kontrol komutları ve sunucu yanıtları.",
  "Structured JSON output and a standalone interactive HTML report.": "Yapılandırılmış JSON çıktısı ve bağımsız, etkileşimli HTML raporu.",
  "Python 3.10+ with no external runtime dependencies.": "Ek çalışma zamanı bağımlılığı gerektirmeyen Python 3.10+ uygulaması.",
  "What it includes": "Özellikler",
  "Analyze a capture:": "Bir trafik kaydını analiz etmek için:",
  "Save the reports to a custom location:": "Raporları farklı bir konuma kaydetmek için:",
  "The command produces both JSON and HTML output.": "Komut hem JSON hem de HTML çıktısı oluşturur.",
  "Run it locally": "Yerel ortamda çalıştırma",
  "Overview of the capture and observed network activity.": "Trafik kaydının ve gözlemlenen ağ etkinliğinin genel görünümü.",
  "Behavior findings with supporting evidence and packet references.": "Destekleyici kanıtlar ve paket referanslarıyla birlikte davranış bulguları.",
  "A look at the report": "Rapor görünümü",
  "Findings describe observed behavior rather than confirmed attacks. Legitimate automated activity can produce similar patterns, while incomplete captures and encrypted traffic can limit visibility. Review each finding alongside its evidence and the wider investigation context.": "Bulgular, doğrulanmış saldırıları değil gözlemlenen davranışları gösterir. Meşru otomatik işlemler benzer örüntüler oluşturabilir; eksik trafik kayıtları ve şifreli trafik ise görünürlüğü sınırlandırabilir. Her bulguyu, onu destekleyen kanıtlarla ve incelemenin genel bağlamıyla birlikte değerlendirin.",
  "Reading the result": "Sonucu yorumlama",
  "Protocol coverage:": "Protokol kapsamı:",
  "HTTP request, TLS handshake and DNS-over-TCP analysis need to be added. Important context can currently be missed.": "HTTP istekleri, TLS el sıkışma bilgileri ve DNS-over-TCP analizi eklenmeli. Şu an önemli bağlamlar kaçabiliyor.",
  "Packet reassembly:": "Paket birleştirme:",
  "General TCP stream and IP fragment reassembly are not available. These are needed to interpret content split across multiple packets correctly.": "Genel TCP stream ve IP fragment reassembly yok. Birden fazla pakete bölünen içeriklerin doğru yorumlanması için gerekli.",
  "PCAPNG support:": "PCAPNG desteği:",
  "PCAPNG input is currently explicitly rejected; users must convert the file.": "Şu an açıkça reddediliyor; kullanıcı dosyayı dönüştürmek zorunda kalıyor.",
  "Large files:": "Büyük dosyalar:",
  "Although SQLite is used, all flows and DNS events are kept in memory. RAM usage and processing time should be measured on large captures, and this design should be improved.": "SQLite kullanılsa da bütün flow’lar ve DNS olayları bellekte tutuluyor. Büyük capture’larda RAM ve süre ölçülüp bu yapı iyileştirilmeli.",
  "Current Limitations": "Mevcut Eksikler",
  "network forensics": "ağ adli analizi",
  "traffic analysis": "trafik analizi",
  "behavior analysis": "davranış analizi",

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
  "A collection of projects I’ve built while working on cybersecurity.": "Siber güvenlik üzerine çalışırken geliştirdiğim projeler.",
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
  // Reserve the larger EN/TR footprint before a language switch can move siblings.
  function measureLanguages(element, axis) {
    const width = element.getBoundingClientRect().width;
    if (!width || !element.getClientRects().length) return 0;
    const clone = element.cloneNode(true);
    clone.removeAttribute('id');
    clone.setAttribute('aria-hidden', 'true');
    Object.assign(clone.style, {
      position: 'absolute', visibility: 'hidden', pointerEvents: 'none',
      inset: '0 auto auto 0', margin: '0',
      inlineSize: axis === 'width' ? 'max-content' : `${width}px`,
      maxInlineSize: 'none', minInlineSize: '0', minBlockSize: '0', blockSize: 'auto'
    });
    const sourceWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const cloneWalker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT);
    const pairs = [];
    let originalNode, clonedNode;
    while ((originalNode = sourceWalker.nextNode()) && (clonedNode = cloneWalker.nextNode())) {
      pairs.push([originalNode, clonedNode]);
    }
    element.parentElement.append(clone);
    let maximum = 0;
    for (const locale of ['en', 'tr']) {
      clone.lang = locale;
      for (const [originalNode, clonedNode] of pairs) {
        const original = originals.get(originalNode) ?? originalNode.nodeValue;
        const technical = originalNode.parentElement.closest('pre, code, [aria-hidden="true"]');
        const date = !!originalNode.parentElement.closest('time');
        clonedNode.nodeValue = locale === 'tr' && !technical ? translate(original, date) : original;
      }
      maximum = Math.max(maximum, clone.getBoundingClientRect()[axis]);
    }
    clone.remove();
    return Math.ceil(maximum);
  }
  function stabilizeLayout() {
    const widthTargets = document.querySelectorAll(
      '.site-header nav a[data-section], .footer-nav a[data-section], ' +
      '.resume-button, .intro-name .kicker-label, .contact-latest-layout .section-heading h2'
    );
    for (const element of widthTargets) {
      const width = measureLanguages(element, 'width');
      if (width) {
        element.classList.add('i18n-width-stable');
        element.style.setProperty('--language-width', `${width}px`);
      }
    }
    const heightTargets = document.querySelectorAll(
      '.intro-story > p, .about-role, .intro-location, .social-name, ' +
      '.latest-content-list li:not([hidden]) a'
    );
    for (const element of heightTargets) {
      const height = measureLanguages(element, 'height');
      if (height) {
        element.classList.add('i18n-height-stable');
        element.style.setProperty('--language-height', `${height}px`);
      }
    }
    document.dispatchEvent(new Event('portfolio:layoutchange'));
  }
  let layoutFrame = 0;
  function queueLayout() {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(stabilizeLayout);
  }
  addEventListener('resize', queueLayout);
  document.fonts?.ready.then(queueLayout);
  document.fonts?.addEventListener('loadingdone', queueLayout);
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
    stabilizeLayout();
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
