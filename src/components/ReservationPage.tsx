import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ReservationPage() {
  const [searchParams] = useSearchParams();
  const selectedPackageFromUrl = searchParams.get('paket');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    lessonType: selectedPackageFromUrl || 'birebir',
    date: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedPackageFromUrl) {
      setFormData((prev) => ({ ...prev, lessonType: selectedPackageFromUrl }));
    }
  }, [selectedPackageFromUrl]);

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px',
    backgroundColor: '#d1d5db',
    color: '#111111',
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    fontSize: '14px'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/melekyilllmazz.32@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        alert('Rezervasyon talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          lessonType: 'birebir',
          date: '',
          notes: ''
        });
      } else {
        alert('Talebiniz gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Gönderim hatası:', error);
      alert('Bir bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', paddingTop: '100px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '540px', width: '100%', marginLeft: 'auto', marginRight: 'auto', boxSizing: 'border-box' }}>
        
        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 28px)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
          DERS REZERVE ET
        </h1>
        <p style={{ fontSize: '13px', color: '#a3a3a3', textAlign: 'center', marginBottom: '32px', padding: '0 8px' }}>
          Hayalinizdeki kayış deneyimi için bilgilerinizi doldurun, takvimimizi birlikte planlayalım.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', boxSizing: 'border-box' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Adınız Soyadınız (gerekli)</label>
            <input 
              type="text" 
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>E-posta Adresiniz (gerekli)</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Telefon Numarası</label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Ders Tipi Seçin</label>
            <select 
              value={formData.lessonType}
              onChange={(e) => setFormData({...formData, lessonType: e.target.value})}
              style={{ ...fieldStyle, fontWeight: '600', cursor: 'pointer' }}
            >
              <option value="birebir">Birebir Özel Ders (₺2.500 / Saat)</option>
              <option value="grup">Grup Dersi (₺1.400 / Kişi)</option>
              <option value="freeride">Freeride &amp; Pist Dışı (₺3.800 / Yarım Gün)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Planlanan Tarih</label>
            <input 
              type="date" 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Notlarınız / Seviyeniz</label>
            <textarea 
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              placeholder="Daha önce kaydınız mı, özel bir talebiniz var mı?"
              style={{ ...fieldStyle, resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              width: '100%',
              boxSizing: 'border-box',
              padding: '14px', 
              backgroundColor: isSubmitting ? '#6b7280' : (isHovered ? '#9ca3af' : '#d1d5db'), 
              color: '#000000', 
              border: 'none', 
              fontWeight: '900', 
              fontSize: '14px', 
              textTransform: 'uppercase', 
              cursor: isSubmitting ? 'not-allowed' : 'pointer', 
              marginTop: '8px',
              transition: 'background-color 0.2s ease'
            }}
          >
            {isSubmitting ? 'GÖNDERİLİYOR...' : 'REZERVASYON TALEBİ GÖNDER'}
          </button>
        </form>

      </div>
    </div>
  );
}