import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>React Portfolio Website</h3>
          <p>
            A personal portfolio built with React showcasing my skills and
            projects.
          </p>
          <div className="project-buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>
        </div>

        <div className="project-card">
          <h3>Next.js Task Manager</h3>
          <p>
            A full-stack task management application with authentication and
            database integration.
          </p>
          <div className="project-buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
