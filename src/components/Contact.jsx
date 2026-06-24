import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-layout">
        <div className="contact-header">
          <h1 className="heading">Let's Connect</h1>
        </div>

        <div className="contactInfo">
          <div className="general-info">
            <div className="email">
              <h3>EMAIL</h3>
              <p>anushkanimse2005@gmail.com</p>
            </div>
            <div className="phone">
              <h3>PHONE</h3>
              <p>8999122840</p>
            </div>
            <div className="link">
              <a href="https://www.linkedin.com/in/anushka-nimse-96b15b29b/">
                <FaLinkedin />
                Anushka Nimse
              </a>
            </div>
          </div>

          {/* Form */}
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" required />
            <label>Message</label>
            <input
              type="text"
              placeholder="Tell me about opportunity"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
