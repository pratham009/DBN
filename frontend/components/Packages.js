'use client';
import { useRef, useEffect, useState } from 'react';

const packages = [
  {
    name: 'Starter',
    price: '499',
    unit: 'event',
    tag: '',
    color: 'rgba(240,230,211,0.08)',
    border: 'rgba(212,168,83,0.15)',
    highlight: false,
    perks: [
      '2 Bartenders',
      'Up to 50 Guests',
      '3-Hour Service',
      '6ft LED Bar Setup',
      'Basic Cocktail Menu',
      'Ice & Garnishes Included',
    ],
  },
  {
    name: 'Premium',
    price: '999',
    unit: 'event',
    tag: 'Most Popular',
    color: 'rgba(200,96,42,0.12)',
    border: 'var(--ember)',
    highlight: true,
    perks: [
      '3 Bartenders',
      'Up to 150 Guests',
      '5-Hour Service',
      '12ft LED Bar Setup',
      'Custom Cocktail Menu',
      'Ice, Garnishes & Glassware',
      'Flair Bartending Show',
      'Event Coordinator',
    ],
  },
  {
    name: 'Elite',
    price: '1,799',
    unit: 'event',
    tag: '',
    color: 'rgba(212,168,83,0.06)',
    border: 'rgba(212,168,83,0.15)',
    highlight: false,
    perks: [
      '5 Bartenders',
      'Unlimited Guests',
      '8-Hour Service',
      '24ft Premium LED Bar',
      'Bespoke Cocktail Menu',
      'Full Drinkware & Ice',
      'Fire & Flair Show',
      'Dedicated Event Manager',
      'Post-Event Cleanup',
    ],
  },
];

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
            <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Packages</span>
            <div className="gold-line" />
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '600', color: 'var(--cream)',
          }}>Choose Your <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Experience</em></h2>
          <p style={{ color: 'rgba(240,230,211,0.5)', fontSize: '15px', marginTop: '16px', maxWidth: '460px', margin: '16px auto 0' }}>
            All packages include professional setup, licensed bartenders, and liability insurance.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {packages.map((pkg, i) => (
            <div key={pkg.name} style={{
              padding: pkg.highlight ? '44px 36px' : '36px 32px',
              background: pkg.color,
              border: `1px solid ${pkg.border}`,
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: pkg.highlight ? 'translateY(-8px)' : 'none',
              boxShadow: pkg.highlight ? '0 24px 60px rgba(200,96,42,0.18)' : 'none',
            }}
            onMouseEnter={e => { if (!pkg.highlight) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; } }}
            onMouseLeave={e => { if (!pkg.highlight) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; } }}
            >
              {/* Popular badge */}
              {pkg.tag && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--ember)',
                  padding: '5px 20px',
                  fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: 'var(--cream)', whiteSpace: 'nowrap',
                }}>{pkg.tag}</div>
              )}

              {/* Top line on highlight */}
              {pkg.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--ember), transparent)' }} />
              )}

              {/* Name */}
              <div style={{
                fontSize: '11px', letterSpacing: '0.3em', color: pkg.highlight ? 'var(--ember)' : 'var(--gold)',
                textTransform: 'uppercase', marginBottom: '16px',
              }}>{pkg.name}</div>

              {/* Price */}
              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'rgba(240,230,211,0.5)', verticalAlign: 'top', marginTop: '8px', display: 'inline-block' }}>$</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: '700', color: pkg.highlight ? 'var(--ember)' : 'var(--gold)', lineHeight: 1 }}>{pkg.price}</span>
                <span style={{ fontSize: '13px', color: 'rgba(240,230,211,0.4)', marginLeft: '6px' }}>/ {pkg.unit}</span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: `linear-gradient(90deg, ${pkg.border}, transparent)`, marginBottom: '24px' }} />

              {/* Perks */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pkg.perks.map(perk => (
                  <li key={perk} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(240,230,211,0.75)' }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                      background: pkg.highlight ? 'rgba(200,96,42,0.2)' : 'rgba(212,168,83,0.1)',
                      border: `1px solid ${pkg.highlight ? 'var(--ember)' : 'rgba(212,168,83,0.3)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', color: pkg.highlight ? 'var(--ember)' : 'var(--gold)',
                    }}>✓</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <a href="#reserve" style={{ display: 'block' }}>
                {pkg.highlight ? (
                  <button className="btn-primary" style={{ width: '100%' }}><span>Book This Package</span></button>
                ) : (
                  <button className="btn-outline" style={{ width: '100%' }}>Get Started</button>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: 'center', marginTop: '40px', color: 'rgba(240,230,211,0.35)', fontSize: '13px', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
          All prices are starting rates. Custom quotes available for large events. Contact us for a personalized package.
        </p>
      </div>
    </section>
  );
}
