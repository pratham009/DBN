'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <section id="home" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
    }}>
      {/* Background gradient + abstract visuals */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,96,42,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,168,83,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 80% 20%, rgba(200,96,42,0.06) 0%, transparent 50%),
          var(--noir)
        `,
        zIndex: 0,
      }} />

      {/* Abstract decorative lines */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
        <svg width="100%" height="100%" style={{ opacity: 0.06 }}>
          <line x1="0" y1="60%" x2="100%" y2="40%" stroke="#d4a853" strokeWidth="0.5"/>
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#d4a853" strokeWidth="0.3"/>
          <circle cx="80%" cy="20%" r="200" fill="none" stroke="#d4a853" strokeWidth="0.5"/>
          <circle cx="80%" cy="20%" r="350" fill="none" stroke="#d4a853" strokeWidth="0.3"/>
          <circle cx="15%" cy="80%" r="150" fill="none" stroke="#c8602a" strokeWidth="0.4"/>
        </svg>
      </div>

      {/* Floating drink silhouette */}
      <div className="float-anim" style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        opacity: 0.15,
        fontSize: 'clamp(160px, 25vw, 320px)',
        lineHeight: 1,
        filter: 'blur(2px)',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>🍸</div>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 32px',
      }}>
        {/* Pre-title */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }}></div>
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.4em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            fontFamily: 'DM Sans, sans-serif',
          }}>Est. 2019 · Downtown District</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }}></div>
        </div>

        {/* Main title */}
        <h1 className="text-shimmer" style={{
          fontSize: 'clamp(72px, 14vw, 160px)',
          fontWeight: '600',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          marginBottom: '8px',
          fontFamily: 'Cormorant Garamond, serif',
        }}>
          Drinks By NIKHIL
        </h1>

        <p style={{
          fontFamily: 'Marcellus, serif',
          fontSize: 'clamp(14px, 2vw, 18px)',
          color: 'rgba(240,230,211,0.6)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '48px',
        }}>
          Where the night begins
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          color: 'rgba(240,230,211,0.75)',
          maxWidth: '560px',
          margin: '0 auto 56px',
          lineHeight: 1.6,
          fontWeight: '300',
        }}>
          Handcrafted cocktails. Rare spirits. An atmosphere that blurs the line between reality and reverie.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#reserve">
            <button className="btn-primary">
              <span>Reserve a Table</span>
            </button>
          </a>
          <a href="#menu">
            <button className="btn-outline">Explore Menu</button>
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginTop: '80px',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '120+', label: 'Cocktails' },
            { num: '5★', label: 'Rated' },
            { num: '6 Yrs', label: 'Experience' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: '600',
                color: 'var(--gold)',
              }}>{stat.num}</div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'rgba(240,230,211,0.5)',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(212,168,83,0.6)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        <style>{`@keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }`}</style>
      </div>
    </section>
  );
}
