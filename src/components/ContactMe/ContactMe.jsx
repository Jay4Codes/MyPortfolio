import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-me2-dec"></div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 col-md-12">
              <div className="work-togather-text">
                <h2 className="h2-title text-white ">Let's Work Together</h2>
                <p>Let's Connect, give a call or email me any time.</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  name="message"
                  className="form-input-one subscribe-input"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="work-togather-form-btn">
                <button type="submit" className="sec-btn">
                  Subscribe Now
                </button>
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
