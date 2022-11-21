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
                <h2 className="h2-title text-white ">Let's Work Together</h2>
                <p>Let's Connect, give a call or email me any time.</p>
              </div>
            </div>
            {/* <form ref={form} onSubmit={sendEmail}>
              <div className="col-lg-4 col-md-7 work-togather-form">
                <label>Name: </label>
                <input
                  type="text"
                  name="user_name"
                  className="form-input-one subscribe-input"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-lg-4 col-md-7 work-togather-form">
                <label>Email: </label>
                <input
                  type="email"
                  name="user_email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="col-lg-4 col-md-7 work-togather-form">
                <label>Message: </label>
                <input
                  type="text"
                  name="message"
                  className="form-input-one subscribe-input"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="col-lg-4 col-md-7 work-togather-form">
                <div className="work-togather-form-btn">
                  <button type="submit" className="sec-btn" value="Send">
                    Send
                  </button>
                </div>
              </div>
            </form> */}
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
                  <i className="bx bx-phone"></i>
                  <h4 className="icon-name">Email Me:</h4>
                  <p className="d-name">jay4emails@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/jay-ra-jain/">
                <div className="contact-details">
                  <i className="bx bx-phone"></i>
                  <h4 className="icon-name">LinkedIn:</h4>
                  <p className="d-name">Jay Jain</p>
                </div>
              </a>
            </div>
            <div className="contact-info">
              <a href="https://github.com/Jay4Codes">
                <div className="contact-details">
                  <i className="bx bx-phone"></i>
                  <h4 className="icon-name">GitHub:</h4>
                  <p className="d-name">@Jay4Codes</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
