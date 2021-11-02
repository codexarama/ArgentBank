import React from 'react';

export default function Feature({ src, alt, title, paragraph }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={src} alt={alt} className="feature-icon" />
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </section>
  );
}
