function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Marwa</h2>
      <ul style={styles.list}>
        <li>
          <a href="#about" style={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" style={styles.link}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" style={styles.link}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  list: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;
