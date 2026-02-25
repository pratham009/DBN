'use client';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '1234567890';
const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'hello@noir.bar';

const contactChannels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sublabel: 'Chat with us instantly',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: '#25D366',
    gradientFrom: 'rgba(37,211,102,0.12)',
    gradientTo: 'rgba(37,211,102,0.04)',
    borderColor: 'rgba(37,211,102,0.25)',
    hoverBorder: 'rgba(37,211,102,0.6)',
    detail: 'Typically replies in minutes',
    cta: 'Open WhatsApp',
    href: () => `https://wa.me/${WHATSAPP}`,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    sublabel: 'Follow & DM us',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#E1306C',
    gradientFrom: 'rgba(225,48,108,0.12)',
    gradientTo: 'rgba(225,48,108,0.04)',
    borderColor: 'rgba(225,48,108,0.25)',
    hoverBorder: 'rgba(225,48,108,0.6)',
    detail: 'See our latest events & reels',
    cta: 'View Instagram',
    href: () => INSTAGRAM,
  },
  {
    id: 'email',
    label: 'Email Us',
    sublabel: 'Send a detailed inquiry',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    color: '#d4a853',
    gradientFrom: 'rgba(212,168,83,0.12)',
    gradientTo: 'rgba(212,168,83,0.04)',
    borderColor: 'rgba(212,168,83,0.25)',
    hoverBorder: 'rgba(212,168,83,0.6)',
    detail: 'We reply within 24 hours',
    cta: 'Send Email',
    href: () => `mailto:${EMAIL}`,
  },
];

export default function Reserve() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, form);
      setStatus({ type: 'success', msg: res.data.message });
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' });
    } catch {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again or contact us directly.' });
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 6000);
  };

  return (
    <section id="reserve" ref={ref} className="section-fade" style={{
      width: '100%', maxWidth: '100vw', overflow: 'hidden',
      background: `
        radial-gradient(ellipse 60% 60% at 0% 50%, rgba(200,96,42,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 40% 40% at 100% 50%, rgba(212,168,83,0.05) 0%, transparent 60%)
      `,
    }}>

      {/* ── CONTACT US SECTION ── */}
      <div style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 100px) clamp(60px, 8vw, 80px)',
        borderBottom: '1px solid rgba(212,168,83,0.08)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
              <div className="gold-line" />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Get In Touch</span>
              <div className="gold-line" />
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: '600', lineHeight: 1.0,
              color: 'var(--cream)', marginBottom: '16px',
            }}>
              Contact <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Us</em>
            </h2>
            <p style={{
              color: 'rgba(240,230,211,0.55)',
              fontSize: '16px', lineHeight: 1.7,
              maxWidth: '480px', margin: '0 auto',
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
            }}>
              Reach us on your preferred platform — we're always happy to chat about your event.
            </p>
          </div>

          {/* Contact Channel Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {contactChannels.map(ch => (
              <a
                key={ch.id}
                href={ch.href()}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(ch.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  padding: 'clamp(28px, 4vw, 44px) clamp(20px, 3vw, 36px)',
                  border: `1px solid ${hoveredCard === ch.id ? ch.hoverBorder : ch.borderColor}`,
                  background: hoveredCard === ch.id
                    ? `linear-gradient(135deg, ${ch.gradientFrom}, ${ch.gradientTo})`
                    : 'rgba(20,18,16,0.5)',
                  transition: 'all 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: hoveredCard === ch.id ? 'translateY(-6px)' : 'none',
                  boxShadow: hoveredCard === ch.id ? `0 20px 50px ${ch.color}18` : 'none',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${ch.color}, transparent)`,
                  opacity: hoveredCard === ch.id ? 1 : 0,
                  transition: 'opacity 0.35s ease',
                }} />

                {/* Icon circle */}
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  border: `1px solid ${ch.borderColor}`,
                  background: `${ch.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ch.color,
                  marginBottom: '20px',
                  transition: 'all 0.35s ease',
                  transform: hoveredCard === ch.id ? 'scale(1.1)' : 'scale(1)',
                }}>
                  {ch.icon}
                </div>

                {/* Text */}
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(20px, 2.5vw, 26px)',
                  fontWeight: '600',
                  color: hoveredCard === ch.id ? ch.color : 'var(--cream)',
                  marginBottom: '6px',
                  transition: 'color 0.3s ease',
                }}>{ch.label}</div>

                <div style={{
                  fontSize: '13px',
                  color: 'rgba(240,230,211,0.55)',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}>{ch.sublabel}</div>

                {/* Detail badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '6px 12px',
                  background: `${ch.color}10`,
                  border: `1px solid ${ch.color}25`,
                  fontSize: '11px',
                  color: ch.color,
                  letterSpacing: '0.05em',
                  marginBottom: '24px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ch.color, display: 'inline-block', animation: 'ping 2s ease-in-out infinite' }} />
                  {ch.detail}
                </div>

                {/* CTA */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: ch.color,
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                }}>
                  {ch.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.3s ease', transform: hoveredCard === ch.id ? 'translateX(4px)' : 'none' }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* OR divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '56px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.2))' }} />
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '20px', color: 'rgba(240,230,211,0.3)',
              fontStyle: 'italic', letterSpacing: '0.1em',
            }}>or fill out the form below</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,168,83,0.2))' }} />
          </div>
        </div>
      </div>

      {/* ── RESERVATION FORM ── */}
      <div style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 8vw, 100px) clamp(80px, 12vw, 140px)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px, 8vw, 80px)' }}>

          {/* Left – info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="gold-line" />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>Book Your Event</span>
            </div>

            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '600', lineHeight: 1.1,
              color: 'var(--cream)', marginBottom: '20px',
            }}>
              Reserve Your<br/>
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Experience</em>
            </h3>

            <p style={{ color: 'rgba(240,230,211,0.6)', fontSize: '15px', lineHeight: 1.8, marginBottom: '40px' }}>
              Fill out the form and we'll get back to you within 24 hours to confirm your booking and discuss the perfect setup for your event.
            </p>

            {/* Hours */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Availability</div>
              {[
                { day: 'Mon – Thu', hours: '5 PM – 1 AM' },
                { day: 'Fri – Sat', hours: '5 PM – 3 AM' },
                { day: 'Sunday', hours: '6 PM – 12 AM' },
              ].map(h => (
                <div key={h.day} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(212,168,83,0.08)',
                  fontSize: '14px',
                }}>
                  <span style={{ color: 'rgba(240,230,211,0.6)' }}>{h.day}</span>
                  <span style={{ color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif', fontSize: '17px' }}>{h.hours}</span>
                </div>
              ))}
            </div>

            {/* Quick contact again */}
            <div style={{ padding: '20px', border: '1px solid rgba(212,168,83,0.12)', background: 'rgba(20,18,16,0.4)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '14px' }}>Prefer to talk?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#25D366', fontSize: '14px' }}>
                  <span style={{ opacity: 0.7 }}>💬</span> WhatsApp: +{WHATSAPP}
                </a>
                <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--gold)', fontSize: '14px' }}>
                  <span style={{ opacity: 0.7 }}>✉️</span> {EMAIL}
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#E1306C', fontSize: '14px' }}>
                  <span style={{ opacity: 0.7 }}>📸</span> Instagram DMs
                </a>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange} style={{ appearance: 'none', cursor: 'pointer' }}>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="9+">9+ (Contact us)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Event Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} style={{ colorScheme: 'dark' }} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Preferred Time</label>
                  <select name="time" value={form.time} onChange={handleChange} style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select time</option>
                    {['5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(212,168,83,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Tell Us About Your Event</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Event type, venue, special requirements, theme, expected guest count..." rows={5} />
              </div>

              {status && (
                <div style={{
                  padding: '16px 20px',
                  background: status.type === 'success' ? 'rgba(37,211,102,0.08)' : 'rgba(225,48,108,0.08)',
                  border: `1px solid ${status.type === 'success' ? 'rgba(37,211,102,0.3)' : 'rgba(225,48,108,0.3)'}`,
                  color: status.type === 'success' ? '#25d366' : '#e1306c',
                  fontSize: '14px', borderRadius: '2px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <span>{status.type === 'success' ? '✓' : '!'}</span>
                  {status.msg}
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '4px', width: '100%' }}>
                <span>{loading ? 'Sending...' : 'Submit Booking Request'}</span>
              </button>

              <p style={{ fontSize: '12px', color: 'rgba(240,230,211,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
                We'll confirm within 24 hours. You can also reach us directly via WhatsApp for faster responses.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @media (max-width: 900px) {
          #reserve .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #reserve .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
