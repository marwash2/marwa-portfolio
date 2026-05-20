import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    if (loading) return;

    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iezq7s5",
        "template_fp29bvd",
        form.current,
        "Ailc-LqcRuLyuD7Qh",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
        },
        () => {
          alert("Failed to send message.");
          setLoading(false);
        },
      );

    e.target.reset();
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Let’s Work Together</h2>

        <p>
          I’m always open to internships, freelance opportunities, and exciting
          frontend/full-stack projects.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="social-links">
          <a href="https://github.com/marwash2">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/marwa-shreif/">
            <FaLinkedin />
          </a>

          <a href="mailto:marwashreif332@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
