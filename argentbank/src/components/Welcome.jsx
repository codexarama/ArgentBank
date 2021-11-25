/**
 * Render the Welcome component
 *
 * @param     {object}        props
 * @param     {string}        props.fullName          [complete user name]
 * @returns   {Reactnode}     jsx injected in DOM
 */
 export default function Welcome({ fullName }) {
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {fullName} !
      </h1>
    </header>
  );
}