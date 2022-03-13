import Form from './Form';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h2>Making travel easier</h2>
        <p>Search for personalized travel recommendations</p>
      </div>
      <div className="hero-form">
        <h2>Find your next vacation destination</h2>
        <Form/>
      </div>
    </section>
  );
}