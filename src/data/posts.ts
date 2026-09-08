export interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime?: string;
  category?: string;
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Kayak ve Morton Nöroma; ayaklarda şiddetli ağrı, yanma ve uyuşma",
    date: "15 Eylül 2026",
    readTime: "4 dk",
    category: "Sağlık & Teknik",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80",
    content: `
      <p style="margin-bottom: 24px;">
        Morton Nöroma, özellikle ayak tarağı ve parmak bölgesini etkileyen; sıkışan sinir liflerinin kalınlaşması sonucu <strong>şiddetli ağrı, yanma, batma ve uyuşma</strong> ile kendini gösteren oldukça rahatsız edici bir durumdur. Kayak gibi ayağın sert, dar ve esnemeyen botlar içerisinde uzun saatler baskı altında kaldığı sporlarda ise bu tablo sıklıkla tetiklenir veya mevcut belirtiler katlanarak artar.
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        Kayak Yaparken Morton Nöroma Neden Tetiklenir?
      </h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Dar dan Sert Kayak Botları:</strong> Kayak botları doğası gereği serttir ve ayağı sıkıca sarar. Ancak özellikle ön ayak (tarak) kısmını aşırı sıkan botlar, metatars kemiklerini birbirine yaklaştırarak aradaki sinir üzerindeki baskıyı artırır.</li>
        <li><strong>Sürekli Ön Ayak Baskısı ve Eğim:</strong> Kayak duruşu gereği vücut ağırlığı sürekli öne, yani ayak tarağına verilir. Bu mekanik baskı, sinirin sürekli irite olmasına yol açar.</li>
        <li><strong>Soğuk Hava:</strong> Soğuk, kan dolaşımını yavaşlatacağı için zaten sıkışmış ve hassaslaşmış sinirde uyuşma ve karıncalanma hissini daha da belirgin hale getirir.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        Belirtileri Nasıl Anlarsınız?
      </h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li>Kayak yaparken 3. ve 4. ayak parmakları arasında (bazen 2. ve 3.) aniden başlayan keskin bir <strong>yanma veya elektrik çarpması hissi</strong>.</li>
        <li>Ayak tabanının ön kısmında sanki <strong>çorabınız katlanmış ya da botun içinde küçük bir taş kalmış</strong> gibi bir his.</li>
        <li>Parmak uçlarına doğru yayılan <strong>hissizlik, uyuşma ve karıncalanma</strong>.</li>
        <li>Botu çıkardığınızda ve ayağınıza masaj yaptığınızda beliren hızlı bir rahatlama.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        Pistte ve Günlük Yaşamda Alınabilecek Önlemler
      </h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Özel Tabanlık (Orthotics) Kullanın:</strong> Ayak kavisini destekleyen ve metatarsal ped içeren özel tabanlıklar, metatars kemiklerinin arasını açarak sinir üzerindeki baskıyı doğrudan azaltır.</li>
        <li><strong>Bot Modifikasyonu (Boot Fitting):</strong> Kayak botlarınızın ön tarak kısmını bir uzmana ısıtılarak genişlettirin (shell punching/stretching). Bot klipslerini özellikle ayak tabanına yakın kısımlarda çok sıkı kapatmamaya dikkat edin.</li>
        <li><strong>Düzenli Molalar Verin:</strong> Ağrı ve uyuşma başladığında ısrarcı olmayın. Bot klipslerini açıp ayağı gevşetmek ve kan dolaşımını tazelemek sinir basısını rahatlatır.</li>
        <li><strong>Buz ve Isı Uygulaması:</strong> Kayak sonrasında iltihaplanmayı ve ödemi azaltmak için ayak tabanına cold-pack (buz) uygulaması yapın.</li>
      </ul>

      <p style="margin-top: 24px; padding: 16px; background-color: #171717; border-left: 4px solid #2563eb; border-radius: 4px;">
        Eğer belirtiler her kayak seansında tekrarlıyor veya günlük ayakkabılara geçtiğinizde de devam ediyorsa, doku kalıcı olarak hasar görmeden önce bir ortopedi uzmanına veya podiatriste görünmek önemlidir. Fizik tedavi, kortizon/enjeksiyon uygulamaları veya özel ortezler ile bu süreci kontrol altına almak mümkündür.
      </p>
    `
  },
  {
    id: 2,
    title: "Kayak montu satın alırken nelere dikkat edilmeli?",
    date: "15 Eylül 2026",
    readTime: "4 dk",
    category: "Ekipman & İpuçları",
    image: "https://cdn.pixabay.com/photo/2016/11/18/15/40/boy-1835416_1280.jpg",
    content: `
      <p style="margin-bottom: 24px;">
        Kayak montu, pistte hem konforu hem de güvenliği belirleyen en kritik ekipmandır. Doğru montu seçmek, soğuk rüzgarlardan ve ıslak kardan korunurken hareket özgürlüğünüzü de maksimumda tutmanızı sağlar.
      </p>

      <p style="margin-bottom: 24px; font-weight: 600; color: #ffffff;">
        Alışveriş yaparken göz önünde bulundurmanız gereken temel detaylar:
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        1. Su Geçirmezlik ve Nefes Alabilirlik Oranları
      </h3>
      <p style="margin-bottom: 12px;">Kayak montlarının performansını üzerindeki iki temel değer belirler:</p>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Su Geçirmezlik (Su Sütunu / mm):</strong> En az 10.000 mm (10k) değerinde bir mont tercih edilmelidir. Yoğun kar veya ıslak zemin için 15.000 mm - 20.000 mm seviyeleri ideal koruma sağlar.</li>
        <li><strong>Nefes Alabilirlik (g/m²/24h):</strong> Efor sarf ederken terin dışarı atılması şarttır. En az 10.000 g nefes alabilirliğe sahip montlar nem birikmesini ve dolayısıyla üşümeyi engeller.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        2. Sızdırmazlık ve Dikiş Yapısı
      </h3>
      <p style="margin-bottom: 24px;">
        Kumaşın su geçirmez olması tek başına yeterli değildir. Dikiş yerlerinden su almaması için <strong>dikiş bantlama (taped seams)</strong> teknolojisi bulunmalıdır. "Critically Taped" ana dikişleri, "Fully Taped" ise tüm dikişleri korumaya alır. Fermuarların da su geçirmez lamine kaplamalı olmasına dikkat edilmelidir.
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        3. Kar Eteği (Snow Skirt / Powder Skirt)
      </h3>
      <p style="margin-bottom: 24px;">
        Montun iç kısmında bel bölgesini kavrayan lastikli yapı, düşme anında veya derin karda kayarken içeriye kar girmesini doğrudan engeller. Kayak pantolonuyla entegre olabilen modeller ekstra koruma sunar.
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        4. Havalandırma Fermuarları (Pit Zips)
      </h3>
      <p style="margin-bottom: 24px;">
        Koltuk altlarında bulunan havalandırma fermuarları, montu çıkarmadan vücut ısısını dengelemenizi sağlar. Yüksek efor harcanan anlarda terlemeyi önlemek için oldukça pratiktir.
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        5. Aksesuarlar ve Fonksiyonel Cepler
      </h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Liftspeed / Pass Cebi:</strong> Sol kolda bulunan küçük cep, telesiyej geçişlerinde kartı okutmayı kolaylaştırır.</li>
        <li><strong>Gözlük (Goggle) Cebi:</strong> Montun içinde mesh (file) yapılı özel cep bulunması yedek cam veya gözlük saklamak için idealdir.</li>
        <li><strong>Bilek Tozluğu (Thumb Loop):</strong> Başparmağın geçtiği esnek iç bileklikler, eldiven ile mont arasından rüzgar ve kar girmesini önler.</li>
        <li><strong>Kask Uyumlu Kapüşon:</strong> Kapüşonun kask üstüne rahatça çekilebilmesi şiddetli tipide hayat kurtarır.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        6. Kalıp ve Katman Uyumu
      </h3>
      <p style="margin-bottom: 24px;">
        Mont içine içlik ve ara katman (polarlar) giyileceği düşünülerek tam oturan ama hareket alanını kısıtlamayan bir kesim tercih edilmelidir. Omuz ve kol hareketlerinin kısıtlanmadığından emin olunmalıdır.
      </p>
    `
  },
  {
    id: 3,
    title: "Her zamankinden daha iyi ve daha hızlı kaymaya hazır mısınız?",
    date: "15 Eylül 2026",
    readTime: "3 dk",
    category: "Teknik & Performans",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
    content: `
      <p style="margin-bottom: 24px;">
        Her zamankinden daha iyi ve daha hızlı kaymaya hazır mısınız? Pistlerde hızınızı, kontrolünüzü ve performansınızı bir üst seviyeye çıkarmak doğru teknik, doğru ekipman ve iyi bir hazırlık sürecinden geçer. Daha seri, akıcı ve güvenli bir kayış deneyimi için dikkat etmeniz gereken temel noktalar:
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        1. Ekipman Bakımı ve Wax (Vaks) Seçimi
      </h3>
      <p style="margin-bottom: 12px;">Kayaklarınızın alt yüzeyinin (base) durumu hızınızı doğrudan etkiler.</p>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Düzenli Vaks:</strong> Hava ve kar sıcaklığına uygun vaks uygulamak, kayak ile kar arasındaki sürtünmeyi minimuma indirerek hız kazanmanızı sağlar.</li>
        <li><strong>Çelik Kenar (Edge) Bileyi:</strong> Keskin kenarlar, yüksek hızda yapılan keskin dönüşlerde (carving) buza ve sert kara tutunmayı artırır, kaymayı önler.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        2. Doğru Vücut Pozisyonu ve Merkez Dengesi
      </h3>
      <p style="margin-bottom: 12px;">Hızlı kayarken kontrolü kaybetmemenin sırrı doğru duruştur.</p>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li><strong>Ön Gövde Baskısı:</strong> Ağırlık merkezinizi öne verin. Kaval kemiklerinizin botun diline temas ettiğinden emin olun; arkaya yaslanmak kontrolü kaybettirir ve hızı düşürür.</li>
        <li><strong>Düşük Merkez:</strong> Dizleri ve kalçayı esneterek merkez noktanızı yere yakın tutun. Bu duruş hem rüzgar direncini azaltır hem de dengenizi güçlendirir.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        3. Doğru Çizgi ve Carving Tekniği
      </h3>
      <p style="margin-bottom: 12px;">Hız, sadece düz gitmekle değil; dönüşlerde momentum kaybetmemekle kazanılır.</p>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li>Karı sürükleyerek (skidding) değil, kayayın çelik kenarlarını karın içine keserek (carving) dönün.</li>
        <li>Dönüş yaparken virajın çıkışına odaklanın ve ritminizi bozmadan akıcı bir hat izleyin.</li>
      </ul>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        4. Fiziksel Hazırlık ve Bacak Gücü
      </h3>
      <p style="margin-bottom: 24px;">
        Yüksek hızlar, vücut üzerinde daha fazla G kuvveti ve baskı oluşturur. Kayak sezonu öncesinde ve sırasında kuadriseps, hamstring ve kor (core) bölgesi kaslarını güçlendirmek, yüksek hızlardaki sarsıntıları emmenize yardımcı olur.
      </p>

      <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 32px; margin-bottom: 16px;">
        5. Aerodinamik ve Doğru Kıyafet Seçimi
      </h3>
      <p style="margin-bottom: 12px;">Rüzgar direnci yüksek hızlarda en büyük engelinizdir.</p>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
        <li>Üzerinize tam oturan, rüzgarda dalgalanmayan ve aerodinamik kesime sahip kayak kıyafetleri tercih edin.</li>
        <li>Kask ve tam oturan bir kayak gözlüğü (goggle), yüksek hızda görüş alanınızı net tutarak daha cesur ve güvenli hareket etmenizi sağlar.</li>
      </ul>

      <p style="margin-top: 24px; padding: 16px; background-color: #171717; border-left: 4px solid #2563eb; border-radius: 4px;">
        Hızınızı artırırken kişisel sınırlarınızı ve pistteki diğer kayakçıların güvenliğini her zaman göz önünde bulundurmayı unutmayın.
      </p>
    `
  },
  {
    id: 4,
    title: "Cep telefonu pil ömrü; kayak ve snowboard yaparken nasıl uzatabiliriz?",
    date: "15 Eylül 2026",
    readTime: "3 dk",
    category: "İpuçları & Pratik",
    image: "https://cdn.pixabay.com/photo/2017/06/14/16/01/goggles-2402556_1280.jpg",
    content: `
      <p style="margin-bottom: 24px;">
        Kayak ve snowboard yaparken dondurucu soğuklar cep telefonu pillerinin hızla tükenmesine veya cihazın aniden kapanmasına neden olur. Düşük sıcaklıklarda pil ömrünü uzatmak için uygulayabileceğiniz pratik yöntemler:
      </p>

      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px;">
        <li><strong>Vücut Isınızdan Yararlanın:</strong> Telefonunuzu montun dış cepleri yerine, vücut ısınızın ulaştığı iç ceplerde tutun.</li>
        <li><strong>Isı Yalıtımlı Kılıf Kullanın:</strong> Termal veya neopren kılıflar, cihazı dışarıdaki dondurucu rüzgar ve soğuktan korur.</li>
        <li><strong>Gereksiz Bağlantıları Kapatın:</strong> Dağda şebeke zayıf olduğundan telefon sürekli sinyal arar. Hücresel veri, Wi-Fi, Bluetooth ve GPS'i (kullanmıyorsanız) kapatın veya cihazı <strong>Uçak Moduna</strong> alın.</li>
        <li><strong>Kamerayı Kısıtlı Kullanın:</strong> Soğuk havada ekranı uzun süre açık tutmak ve yüksek çözünürlüklü video çekmek pili hızla tüketir. Çekim biter bitmez telefonu hemen iç cebinize geri koyun.</li>
        <li><strong>Güç Tasarrufu Modunu Açın:</strong> Güç tasarrufu modunu sabah kayaka başlamadan önce etkinleştirin.</li>
        <li><strong>Taşınabilir Şarj Cihazı (Powerbank) Taşıyın:</strong> Powerbank'i de tıpkı telefon gibi iç cebinizde, sıcak tutarak saklayın.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Kayak takımı satın alırken nelere dikkat edilmeli",
    date: "15 Eylül 2026",
    readTime: "4 dk",
    category: "Ekipman & Rehber",
    image: "https://cdn.pixabay.com/photo/2017/12/15/09/32/cross-country-skiing-3020748_1280.jpg",
    content: `
      <p style="margin-bottom: 24px;">
        Kayak takımı seçimi; güvenliğiniz, performansınız ve pistte harcayacağınız efor için doğrudan belirleyicidir. Doğru takımı oluştururken dikkat etmeniz gereken temel noktalar:
      </p>

      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px;">
        <li><strong>Seviye ve Kayış Tarzı:</strong> Başlangıç seviyesi için esnek (soft) ve bağışlayıcı kayaklar; orta/ileri seviye için daha sert (stiff) ve tepkisel kayaklar tercih edilmelidir. Piste (Piste), bol kara (Freeride) veya her ikisine de (All-Mountain) uygun modeller arasından tarzınıza göre seçim yapın.</li>
        <li><strong>Kayak Boyu:</strong> Kayak boyu genellikle çene ile burnunuzun arasında olmalıdır. Başlangıç seviyesindekiler daha kolay kontrol için çene hizasında, hızlı ve kararlı kaymak isteyen ileri seviye kayakçılar ise burun/boy hizasında tercih etmelidir.</li>
        <li><strong>Bot Seçimi (En Kritik Ekipman):</strong> Bot, ayağı tam sarmalı ancak can yakacak kadar sıkmamalıdır. Botun esneklik derecesi (Flex) seviyenize uygun olmalıdır (Başlangıç: 60–80 Flex, Orta: 80–100 Flex, İleri: 100+ Flex).</li>
        <li><strong>Bağlama (Binding) ve DIN Ayarı:</strong> Bağlamanın kilonuza, boyunuza ve kayış stilinize uygun bir DIN aralığına sahip olması şarttır. Düşme anında sakatlanmayı önlemek için ayarları mutlaka bir uzmana yaptırılmalıdır.</li>
        <li><strong>Baston (Pole) Boyu:</strong> Bastonu ters çevirip tutamağın hemen altından tuttuğunuzda, dirseğiniz tam 90 derecelik bir açı oluşturmalıdır.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Kayak & Snowboard ekipman bakım rehberi",
    date: "12 Ağustos 2026",
    readTime: "4 dk",
    category: "Bakım & Onarım",
    image: "https://cdn.pixabay.com/photo/2015/09/09/17/57/ski-932188_1280.jpg",
    content: `
      <p style="margin-bottom: 24px;">
        Kayak ve snowboard ekipmanlarınızın performansını artırmak ve kullanım ömrünü uzatmak için uygulamanız gereken temel bakım adımları:
      </p>

      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px;">
        <li><strong>Her Kayış Sonrası Kurulama:</strong> Paslanmayı önlemek için kayış biter bitmez çelik kenarları (edge) ve bağlamaları mikro fiber bezle tamamen kurulayın. Ekipmanı nemli kılıf içinde saklamayın.</li>
        <li><strong>Düzenli Vaks (Wax) Uygulaması:</strong> Tabanın (base) kurumasını önlemek ve hız/akıcılığı korumak için 3-5 kayışta bir veya kar sıcaklığına uygun olarak sıcak vaks yapın.</li>
        <li><strong>Çelik Kenar (Edge) Bileyi:</strong> Buzlu ve sert karda tutunmayı sağlamak için sezon başında ve ortasında çelik kenarlardaki çapakları temizleyip uygun açıyla bileyin.</li>
        <li><strong>Taban Çizik Onarımı (P-Tex):</strong> Taban kayası ve derin çizikleri, P-Tex çubuğu eriterek doldurun ve fazla malzemeyi kazıyıp pürüzsüzleştirin.</li>
        <li><strong>Sezon Sonu Saklama Bakımı:</strong> Sezon bitiminde tabana bolca vaks sürün ancak kazımayın (koruyucu katman bırakın). Bağlama yaylarının tansiyonunu (DIN değerini) düşürerek gerilimi azaltın ve ekipmanı serin, kuru bir yerde saklayın.</li>
      </ul>
    `
  }
];