'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home',     href: '#home' },
    { label: 'Events', href: '#event' },
    { label: 'About Us', href: '#story' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 500,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,8,6,0.96)' : 'rgba(10,8,6,0.5)',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled
          ? '1px solid rgba(212,168,83,0.15)'
          : '1px solid rgba(212,168,83,0.06)',
      }}>
        {/* ── Main bar ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '14px 40px' : '22px 40px',
          transition: 'padding 0.4s ease',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
        }}>

          {/* ── Logo (left) ── */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: '700',
                color: 'var(--gold)',
                letterSpacing: '0.18em',
              }}>Drinks by Nikhil</span>
              <span style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(240,230,211,0.45)',
                textTransform: 'uppercase',
                marginTop: '3px',
              }}>Craft Cocktail Bar</span>
            </div>
          </Link>

          {/* ── Desktop: centered nav links ── */}
          <div className="desktop-nav" style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            {navLinks.map(link => (
              <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
            ))}
          </div>

          {/* ── Desktop: social icons (right) ── */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <SocialIcon href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '1234567890'}`} label="WhatsApp"><WhatsAppIcon /></SocialIcon>
            <SocialIcon href={process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com'} label="Instagram"><InstaIcon /></SocialIcon>
            <SocialIcon href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hello@Drinks by Nikhil.bar'}`} label="Email"><EmailIcon /></SocialIcon>
          </div>

          {/* ── Mobile: hamburger ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', display: 'none', zIndex: 2,
            }}
          >
            <div style={{ width: '26px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ width: '100%', height: '1.5px', background: 'var(--gold)', display: 'block', borderRadius: '2px', transition: 'all 0.35s ease', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
              <span style={{ width: '65%', height: '1.5px', background: 'var(--gold)', display: 'block', borderRadius: '2px', transition: 'all 0.35s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: '100%', height: '1.5px', background: 'var(--gold)', display: 'block', borderRadius: '2px', transition: 'all 0.35s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
            </div>
          </button>
        </div>

        {/* ── Mobile: smooth pop-down dropdown ── */}
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '360px' : '0px',
          transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(10,8,6,0.98)',
          borderTop: menuOpen ? '1px solid rgba(212,168,83,0.1)' : 'none',
        }} className="mobile-dropdown">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '12px 0 28px',
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '17px 40px',
                  color: 'rgba(240,230,211,0.82)',
                  textDecoration: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(212,168,83,0.06)',
                  transition: 'color 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(212,168,83,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,230,211,0.82)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ width: '18px', height: '1px', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
                {link.label}
              </a>
            ))}

            {/* Social row in dropdown */}
            <div style={{ display: 'flex', gap: '12px', padding: '22px 40px 0', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(240,230,211,0.28)', textTransform: 'uppercase', marginRight: '6px' }}>Follow</span>
              <SocialIcon href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '1234567890'}`} label="WhatsApp"><WhatsAppIcon /></SocialIcon>
              <SocialIcon href={process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com'} label="Instagram"><InstaIcon /></SocialIcon>
              <SocialIcon href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hello@Drinks by Nikhil.bar'}`} label="Email"><EmailIcon /></SocialIcon>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-dropdown { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* ── NavLink with animated underline ── */
function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        color: hovered ? 'var(--gold)' : 'rgba(240,230,211,0.75)',
        fontSize: '12px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        fontFamily: 'DM Sans, sans-serif',
        textDecoration: 'none',
        padding: '10px 22px',
        transition: 'color 0.3s ease',
      }}
    >
      {children}
      <span style={{
        position: 'absolute',
        bottom: '6px',
        left: '22px',
        width: 'calc(100% - 44px)',
        height: '1px',
        background: 'var(--gold)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
        display: 'block',
      }} />
    </a>
  );
}

/* ── Social icon button ── */
function SocialIcon({ href, label, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '34px', height: '34px',
        border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(212,168,83,0.28)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--Drinks by Nikhil)' : 'var(--gold)',
        background: hovered ? 'var(--gold)' : 'transparent',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
}