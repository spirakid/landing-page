import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    const response = await fetch("https://formspree.io/f/mrbqaqrw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus("Message sent!");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or want to work with us? Send us a message below.</p>

      <form onSubmit={handleSubmit} data-aos="fade-up">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
        <p className="form-status">{status}</p>
      </form>
    </section>
  );
}
