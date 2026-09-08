import { Link, useNavigate } from 'react-router-dom';

export default function DerslerSection() {
  const navigate = useNavigate();

  const paketler = [
    {
      id: "birebir",
      rozet: "En Çok Tercih Edilen",
      seviye: "TÜM SEVİYELER",
      baslik: "Birebir Özel Ders",
      fiyat: "₺2.500",
      sure: "/ Saat",
      aciklama: "Kişiselleştirilmiş teknik ve video analizli birebir rehberlik.",
      ozellikler: [
        "Kişiye özel tempo ve teknik analiz",
        "Video çekimi ve akşam analizi",
        "Pist içi ve telesiyej rehberliği",
        "Ekipman seçim danışmanlığı"
      ],
      populer: true
    },
    {
      id: "grup",
      seviye: "TÜM SEVİYELER",
      baslik: "Grup Dersleri",
      fiyat: "₺1.400",
      sure: "/ Kişi Başı (Saat)",
      aciklama: "2-4 kişilik küçük gruplar, eğlenceli ve dinamik öğrenme.",
      ozellikler: [
        "Maksimum 4 kişilik sınırlı kontenjan",
        "Aynı seviyedeki sporcularla pratik",
        "Sosyal ve motivasyonu yüksek ortam",
        "Temel ve orta seviye teknik geliştirme"
      ],
      populer: false
    },
    {
      id: "freeride",
      seviye: "İLERİ SEVİYE",
      baslik: "Freeride & Pist Dışı",
      fiyat: "₺3.800",
      sure: "/ Yarım Gün",
      aciklama: "İleri seviye derin kar teknikleri, çığ güvenliği ve vadi turları.",
      ozellikler: [
        "Derin kar (Powder) sürüş teknikleri",
        "Çığ arama-kurtarma ekipman kullanımı",
        "Saha & hava durumu okuma",
        "Off-piste vadi ve rota rehberliği"
      ],
      populer: false
    }
  ];

  const handleSelectPackage = (packageId: string) => {
    navigate(`/rezervasyon?paket=${packageId}`);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', padding: '60px 20px', color: '#ffffff', boxSizing: 'border-box' }}>
      <div 
        style={{ 
          maxWidth: '540px', 
          width: '100%', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          textAlign: 'left',
          boxSizing: 'border-box'
        }}
      >
        {/* Üst Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '-0.02em', color: '#ffffff' }}>
            DERS PAKETLERİ
          </h1>
          <p style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.5', color: '#ffffff', opacity: 0.8 }}>
            İster başlangıç seviyesinde olun ister ileri seviye, hedeflerinize uygun programlarımızla dağın keyfini çıkarın.
          </p>
        </div>

        {/* Paket Kartları Listesi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', boxSizing: 'border-box' }}>
          {paketler.map((paket) => (
            <div 
              key={paket.id} 
              style={{ 
                position: 'relative',
                padding: '28px 24px', 
                border: '1px solid #ffffff', 
                borderRadius: '4px',
                backgroundColor: '#ffffff',
                color: '#000000',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              {/* Öne Çıkan Rozet */}
              {paket.populer && (
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '-12px', 
                    right: '20px', 
                    backgroundColor: '#000000', 
                    color: '#ffffff', 
                    fontSize: '10px', 
                    fontWeight: '900', 
                    textTransform: 'uppercase', 
                    padding: '4px 10px', 
                    letterSpacing: '0.05em' 
                  }}
                >
                  {paket.rozet}
                </span>
              )}

              {/* Seviye İfadesi */}
              <span style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>
                {paket.seviye}
              </span>

              {/* Paket Adı */}
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '4px 0 12px 0', textTransform: 'uppercase', color: '#000000' }}>
                {paket.baslik}
              </h2>

              {/* Fiyat Bilgisi */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                <span style={{ fontSize: '26px', fontWeight: '900' }}>{paket.fiyat}</span>
                <span style={{ fontSize: '13px', fontWeight: '700', opacity: 0.7 }}>{paket.sure}</span>
              </div>

              {/* Açıklama Metni */}
              <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0', fontWeight: '600' }}>
                {paket.aciklama}
              </p>

              {/* Öne Çıkan Özellikler */}
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {paket.ozellikler.map((ozellik, idx) => (
                  <li key={idx} style={{ fontSize: '13.5px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '900' }}>✓</span> {ozellik}
                  </li>
                ))}
              </ul>

              {/* Seçim Butonu */}
              <button 
                onClick={() => handleSelectPackage(paket.id)}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  backgroundColor: '#000000', 
                  color: '#ffffff', 
                  border: 'none', 
                  fontWeight: '900', 
                  fontSize: '13px',
                  textTransform: 'uppercase', 
                  cursor: 'pointer', 
                  letterSpacing: '0.05em',
                  boxSizing: 'border-box'
                }}
              >
                Paketi Seç ve Rezerve Et
              </button>
            </div>
          ))}
        </div>

        {/* Özel Talep Kapanışı */}
        <div style={{ marginTop: '50px', textAlign: 'center', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.2)', boxSizing: 'border-box' }}>
          <p style={{ fontSize: '14px', margin: 0, fontWeight: '500', color: '#ffffff', opacity: 0.8 }}>
            Özel grup organizasyonları veya sezonluk ders takvimi için{' '}
            <Link 
              to="/iletisim" 
              style={{ 
                color: '#ffffff', 
                textDecoration: 'underline', 
                fontWeight: '700', 
                cursor: 'pointer', 
                opacity: 1 
              }}
            >
              iletişime geçebilirsiniz
            </Link>
            .
          </p>
        </div>

      </div>
    </div>
  );
}