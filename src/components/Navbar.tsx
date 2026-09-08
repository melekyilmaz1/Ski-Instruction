import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Dersler', href: '/dersler' },
  { label: 'Hikayeler', href: '/hikayeler' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 16px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Üst Kısım: Logo ve Rezervasyon Butonu */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
          <Link 
            to="/" 
            style={{
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}
          >
            SNOW
          </Link>

          <Link
            to="/rezervasyon"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            Ders Rezerve Et
          </Link>
        </div>

        {/* Alt Kısım: Gezinme Linkleri */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
            paddingTop: '4px'
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: isActive ? 'underline' : 'none',
                  textUnderlineOffset: '6px',
                  whiteSpace: 'nowrap',
                  opacity: isActive ? 1 : 0.8
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}