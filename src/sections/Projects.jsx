import "../styles/Projects.css";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern responsive portfolio website showcasing my projects, skills, and frontend development expertise.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/marwash2/marwa-portfolio",
    demo: "https://marwa-portfolioo.vercel.app",
    image: "/portfolio.jpg",
  },

  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with authentication, task organization, and responsive dashboard UI.",
    tech: ["Next.js", "Node.js", "SQL"],
    github: "https://github.com/marwash2/marwa-task-manager",
    demo: "https://marwa-task-manager.vercel.app",
    image: "/taskmanager.jpg",
  },

  {
    title: "Khidmati Platform",
    description:
      "A service platform connecting users with local services through a modern and responsive user experience.",
    tech: ["React", "JavaScript", "Responsive Design"],
    github: "https://github.com/marwash2/techtalks-services-marketplace",
    demo: "https://khidmati-pi.vercel.app",
    image: "/khidmati.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">Featured Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={project.github}>
                    <button>GitHub</button>
                  </a>

                  <a href={project.demo}>
                    <button className="demo-btn">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
