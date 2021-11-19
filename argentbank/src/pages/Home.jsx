import React, {useEffect } from 'react';
import { featureData } from '../services/data';

import Hero from '../components/Hero';
import Feature from '../components/Feature';

/**
 * 
 * @returns 
 */
export default function Home() {
  useEffect(() => {
    document.title = "Argent Bank | Home";
  }, []);

  return (
    <>
      <Hero />
      <main className="main">
        {featureData.map((item) => (
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
