import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface HikayeItem {
  id?: number;
  author: string;
  level: string;
  title: string;
  text: string;
  created_at?: string;
}

// Varsayılan (Statik) 3 Hikaye
const varsayilanHikayeler: HikayeItem[] = [
  {
    author: "Deniz Yılmaz",
    level: "Yetişkin Başlangıç Seviyesi",
    title: "Dağ Korkumu Tutkuya Dönüştüren Tecrübe",
    text: "Yıllarca yükseklik ve hız korkum yüzünden kayağa hep uzaktan baktım. Eren ile ilk derste pistten önce zihinsel olarak hazırlandık. Adım adım, sabırla ilerledi ve 3. günün sonunda kırmızı pistten kendi başıma iniyordum."
  },
  {
    author: "Can & Selin Arslan",
    level: "Çocuk Grubu Velisi",
    title: "7 Yaşındaki Oğlumuzun İlk Kayak Deneyimi",
    text: "Çocuklara yaklaşımı ve pedagojik altyapısı harikaydı. Oğlumuz hiç sıkılmadan, oyunlarla kayağın temelini öğrendi. Şimdi ailece kış tatillerini sabırsızlıkla bekliyoruz."
  },
  {
    author: "Mert Demir",
    level: "İleri Seviye / Carving Teknik",
    title: "Tekniğimi Bir Üst Seviyeye Taşıdım",
    text: "Yıllardır kayıyordum ama duruşumda ve kenar koyma tekniklerimde hatalar vardı. Biyomekanik analizleri ve nokta atışı geri bildirimleri sayesinde sürüşüm çok daha akıcı ve güvenli hale geldi."
  }
];

export default function HikayelerSection() {
  const [hikayeler, setHikayeler] = useState<HikayeItem[]>(varsayilanHikayeler);
  const [loading, setLoading] = useState<boolean>(true);

  // Form durumları
  const [isim, setIsim] = useState('');
  const [unvan, setUnvan] = useState('');
  const [baslik, setBaslik] = useState('');
  const [hikaye, setHikaye] = useState('');
  const [puan, setPuan] = useState(5);
  const [gonderildi, setGonderildi] = useState(false);

  // Supabase'den çekip eski 3 hikaye ile birleştirme
  const fetchHikayeler = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('hikayeler')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Hikayeler çekilirken hata oluştu:', error.message);
      setHikayeler(varsayilanHikayeler);
    } else {
      setHikayeler([...(data || []), ...varsayilanHikayeler]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHikayeler();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isim || !baslik || !hikaye) return;

    const { error } = await supabase
      .from('hikayeler')
      .insert([
        {
          author: isim,
          level: unvan || 'Başlangıç Seviyesi',
          title: baslik,
          text: hikaye
        }
      ]);

    if (error) {
      console.error('Supabase Hata Detayı:', error);
      alert(`Supabase Hatası: ${error.message}`);
    } else {
      setGonderildi(true);
      setIsim('');
      setUnvan('');
      setBaslik('');
      setHikaye('');
      setPuan(5);

      fetchHikayeler();
      setTimeout(() => setGonderildi(false), 4000);
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', padding: '60px 20px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '540px', width: '100%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', boxSizing: 'border-box' }}>
        
        {/* Başlık */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            BAŞLAMA HİKAYELERİ & DEĞERLENDİRMELER
          </h1>
          <p style={{ fontSize: '15px', opacity: 0.7, fontWeight: '500' }}>
            Pistte iz bırakan öğrencilerin deneyimleri
          </p>
        </div>

        {/* Hikaye Gönderme Formu */}
        <div style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.1)', boxSizing: 'border-box' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px' }}>
            Kendi Hikayeni Paylaş
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', boxSizing: 'border-box' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', opacity: 0.6, marginBottom: '4px' }}>
                Puanınız
              </label>
              <div style={{ display: 'flex', gap: '6px', cursor: 'pointer' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    onClick={() => setPuan(star)}
                    style={{ fontSize: '22px', color: star <= puan ? '#000' : '#ccc' }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', width: '100%', boxSizing: 'border-box', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Adınız Soyadınız *" 
                value={isim}
                onChange={(e) => setIsim(e.target.value)}
                required
                style={{ flex: '1 1 200px', padding: '10px 12px', fontSize: '14px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
              />
              <input 
                type="text" 
                placeholder="Seviyeniz (Örn: Başlangıç)" 
                value={unvan}
                onChange={(e) => setUnvan(e.target.value)}
                style={{ flex: '1 1 200px', padding: '10px 12px', fontSize: '14px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <input 
              type="text" 
              placeholder="Hikayenizin Başlığı *" 
              value={baslik}
              onChange={(e) => setBaslik(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 12px', fontSize: '14px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
            />

            <textarea 
              placeholder="Kayağa başlama deneyiminizi ve tecrübelerinizi yazın... *" 
              value={hikaye}
              onChange={(e) => setHikaye(e.target.value)}
              rows={4}
              required
              style={{ width: '100%', padding: '10px 12px', fontSize: '14px', border: '1px solid #ccc', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
            />

            <button 
              type="submit"
              style={{ 
                width: '100%',
                padding: '12px', 
                backgroundColor: '#000', 
                color: '#fff', 
                border: 'none', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                cursor: 'pointer',
                letterSpacing: '0.05em',
                boxSizing: 'border-box'
              }}
            >
              Hikayeyi Gönder
            </button>

            {gonderildi && (
              <p style={{ fontSize: '13px', color: 'green', fontWeight: '600', margin: 0, textAlign: 'center' }}>
                Hikayeniz başarıyla eklendi!
              </p>
            )}
          </form>
        </div>

        {/* Hikayeler Listesi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', width: '100%', boxSizing: 'border-box' }}>
          {loading ? (
            <p style={{ textAlign: 'center', opacity: 0.6 }}>Yükleniyor...</p>
          ) : (
            hikayeler.map((item, index) => (
              <div 
                key={item.id || index} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '10px',
                  paddingBottom: index !== hikayeler.length - 1 ? '36px' : '0',
                  borderBottom: index !== hikayeler.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  boxSizing: 'border-box',
                  width: '100%'
                }}
              >
                <div style={{ fontSize: '20px', letterSpacing: '3px', color: '#000000' }}>
                  ★★★★★
                </div>
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                  "{item.title}"
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', opacity: 0.9, margin: 0 }}>
                  {item.text}
                </p>
                <div style={{ marginTop: '4px', fontSize: '14px', lineHeight: '1.4' }}>
                  <strong style={{ display: 'block', fontWeight: '700' }}>{item.author}</strong>
                  <span style={{ opacity: 0.6, fontSize: '13px' }}>
                    {item.level} {item.created_at ? `• ${new Date(item.created_at).toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}` : ''}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}