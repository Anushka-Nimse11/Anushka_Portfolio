import "./Skills.css";
import {
  FaCode,
  FaTools,
  FaDatabase,
  FaServer,
  FaLayerGroup,
  FaReact,
  FaJava,
  FaBook,
  FaRocket,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "RESTful API Integration"],
    },

    {
      title: "Programming Languages",
      icon: <FaJava />,
      skills: ["Java", "JavaScript"],
    },

    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL"],
    },

    {
      title: "Deployment",
      icon: <FaRocket />,
      skills: ["Netlify", "Vercel", "Render"],
    },

    {
      title: "Tools & IDEs",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  const shelfIcons = [
    { name: "JavaScript", icon: <SiJavascript className="theme-js" /> },
    { name: "React.js", icon: <FaReact className="theme-react" /> },
    { name: "Java", icon: <FaJava className="theme-java" /> },
    { name: "MongoDB", icon: <SiMongodb className="theme-mongo" /> },
  ];

  return (
    <div id="skills">
      <div className="skills-layout" data-aos="fade-up">
        {/* Header Matching Your Portfolio Style */}
        <div className="skills-header">
          <h1 className="name">Skills</h1>
        </div>

        {/* Reference 3-Column Card Architecture */}
        <div className="skills-cards-grid">
          {categories.map((cat, index) => (
            <div className="skills-category-card" key={index}>
              <div className="category-icon-frame">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skills-pills-wrap">
                {cat.skills.map((skill, sIndex) => (
                  <span className="skills-custom-pill" key={sIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Logo Shelf Imbued With Your Dual Neon Edge Glows */}
        <div className="skills-shelf-row">
          {shelfIcons.map((item, index) => (
            <div className="skills-shelf-block" key={index}>
              <div className="shelf-icon-embed">{item.icon}</div>
              <span className="shelf-icon-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
