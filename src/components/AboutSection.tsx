export default function AboutSection() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', padding: '60px 16px' }}>
      {/* 
        Kırmızı çizgiler arası dar dikey sütun (maxWidth: 540px)
        Yazı boyutları büyütüldü ve satır aralıkları ferahlatıldı.
      */}
      <div 
        style={{ 
          maxWidth: '540px', 
          width: '100%', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          textAlign: 'left' 
        }}
      >
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Zirvede Başlayan Bir Yolculuk
          </h1>
          <p style={{ fontSize: '15px', opacity: 0.7, fontWeight: '500' }}>
            Ben Kimim?
          </p>
        </div>

        {/* Hikaye Girişi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '17px', lineHeight: '1.75' }}>
          <p>
            <strong>Selam! Ben Eren.</strong> Bugün 28 yaşında, hayatını dağlara adamış bir kayak antrenörüyüm.
          </p>
          <p>
            Çocukluğumun büyük bir kısmı, kışları beyaz örtüyle kaplanan yüksek dağ kasabalarında geçti. İlk kez rüzgarın sesini dağın tepesinde dinlediğimde ve ayağıma o ilk kayağı bağladığımda henüz 7 yaşındaydım. O gün hissettiğim o özgürlük duygusu, hayatımın tüm akışını belirledi.
          </p>
          <p>
            Zamanla bu tutkumu sadece bir hobi olarak bırakmak istemediğimi anladım ve bunu mesleğim, yaşam tarzım haline getirmeye karar verdim.
          </p>
        </div>

        {/* Akademik Altyapı & Lisanslar */}
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.02em' }}>
            Akademik Altyapı ve Lisanslar
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.75', marginBottom: '20px' }}>
            Sporun sadece pratikten değil, bilimsel bir temelden geldiğine inanıyorum. Bu yüzden eğitimimi <strong>Beden Eğitimi ve Spor Yüksekokulu (BESYO) Spor Yöneticiliği ve Antrenörlük Eğitimi</strong> bölümünde tamamladım. İnsan anatomisi, spor psikolojisi ve hareket mekaniği üzerine aldığım akademik eğitimi, dağdaki pratik tecrübemle birleştirdim.
          </p>

          <div>
            <p style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', opacity: 0.6, marginBottom: '12px', letterSpacing: '0.05em' }}>
              Sertifika ve Lisanslar
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', fontSize: '16px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Türkiye Kayak Federasyonu (TKF) 2. Kademe Eğitmeni</li>
              <li>FIS Onaylı Alp Disiplini Antrenörlük Lisansı</li>
              <li>Dağda Arama-Kurtarma & İleri Düzey İlk Yardım</li>
              <li>Çocuk ve Genç Sporcular İçin Formasyon Belgesi</li>
            </ul>
          </div>
        </div>

        {/* Neden Buradayım & Kapanış */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '17px', lineHeight: '1.75' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Neden Buradayım?
          </h2>
          <p>
            Karda kaymak benim için sadece fiziksel bir aktivite değil; zihni boşaltma, doğayla bütünleşme ve kendi sınırlarını keşfetme sanatıdır.
          </p>
          <p>
            Bu platformu oluşturmamdaki temel amaç; yıllar içinde edindiğim pist tecrübelerini, doğru ekipman seçimlerini, dağ güvenliği kurallarını ve en önemlisi <strong>korkuyu tutkuya dönüştürme yöntemlerini</strong> paylaşmak. İster ilk defa piste adım atacak bir başlangıç öğrencisi ol, ister tekniklerini geliştirmek isteyen ileri düzey bir kaykaycı; burada sana rehberlik edecek bir hikaye ve bilgi bulacaksın.
          </p>
          <p>
            Sporun dışında doğa fotoğrafçılığı yapıyor, dağ rotaları haritalandırıyor ve kış sporları ekipman teknolojilerini yakından takip ediyorum.
          </p>
          <p>
            Benliğimi ve tekniklerimi her sezon yeni bir heyecanla güncellemeye devam ediyorum. Zira dağ bana her defasında öğrenecek yeni bir şey olduğunu hatırlatıyor.
          </p>
          
          <p style={{ marginTop: '16px', fontSize: '18px', fontWeight: '700', textAlign: 'center' }}>
            Sınırları aşmak ve zirveye iz bırakmak için pistlerde görüşmek üzere!
          </p>
        </div>

      </div>
    </div>
  );
}