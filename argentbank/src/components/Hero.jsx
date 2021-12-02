import PropTypes from 'prop-types';

const subtitles = ['No fees.', 'No minimum deposit.', 'High interest rates.'];

/**
 * Render the Hero component
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

/**
 * Hero PROPTYPES
 */
Hero.propTypes = {
  index: PropTypes.number,
  subtitle: PropTypes.string,
};
