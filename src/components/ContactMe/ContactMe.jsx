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
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
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
              <div className="contact-details">
                <i className="bx bx-phone"></i>
                <h4 className="icon-name">Call Me:</h4>
                <p className="d-name">+91 98674 66628</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-details">
                <i className="bx bx-phone"></i>
                <h4 className="icon-name">Email Me:</h4>
                <p className="d-name">jay4emails@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-details">
                <i className="bx bx-phone"></i>
                <h4 className="icon-name">Location:</h4>
                <p className="d-name">Mumbai, India</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-details">
                <i className="bx bx-phone"></i>
                <h4 className="icon-name">Instagram:</h4>
                <p className="d-name">@jay4codes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
