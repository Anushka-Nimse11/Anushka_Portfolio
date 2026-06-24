import { useEffect } from "react";
import "./Projects.css";
import { FaCheck, FaGithub } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".MainProject, .project-header").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
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
        <div className="project-header">
          <h1 className="project-heading">Projects</h1>
        </div>

        <div className="projectInfo">
          {projects.map((project, index) => (
            <div className="MainProject" key={index}>
              <p className="date">{project.date}</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <div className="project-skills-wrap">
                {project.skills.map((skill, i) => (
                  <span className="project-custom-skills" key={i}>
                    {skill}
                  </span>
                ))}
              </div>

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
