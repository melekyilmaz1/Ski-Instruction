import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function BlogSection() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px', backgroundColor: '#000000', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1140px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        
        {/* Izgara Yapısı: Mobilde tek sütun, tablet/masaüstünde 3 sütun */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '16px' 
          }}
        >
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div 
                style={{ 
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '6px', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#111111'
                }}
              >
                {/* Görsel Katmanı */}
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                  }}
                />

                {/* Karartma Katmanı */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.2) 100%)',
                    zIndex: 1
                  }}
                />

                {/* Mavi Tarih Etiketi */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span 
                    style={{ 
                      backgroundColor: '#2563eb', 
                      color: '#ffffff', 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      padding: '4px 8px', 
                      borderRadius: '2px',
                      display: 'inline-block'
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Beyaz Başlık Metni */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 
                    style={{ 
                      color: '#ffffff', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      lineHeight: '1.3', 
                      margin: 0,
                      letterSpacing: '-0.01em',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.title}
                  </h2>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}