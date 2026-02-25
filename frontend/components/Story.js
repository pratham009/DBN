'use client';
import { useEffect, useRef } from 'react';

export default function Story() {
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
    <section id="story" ref={ref} className="section-fade" style={{
      width: '100%', maxWidth: '100vw', overflow: 'hidden',
    }}>

      {/* ── HERO BANNER ── */}
      <div style={{
        padding: 'clamp(80px,12vw,160px) clamp(24px,8vw,120px) clamp(60px,8vw,100px)',
        background: `
          radial-gradient(ellipse 60% 70% at 0% 50%, rgba(200,96,42,0.1) 0%, transparent 55%),
          radial-gradient(ellipse 50% 50% at 100% 30%, rgba(212,168,83,0.06) 0%, transparent 55%),
          var(--noir)
        `,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Big text BG */}
        <div style={{
          position: 'absolute', right: '-10px', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(80px, 18vw, 200px)',
          fontWeight: '700', color: 'rgba(212,168,83,0.04)',
          letterSpacing: '0.1em', lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}>ABOUT</div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {/* Left – visual card */}
          <div style={{ position: 'relative' }}>
            {/* Main decorative frame */}
            <div style={{
              border: '1px solid rgba(212,168,83,0.2)',
              padding: 'clamp(32px, 5vw, 56px)',
              position: 'relative',
              background: 'rgba(20,18,16,0.5)',
            }}>
              {/* Corner brackets */}
              {[
                { top: '-1px', left: '-1px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
                { top: '-1px', right: '-1px', borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
                { bottom: '-1px', left: '-1px', borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
                { bottom: '-1px', right: '-1px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
              ].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', ...s }} />
              ))}

              {/* Content inside frame */}
              <div style={{ textAlign: 'center' }}>
                {/* Portrait placeholder */}
                <div style={{
                  width: 'clamp(120px, 18vw, 180px)',
                  height: 'clamp(120px, 18vw, 180px)',
                  borderRadius: '50%',
                  border: '3px solid rgba(212,168,83,0.3)',
                  background: 'radial-gradient(circle, rgba(200,96,42,0.2), rgba(10,8,6,0.8))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  margin: '0 auto 24px',
                }}>🍸</div>

                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(22px, 3.5vw, 32px)',
                  fontWeight: '600', color: 'var(--cream)',
                  marginBottom: '6px',
                }}>Nikhil Walia</div>
                <div style={{
                  fontSize: '11px', letterSpacing: '0.3em',
                  color: 'var(--ember)', textTransform: 'uppercase', marginBottom: '20px',
                }}>Founder & Master Mixologist</div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', marginBottom: '20px' }} />

                {/* Badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  {['Certified Bartender', 'Flair Artist', 'Est. 2019'].map(b => (
                    <span key={b} style={{
                      padding: '4px 12px',
                      border: '1px solid rgba(212,168,83,0.25)',
                      fontSize: '10px', letterSpacing: '0.15em',
                      color: 'rgba(240,230,211,0.6)', textTransform: 'uppercase',
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              width: '90px', height: '90px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--ember), #9e4518)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--cream)',
              textAlign: 'center', lineHeight: 1.4,
              boxShadow: '0 8px 32px rgba(200,96,42,0.3)',
            }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '700', lineHeight: 1 }}>6</span>
              <span>Yrs of<br/>Craft</span>
            </div>
          </div>

          {/* Right – text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="gold-line" />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Our Story</span>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 5vw, 58px)',
              fontWeight: '600', lineHeight: 1.05,
              color: 'var(--cream)', marginBottom: '24px',
            }}>
              The Vision<br/>
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Behind the Bar</em>
            </h2>

            <p style={{ color: 'rgba(240,230,211,0.7)', lineHeight: 1.9, fontSize: '15px', marginBottom: '18px' }}>
              Drinks by Nikhil was founded by <strong style={{ color: 'var(--cream)' }}>Nikhil Walia</strong> — a certified bartender, mixologist, and flair bartender who has been bringing energy and elegance to events since 2019.
            </p>
            <p style={{ color: 'rgba(240,230,211,0.7)', lineHeight: 1.9, fontSize: '15px', marginBottom: '18px' }}>
              Nikhil began his journey bartending as a freelancer and working in banquets, quickly earning a reputation for creativity, skill, and passion for hospitality.
            </p>
            <p style={{ color: 'rgba(240,230,211,0.7)', lineHeight: 1.9, fontSize: '15px', marginBottom: '36px' }}>
              In 2024, he turned his vision into reality by launching his own company — a mobile bartending service that delivers unforgettable experiences <strong style={{ color: 'var(--gold)' }}>across Canada</strong>.
            </p>

            {/* Values grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
              {[
                { icon: '🌿', title: 'All Natural', desc: 'House-made syrups & fresh botanicals' },
                { icon: '🎯', title: 'Tailored Setup', desc: 'Every event is uniquely designed' },
                { icon: '🚚', title: 'We Come To You', desc: 'Full mobile bar service' },
                { icon: '🏆', title: 'Award Winning', desc: '5-star rated across all platforms' },
              ].map(v => (
                <div key={v.title} style={{
                  padding: '16px',
                  border: '1px solid rgba(212,168,83,0.1)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,83,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,168,83,0.1)'}
                >
                  <span style={{ fontSize: '22px' }}>{v.icon}</span>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px', color: 'var(--cream)', marginTop: '8px' }}>{v.title}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(240,230,211,0.45)', marginTop: '4px' }}>{v.desc}</div>
                </div>
              ))}
            </div>

            <a href="#reserve">
              <button className="btn-primary"><span>Book An Experience</span></button>
            </a>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { #story > div > div { grid-template-columns: 1fr !important; } }`}</style>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{
        padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 80px)',
        background: 'rgba(20,18,16,0.6)',
        borderTop: '1px solid rgba(212,168,83,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
              <div className="gold-line" />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Testimonials</span>
              <div className="gold-line" />
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '600', color: 'var(--cream)' }}>
              What Clients <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Say</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Sarah M.', event: 'Wedding Reception', stars: 5, quote: 'Nikhil and his team absolutely made our wedding. The custom cocktail menu, the LED bar, the flair show — our guests are still talking about it!' },
              { name: 'James T.', event: 'Corporate Gala', stars: 5, quote: 'Incredibly professional. The setup was stunning, drinks were perfect, and the team handled 200+ guests flawlessly. Will hire again.' },
              { name: 'Priya K.', event: 'Birthday Party', stars: 5, quote: 'The fire flair show was INCREDIBLE. Everyone was in awe. Drinks were creative and delicious. 10/10 would recommend to everyone!' },
            ].map((t, i) => (
              <div key={i} style={{
                padding: '32px',
                border: '1px solid rgba(212,168,83,0.12)',
                background: 'rgba(10,8,6,0.6)',
                position: 'relative',
              }}>
                {/* Quote mark */}
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '80px', lineHeight: 0.8,
                  color: 'rgba(212,168,83,0.1)',
                  position: 'absolute', top: '16px', left: '24px',
                  fontWeight: '700',
                }}>"</div>

                {/* Stars */}
                <div style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '16px', letterSpacing: '2px' }}>
                  {'★'.repeat(t.stars)}
                </div>

                <p style={{
                  color: 'rgba(240,230,211,0.75)',
                  fontSize: '15px', lineHeight: 1.75,
                  fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif',
                  marginBottom: '24px',
                }}>"{t.quote}"</p>

                <div style={{ borderTop: '1px solid rgba(212,168,83,0.1)', paddingTop: '16px' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--cream)' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--ember)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px' }}>{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BAND ── */}
      <div style={{
        padding: 'clamp(60px, 8vw, 80px) clamp(24px, 8vw, 80px)',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(200,96,42,0.15) 0%, rgba(10,8,6,0) 50%, rgba(212,168,83,0.08) 100%)',
        borderTop: '1px solid rgba(212,168,83,0.1)',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(30px, 5vw, 52px)',
          fontWeight: '600', color: 'var(--cream)',
          marginBottom: '16px',
        }}>Ready to Elevate Your <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Event?</em></h2>
        <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '16px', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px' }}>
          Get in touch today and let's create something unforgettable together.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#reserve"><button className="btn-primary"><span>Get a Free Quote</span></button></a>
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '1234567890'}`} target="_blank" rel="noopener noreferrer">
            <button className="btn-outline">WhatsApp Us</button>
          </a>
        </div>
      </div>
    </section>
  );
}
