export function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Book a demo
        </p>
        <h2>Ready to launch your store?</h2>
        <p>Tell us what you need and we will help choose the best order model for your group.</p>
      </div>
      <form className="contact-form">
        <label>
          <span>Name</span>
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Organization</span>
          <input type="text" placeholder="School, PTA, team, or group" />
        </label>
        <button className="button primary" type="submit">
          Request a Call
        </button>
      </form>
    </section>
  );
}
