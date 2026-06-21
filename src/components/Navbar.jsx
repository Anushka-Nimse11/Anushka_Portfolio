import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <>
      <nav className="navbar">
        <h1>
          AN<span>.</span>
        </h1>
        <ul>
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={() => setActive("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setActive("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
