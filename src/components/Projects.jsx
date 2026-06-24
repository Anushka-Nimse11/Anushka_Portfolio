import "./Projects.css";
import { FaCheck, FaGithub } from "react-icons/fa";
function Projects() {
  const projects = [
    // 1st project Zerodha
    {
      date: "Mar 2026 - Jun 2026",
      title: "Web-Based Stock Trading Platform",
      description:
        "Developed a full-stack Zerodha-inspired trading simulation platform using the MERN stack with modular architecture. It supports secure authentication, portfolio tracking, simulated buy/sell trading, and a role-based admin dashboard with REST API integration.",
      skills: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      features: [
        "Stock market trading simulation",
        "Modular architecture",
        "REST API integration for data handling",
      ],

      githubLink:
        "https://github.com/Anushka-Nimse11/Web-Based-Stock-Trading-Platform",
    },

    // 2nd project StayHub
    {
      date: "Sep 2025 - Jan 2026",
      title: "StayHub",
      description:
        "Developed a full-stack property booking platform using the MERN stack and MVC architecture, enabling users to browse and book various stay options. Implemented secure authentication, CRUD operations, and a feedback and rating system.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      features: [
        "Property browsing",
        "User feedback and ratings",
        "Secure authentication",
        "Responsive UI design",
      ],

      githubLink: "https://github.com/Anushka-Nimse11/stayHub",
    },

    // 3rd Project Table booking
    {
      date: "Feb 2025 - May 2025",
      title: "Hotel Table Booking Management System",
      description:
        "Developed a web-based hotel table booking system with separate Admin and User dashboards, enabling users to reserve tables online. Implemented secure authentication, CRUD operations, and a responsive user-friendly interface.",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "CSS", "MySQL"],
      features: [
        "Online table reservation",
        "Admin and User dashboards",
        "Secure authentication",
        "CRUD operations",
        "Responsive UI design",
      ],

      githubLink: "https://github.com/Anushka-Nimse11/hotelManagement",
    },
  ];

  return (
    <div id="projects">
      <div className="project-layout">
        {/* header */}
        <div className="project-header">
          <h1 className="heading">Projects</h1>
        </div>

        {/* 2 columns of project */}
        <div className="projectInfo">
          {projects.map((project, index) => (
            <div className="MainProject" key={index}>
              <p className="date">{project.date}</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <d-iv className="project-skills-wrap">
                {project.skills.map((skill, i) => (
                  <span className="project-custom-skills" key={i}>
                    {skill}
                  </span>
                ))}
              </d-iv>

              <div className="project-feature-wrap">
                {project.features.map((feature, i) => (
                  <span className="project-custom-feature" key={i}>
                    <FaCheck className="check-icon" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <FaGithub className="github-icon" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
