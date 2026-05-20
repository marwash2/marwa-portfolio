import "../styles/Hero.css";

function Hero() {
  return (
    <section id="about" className="hero">
      <div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-title">
          Marwa <span>Shreif</span>
        </h1>

        <h2 className="hero-subtitle">Frontend & Full Stack Developer</h2>

        <p className="hero-description">
          Frontend & Full Stack Developer passionate about building modern,
          responsive, and user-centered digital experiences. I enjoy
          transforming ideas into clean and scalable web applications using
          React, Next.js, and modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View Projects</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contact Me</button>
          </a>
          <a href="/resume.pdf" download>
            <button className="secondary-btn">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
