'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Packages from '@/components/Packages';
import Events from '@/components/Events';
import Reserve from '@/components/Reserve';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Custom cursor
  useEffect(() => {
    setMounted(true);

    const cursor = document.createElement('div');
    const ring = document.createElement('div');
    cursor.className = 'cursor';
    ring.className = 'cursor-ring';
    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let ringX = 0, ringY = 0;
    let cursorX = 0, cursorY = 0;

    const moveCursor = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;
    };

    const animateRing = () => {
      ringX += (cursorX - ringX) * 0.12;
      ringY += (cursorY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', moveCursor);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
      if (document.body.contains(ring)) document.body.removeChild(ring);
    };
  }, []);

  if (!mounted) return null;

  return (
    <main style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Story />
      <Packages />
      <Events />
      <Reserve />
      <Footer />
    </main>
  );
}
