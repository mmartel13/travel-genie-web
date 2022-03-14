import Form from './Form';

export default function Hero() {
  return (
    <>
     <section className="hero">
      <div className="hero-copy">
        <h2>You deserve to vacation better</h2>
        <p>Search for personalized travel recommendations</p>
      </div>
      <div className="hero-form">
        <h2>Find your next vacation destination</h2>
        <Form/>
      </div>
    </section>
    <section>
    <div>
        <h2 className='description-title'>Experience Travel Genie</h2>
        <p className='description'>
          Whether you're looking for a lavish vacation or something within your budget, we have you covered. At Travel Genie, it's our mission to help you prioritize what matters most: crafting new memories with your loved ones as you explore the world together.
        </p>
      </div>
    </section>
    </>
  );
}