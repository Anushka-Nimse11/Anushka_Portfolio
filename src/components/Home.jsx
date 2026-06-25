import "./Home.css";
import profileImg from "../assets/Anushka.jpg";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div id="home">
      <div className="home">
        <div className="intro">
          <h3 className="hello">Hello, It's Me</h3>
          <h1 className="name">Anushka Nimse</h1>
          <h3 className="profession">
            And I'm a <span>Full Stack Developer</span>
          </h3>

          <p>
            Passionate about building modern and responsive web applications
            with a focus on creating seamless user experiences and scalable
            solutions.
          </p>

          <a href="/AnushkaNimse.pdf" className="resume" download>
            <span>Download Resume</span>
            <FaDownload />
          </a>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/anushka-nimse-96b15b29b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Anushka-Nimse11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:anushkanimse2005@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="image">
          <img src={profileImg} alt="Anushka" />
        </div>
      </div>
    </div>
  );
}

export default Home;
