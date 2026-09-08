import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Yazı bulunamadı.</h2>
        <Link to="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>
          ← Tüm Yazılara Dön
        </Link>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <article style={{ maxWidth: '800px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        
        {/* Geri Dön Butonu */}
        <Link 
          to="/blog" 
          style={{ 
            display: 'inline-block', 
            color: '#2563eb', 
            fontSize: '14px', 
            fontWeight: '600', 
            textDecoration: 'none', 
            marginBottom: '32px' 
          }}
        >
          ← Tüm Yazılara Dön
        </Link>

        {/* Başlık ve Meta Bilgileri */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.3', marginBottom: '16px', color: '#ffffff' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', gap: '8px', color: '#a3a3a3', fontSize: '14px' }}>
            <span>{post.date}</span>
            {post.readTime && <span>• {post.readTime} okuma süresi</span>}
          </div>
        </div>

        {/* Yazı Metni İçeriği */}
        <div 
          style={{ color: '#d4d4d4', fontSize: '17px', lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
      </article>
    </div>
  );
}