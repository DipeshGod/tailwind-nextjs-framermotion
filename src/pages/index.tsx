import { Inter } from 'next/font/google';
import TransitionEffect from '@/components/TransitionEffect';
import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <>
      <TransitionEffect />
      <main className={` ${inter.className}`}>
        <HeroSection />
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          Dark/Light
        </button>
        <Link href="/about">About</Link>
      </main>
    </>
  );
}
