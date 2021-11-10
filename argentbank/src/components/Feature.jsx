import React from 'react';
import PropTypes from "prop-types";

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

/**
 * Feature PROPTYPES
 */

 Feature.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};