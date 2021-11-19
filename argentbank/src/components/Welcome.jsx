export default function Welcome({ fullName }) {
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {fullName}!
      </h1>
    </header>
  );
}