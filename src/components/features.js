export default function Features() {
    return (
      <section id="features" className="features">
        <h2>Key Features</h2>
        <p className="subtitle">Everything you need to manage your freelance workflow in one place.</p>
        <div className="features-grid">
          <div className="feature-item" data-aos="fade-up">
            <img src="https://img.icons8.com/ios/64/time.png" alt="Time Tracking" />
            <h3>Time Tracking</h3>
            <p>Track hours and tasks with ease using our built-in timer.</p>
          </div>
          <div className="feature-item" data-aos="fade-up">
            <img src="https://img.icons8.com/ios/64/invoice.png" alt="Invoicing" />
            <h3>Invoicing</h3>
            <p>Send professional invoices to clients in just a few clicks.</p>
          </div>
          <div className="feature-item" data-aos="fade-up">
            <img src="https://img.icons8.com/ios/64/line-chart.png" alt="Analytics" />
            <h3>Analytics</h3>
            <p>See insights on revenue, time usage, and productivity.</p>
          </div>
        </div>
      </section>
    );
  }
  