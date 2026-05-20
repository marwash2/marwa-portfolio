import "../styles/Skills.css";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "SQL",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="skills-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build modern applications.
        </p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
