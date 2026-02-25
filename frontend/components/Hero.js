'use client';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const statsRef = useRef(null);
  const animated = useRef(false);

  // Animate counters when visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        animateCount(setCount1, 0, 5, 1200);
        animateCount(setCount2, 0, 200, 1600);
        animateCount(setCount3, 0, 98, 1400);
      }
    }, { threshold: 0.4 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCount(setter, from, to, duration) {
    const steps = 60;
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      setter(Math.round(current));
      if (step >= steps) { setter(to); clearInterval(timer); }
    }, duration / steps);
  }

  return (
    <section id="home" style={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
    }}>

      {/* ── HERO BANNER ── */}
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse 100% 80% at 50% 30%, rgba(200,96,42,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 60% 60% at 10% 90%, rgba(212,168,83,0.1) 0%, transparent 50%),
          var(--noir)
        `,
      }}>
        {/* Decorative SVG circles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <svg width="100%" height="100%" style={{ opacity: 0.07, position: 'absolute', inset: 0 }}>
            <circle cx="75%" cy="30%" r="280" fill="none" stroke="#d4a853" strokeWidth="0.8"/>
            <circle cx="75%" cy="30%" r="380" fill="none" stroke="#d4a853" strokeWidth="0.4"/>
            <circle cx="20%" cy="80%" r="180" fill="none" stroke="#c8602a" strokeWidth="0.6"/>
            <line x1="0" y1="65%" x2="100%" y2="40%" stroke="#d4a853" strokeWidth="0.4"/>
          </svg>
        </div>

        {/* Decorative large text bg */}
        <div style={{
          position: 'absolute', bottom: '0', right: '-20px',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(120px, 22vw, 260px)',
          fontWeight: '700',
          color: 'rgba(212,168,83,0.04)',
          letterSpacing: '0.05em',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>NOIR</div>

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10,
          textAlign: 'center',
          maxWidth: '860px',
          padding: '120px 32px 80px',
          width: '100%',
        }}>
          {/* Tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            marginBottom: '28px',
            padding: '8px 20px',
            border: '1px solid rgba(212,168,83,0.25)',
            background: 'rgba(212,168,83,0.06)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              Mobile Bartending · Canada Wide
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 9vw, 110px)',
            fontWeight: '600',
            lineHeight: 1.0,
            color: 'var(--cream)',
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}>
            Crafted Cocktails,
          </h1>
          <h1 className="text-shimmer" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 9vw, 110px)',
            fontWeight: '600',
            lineHeight: 1.0,
            marginBottom: '32px',
            letterSpacing: '-0.01em',
          }}>
            Unforgettable Moments.
          </h1>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: 'rgba(240,230,211,0.65)',
            maxWidth: '580px',
            margin: '0 auto 52px',
            lineHeight: 1.7,
            fontWeight: '300',
          }}>
            We bring the bar, the talent, and the entertainment — directly to your event.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#reserve">
              <button className="btn-primary"><span>Book Your Event</span></button>
            </a>
            <a href="#packages">
              <button className="btn-outline">View Packages</button>
            </a>
          </div>

          {/* Trust badges */}
          <div style={{
            display: 'flex', gap: '32px', justifyContent: 'center',
            marginTop: '56px', flexWrap: 'wrap',
          }}>
            {['🏆 Award-Winning Bar', '🍸 Flair Bartending', '🚚 We Come To You'].map(b => (
              <span key={b} style={{
                fontSize: '13px',
                color: 'rgba(240,230,211,0.45)',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.05em',
              }}>{b}</span>
            ))}
          </div>
        </div>

            
      </div>

      {/* ── WHY CHOOSE US STRIP ── */}
      <div style={{
        background: 'rgba(20,18,16,0.8)',
        borderTop: '1px solid rgba(212,168,83,0.12)',
        borderBottom: '1px solid rgba(212,168,83,0.12)',
        padding: '48px clamp(24px, 8vw, 80px)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px',
        }}>
          {[
            { icon: '📏', title: 'Custom Bar Sizes', desc: 'From 6ft to 24ft, tailored to fit any space or guest list' },
            { icon: '💡', title: 'Vibrant LED Lighting', desc: 'Change colors and moods to match your event\'s theme' },
            { icon: '✨', title: 'Premium Finish', desc: 'Sleek, modern designs that elevate your décor and wow guests' },
            { icon: '🔥', title: 'Flair Bartending', desc: 'Fire shows, tricks & bottle spinning — live entertainment included' },
          ].map(item => (
            <div key={item.title} style={{
              display: 'flex', gap: '16px', alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '18px', fontWeight: '600',
                  color: 'var(--cream)', marginBottom: '6px',
                }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(240,230,211,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS COUNTER ── */}
      <div ref={statsRef} style={{
        padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 80px)',
        background: 'linear-gradient(135deg, rgba(200,96,42,0.08) 0%, transparent 60%)',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }}>
          {[
            { value: count1 + 'K+', label: 'Hours of Work', sub: 'and counting' },
            { value: count2 + '+', label: 'Events Completed', sub: 'across Canada' },
            { value: count3 + '%', label: 'Client Satisfaction', sub: 'guaranteed' },
          ].map(stat => (
            <div key={stat.label} style={{
              padding: '40px 24px',
              border: '1px solid rgba(212,168,83,0.12)',
              background: 'rgba(20,18,16,0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
              }} />
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(44px, 7vw, 72px)',
                fontWeight: '700',
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '10px',
              }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: 'var(--cream)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{stat.label}</div>
              <div style={{ fontSize: '12px', color: 'rgba(240,230,211,0.4)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT WE OFFER ── */}
      <div style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 80px)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
              <div className="gold-line" />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Services</span>
              <div className="gold-line" />
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '600', color: 'var(--cream)',
            }}>What We <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Offer</em></h2>
            <p style={{ color: 'rgba(240,230,211,0.5)', fontSize: '15px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.7 }}>
              From intimate backyard parties to grand wedding receptions — we bring world-class bartending to you.
            </p>
          </div>

          {/* Services grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2px',
          }}>
            {[
              { icon: '🍹', title: 'Mobile Bartending', desc: 'Professional bartenders who mix, shake, and pour with style — bringing signature cocktails and mocktails right to your event.' },
              { icon: '🎪', title: 'Bar Rentals', desc: 'From sleek LED bars to premium setups (6ft to 24ft), we design a bar experience that perfectly matches your event theme.' },
              { icon: '🎉', title: 'Private Parties', desc: 'House parties, backyard events, birthdays — we turn every occasion into a celebration with custom drinks and great vibes.' },
              { icon: '💼', title: 'Corporate Events', desc: 'From product launches to team parties, we serve with professionalism and flair to impress your clients and colleagues.' },
              { icon: '💍', title: 'Weddings & Receptions', desc: 'Big or small, our bars make your special day unforgettable. From cocktail hours to full wedding receptions, we have got the setup.' },
              { icon: '🔥', title: 'Fire & Flair Show', desc: 'High-energy entertainment with bottles, fire, and tricks — guaranteed to wow your guests and add the ultimate "WOW" factor.' },
            ].map((s, i) => (
              <div key={s.title}
                style={{
                  padding: 'clamp(28px, 4vw, 44px)',
                  border: '1px solid rgba(212,168,83,0.1)',
                  background: i % 2 === 0 ? 'rgba(20,18,16,0.5)' : 'transparent',
                  transition: 'all 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(42,36,32,0.7)'; e.currentTarget.style.borderColor = 'rgba(212,168,83,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? 'rgba(20,18,16,0.5)' : 'transparent'; e.currentTarget.style.borderColor = 'rgba(212,168,83,0.1)'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '0', background: 'var(--ember)', transition: 'height 0.4s ease' }} className="service-line" />
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px', fontWeight: '600',
                  color: 'var(--cream)', marginBottom: '12px',
                }}>{s.title}</h3>
                <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '14px', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        div:hover .service-line { height: 100% !important; }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
