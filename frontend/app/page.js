'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Packages from '@/components/Packages';
import Events from '@/components/Events';
import Reserve from '@/components/Reserve';


export default function Home() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  document.body.style.cursor = 'pointer';

  return () => {
    document.body.style.cursor = 'default';
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
      
    </main>
  );
}
