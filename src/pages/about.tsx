import TransitionEffect from '@/components/TransitionEffect';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <TransitionEffect />
      <div>About</div>
      <Link href="/">Home</Link>
    </>
  );
};

export default About;
