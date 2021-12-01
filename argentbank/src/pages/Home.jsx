import React, {useEffect } from 'react';
import { featureData } from '../services/data';

import Hero from '../components/Hero';
import Feature from '../components/Feature';

/**
 * Render the Home component
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Home() {
  useEffect(() => {
    document.title = "Argent Bank | Home";
    document.body.classList.remove('bg-dark')
  }, []);

  return (
    <>
      <Hero />
      <main className="main home">
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
