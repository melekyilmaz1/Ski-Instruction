import { useState } from 'react';

export default function IletisimSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gonderildi, setGonderildi] = useState(false);

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
        setGonderildi(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setGonderildi(false), 5000);
      } else {
        alert("Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Gönderim hatası:", error);
      alert("Bir bağlantı hatası oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 12px',
    height: '48px',
    fontSize: '15px',
    backgroundColor: '#d1d5db',
    border: 'none',
    borderRadius: '2px',
    color: '#111111',
    outline: 'none'
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
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
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {/* Adınız (gerekli) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
            <label style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>
              Adınız (gerekli)
            </label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
            />
          </div>

          {/* E-posta adresiniz (gerekli) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
            <label style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>
              E-posta adresiniz (gerekli)
            </label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
          </div>

          {/* Konu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
            <label style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>
              Konu
            </label>
            <input 
              type="text" 
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={inputStyle}
            />
          </div>

          {/* İletiniz */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
            <label style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>
              İletiniz
            </label>
            <textarea 
              rows={6} 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ 
                ...inputStyle, 
                height: 'auto', 
                padding: '12px', 
                resize: 'vertical' 
              }}
            />
          </div>

          {/* GÖNDER Butonu */}
          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <button 
              type="submit"
              disabled={isSubmitting}
              style={{ 
                width: '100%',
                padding: '14px 36px', 
                backgroundColor: isSubmitting ? '#6b7280' : '#d1d5db', 
                color: '#000000', 
                border: 'none', 
                borderRadius: '2px',
                fontSize: '14px',
                fontWeight: '800', 
                letterSpacing: '0.08em',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s ease',
                boxSizing: 'border-box'
              }}
            >
              {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
            </button>
          </div>

          {gonderildi && (
            <p style={{ fontSize: '14px', color: '#22c55e', fontWeight: '600', margin: 0 }}>
              İletiniz başarıyla gönderildi.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}