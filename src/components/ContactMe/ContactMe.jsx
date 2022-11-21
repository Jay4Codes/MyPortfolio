import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5u50tp6",
        "template_mddl1l8",
        form.current,
        "dl_3hfYXArwJqJqm8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-me2-dec"></div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="work-togather-text">
                <h2>Let's Work Together</h2>
                <p>Let's Connect, give a call or email me any time.</p>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#work">Projects</a>
                    </li>
                    <li>
                      <a href="#experience">Experience</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#education">Education</a>
                    </li>
                    <li>
                      <a href="#achievements">Achievements</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Jay4Codes/MyPortfolio.git"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.google.com/document/d/1Ep7OppV-X7o_bXbw_TiIAV-t1M0IGAudBJhZThfsxAI/edit?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-6 mb-50">
                <div className="footer-widget">
                  <h3>Message</h3>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="subscribe-form">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        required
                      />
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                      />
                      <input
                        type="text"
                        name="message"
                        placeholder="Message"
                        required
                      />
                      <button type="submit" className="sec-btn" value="Send">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-info">
            <a href="tel:+91 9867466628">
              <div className="contact-details">
                <i className="bx bx-phone"></i>
                <h4 className="icon-name">Call Me:</h4>
                <p className="d-name">+91 98674 66628</p>
              </div>
            </a>
          </div>
          <div className="contact-info">
            <a href="mailto:jay4emails@gmail.com">
              <div className="contact-details">
                <i className="bx bxl-gmail"></i>
                <h4 className="icon-name">Email Me:</h4>
                <p className="d-name">jay4emails@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/jay-ra-jain/">
              <div className="contact-details">
                <i className="bx bxl-linkedin"></i>
                <h4 className="icon-name">LinkedIn:</h4>
                <p className="d-name">Jay Jain</p>
              </div>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://github.com/Jay4Codes">
              <div className="contact-details">
                <i className="bx bxl-github"></i>
                <h4 className="icon-name">GitHub:</h4>
                <p className="d-name">@Jay4Codes</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
