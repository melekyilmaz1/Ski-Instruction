export default function HeroSection() {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000000',
        boxSizing: 'border-box',
        paddingTop: '90px',
        paddingBottom: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Background Video & Gradient */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 1
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent, rgba(0,0,0,0.9))',
          pointerEvents: 'none',
          zIndex: 2
        }} 
      />

      {/* Central Headlines */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          margin: 'auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none', lineHeight: 0.9 }}>
          <h1 style={{ color: '#FFFFFF', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', margin: 0 }}>
            ZİRVEYE
          </h1>
          <h1 style={{ color: '#A3A3A3', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', margin: '4px 0' }}>
            İZ
          </h1>
          <h1 style={{ color: '#FFFFFF', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', margin: 0 }}>
            BIRAK
          </h1>
        </div>

        <p style={{ marginTop: '16px', maxWidth: '380px', textAlign: 'center', fontSize: '13px', lineHeight: '1.5', color: '#D4D4D4', fontWeight: 300, padding: '0 8px' }}>
          profesyonel kayak tekniklerini keşfedin, güvenli ve tutkulu bir sürüşle dağın keyfini çıkarın.
        </p>
      </div>

      {/* Bottom Stat Blocks */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto'
        }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            textAlign: 'center',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.025em' }}>+10 yıl</span>
            <span style={{ fontSize: '11px', color: '#A3A3A3', fontWeight: 400, marginTop: '2px', whiteSpace: 'nowrap' }}>dağda deneyim</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.025em' }}>+1.2k</span>
            <span style={{ fontSize: '11px', color: '#A3A3A3', fontWeight: 400, marginTop: '2px', whiteSpace: 'nowrap' }}>eğitilen öğrenci</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.025em' }}>%100</span>
            <span style={{ fontSize: '11px', color: '#A3A3A3', fontWeight: 400, marginTop: '2px', whiteSpace: 'nowrap' }}>güvenli sürüş</span>
          </div>
        </div>
      </div>
    </section>
  );
}