export default function Pricing() {
    return (
      <section id="pricing" className="pricing">
        <h2>Our Pricing Plans</h2>
        <p className="subtitle">Simple and transparent pricing, no hidden fees.</p>
        <div className="pricing-grid">
          <div className="plan" data-aos="fade-up">
            <h3>Basic</h3>
            <p className="price">₦5,000<span>/month</span></p>
            <ul>
              <li>1 Project</li>
              <li>Email Support</li>
            </ul>
            <button>Choose Plan</button>
          </div>
  
          <div className="plan pro" data-aos="fade-up">
            <div className="badge">Most Popular</div>
            <h3>Pro</h3>
            <p className="price">₦12,000<span>/month</span></p>
            <ul>
              <li>Unlimited Projects</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
            </ul>
            <button>Choose Plan</button>
          </div>
  
          <div className="plan" data-aos="fade-up">
            <h3>Enterprise</h3>
            <p className="price">₦25,000<span>/month</span></p>
            <ul>
              <li>All Pro Features</li>
              <li>Team Access</li>
              <li>Custom Integrations</li>
            </ul>
            <button>Choose Plan</button>
          </div>
        </div>
      </section>
    );
  }
  