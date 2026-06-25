import "./Contact.css";
import { FaLinkedin, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";

import { useEffect, useRef } from "react";

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="contact" ref={sectionRef}>
      <div className="contact-layout">
        <div className="contact-header">
          <h1 className="contact-heading">Let's Connect</h1>
        </div>

        <div className="contactInfo">
          <div className="general-info">
            <div className="contact-description">
              <p>
                Open to internships, collaborative projects, and full-time
                software development opportunities. Let's build something
                amazing together.
              </p>
            </div>

            {/* Email */}
            <div className="email">
              {/* icon */}
              <div className="icon">
                <FaEnvelope className="email-icon" />
              </div>

              {/* text */}
              <div className="emailInfo">
                <h3>EMAIL</h3>
                <a href="mailto:anushkanimse2005@gmail.com">
                  anushkanimse2005@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="phone">
              {/* icon */}
              <div className="icon">
                <FaPhone className="phone-icon" />
              </div>

              {/* text */}
              <div className="phoneInfo">
                <h3>PHONE</h3>
                <p>Contact via Email or LinkedIn</p>
              </div>
            </div>

            {/* Link */}
            <div className="link">
              {/* icon */}
              <div className="icon">
                <FaLink className="link-icon" />
              </div>

              {/* text */}
              <div className="linkedinInfo">
                <h3>LINKEDIN</h3>
                <a
                  href="https://www.linkedin.com/in/anushka-nimse-96b15b29b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anushka Nimse
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form>
            <div className="form-row">
              {/* name */}
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>

              {/* email */}
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            {/* subject */}
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" required />

            {/* message */}
            <label>Message</label>
            <textarea
              placeholder="Tell me about the opportunity"
              rows="4"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
