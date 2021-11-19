import PropTypes from 'prop-types';

/**
 * Render the Account component
 *
 * @param   {object}      props
 * @param   {string}      props.title           [account title]
 * @param   {string}      props.amount          [account amount]
 * @param   {string}      props.description     [account description]
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

/**
 * Account PROPTYPES
 */
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
