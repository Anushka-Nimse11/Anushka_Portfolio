import "./About.css";
function About() {
  return (
    <div id="about">
      <div className="aboutMe">
        <div className="marks" data-aos="fade-right">
          <div className="project">
            <p className="number">2+</p>
            <p className="type">Major Projects</p>
          </div>

          <div className="internship">
            <p className="number">3</p>
            <p className="type">Internship</p>
          </div>

          <div className="CGPA">
            <p className="number">8.11</p>
            <p className="type">CGPA / 10</p>
          </div>

          <div className="percentage">
            <p className="number">69.83%</p>
            <p className="type">12th Score</p>
          </div>
        </div>

        <div className="aboutIntro" data-aos="fade-up">
          <h1>
            About<span>Me</span>
          </h1>
          <h3>Full Stack Developer</h3>
          <p>
            I'm a B.Tech student in Computer Science and Design at MET Bhujbal
            Knowledge City, Nashik. I am passionate about building modern,
            responsive, and user-friendly web applications using MERN stack
            technologies.
          </p>
          <br />
          <p>
            I have hands-on experience with React.js, Node.js, Express.js,
            MongoDB, HTML, CSS, and JavaScript. I enjoy turning ideas into
            real-world projects that are both functional and visually appealing.
          </p>
          <br />
          <p>
            I have worked on projects such as StayHub, a hotel table booking
            management system, and a personal portfolio, which helped me
            strengthen my skills in full-stack development, API integration,
            database management, and problem-solving.
          </p>
          <br />
          <p>
            My goal is to grow as a professional Full Stack Developer and
            contribute to impactful and scalable web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
