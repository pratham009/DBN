'use client';
import { useRef, useEffect, useState } from 'react';



export default function Packages() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" ref={ref} className="section-fade" style={{
      padding: 'clamp(80px,12vw,160px) clamp(24px,8vw,80px)',
      position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(42,36,32,0.4) 0%, transparent 70%)`,
    }}>
      {/* BG text */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(80px, 18vw, 220px)',
        fontWeight: '700', color: 'rgba(212,168,83,0.03)',
        letterSpacing: '0.1em', whiteSpace: 'nowrap',
        pointerEvents: 'none', zIndex: 0,
      }}>PACKAGES</div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
            <div className="gold-line" />
            <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Customizable Solutions</span>
            <div className="gold-line" />
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '600', color: 'var(--cream)',
          }}>Packages Built <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>For You</em></h2>
          <p style={{ color: 'rgba(240,230,211,0.5)', fontSize: '15px', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
            Every event is unique. Our packages are fully customizable based on your specific needs. Choose from our curated options below or let us create the perfect package for your event.
          </p>
        </div>

        {/* Customization Factors */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
          marginTop: '60px',
        }}>
          {[
            { icon: '👥', title: 'PEOPLE', description: 'Guest count determines bartenders, bar size, and service hours' },
            { icon: '📍', title: 'AREA', description: 'Location & venue size affects setup complexity and staffing' },
            { icon: '⚙️', title: 'REQUIREMENTS', description: 'Special requests, themed menus, and entertainment options' },
          ].map((factor, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '32px 28px',
              background: 'rgba(212,168,83,0.06)',
              border: '1px solid rgba(212,168,83,0.15)',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{factor.icon}</div>
              <h4 style={{
                fontSize: '12px',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '12px',
                fontWeight: '600',
              }}>{factor.title}</h4>
              <p style={{
                fontSize: '13px',
                color: 'rgba(240,230,211,0.6)',
                lineHeight: '1.6',
              }}>{factor.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
