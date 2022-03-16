import Form from "./Form";
import Tours from './Tours';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h2>Your journey starts here</h2>
          <p>Search for personalized travel recommendations</p>
        </div>
        <div className="hero-form">
          <h2>Find your next vacation destination</h2>
          <Form />
        </div>
      </section>
      <section className="about-container">
          <div className="about">
          <h2 className="section-title">Inspire your travels</h2>
          <p>
            Whether you're looking for a lavish vacation or something within
            your budget, we have you covered. At Travel Genie, it's our mission
            to help you prioritize what matters most: crafting new memories with
            your loved ones as you explore the world together.
          </p>
          </div>
      </section>
      <section className="suggested-tours">
          <h2 className="section-title">Suggested tours</h2>
          <p className="description">
            The tours featured below are intended to give you ideas for what's
            possible on your next adventure. Treat them as inspiration.
          </p>
      </section>
      <Tours/>
    </>
  );
}
