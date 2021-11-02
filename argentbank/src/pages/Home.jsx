import React from 'react';
import { homeData } from '../services/data';

import NavbarIn from '../components/NavbarIn';
import Hero from '../components/Hero';
import Feature from '../components/Feature';

export default function Home() {
  return (
    <>
      <NavbarIn />
      <Hero />
      <main className="main">
        {homeData.map((item) => (
          <Feature
            key={item.id}
            src={item.icon}
            alt={item.alt}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </main>
    </>
  );
}
