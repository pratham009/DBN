'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import Reserve from '@/components/Reserve';
import Footer from '@/components/Footer';

export default function Home() {
  // Custom cursor
  useEffect(() => {
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
      document.body.removeChild(cursor);
      document.body.removeChild(ring);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Events />
      <Reserve />
      <Footer />
    </main>
  );
}