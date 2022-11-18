import "./Footer.css";
import Main from "./scrollTop";
const Footer = () => {
  return (
    <>
      <Main />
      {/* <hr /> */}
      <section>
        <div className="my-footer">
          <div className="switch">
            <div className="circle"></div>
          </div>
          <div className="progress-wrap">
            <svg
              className="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />

              <p>eee</p>
            </svg>
            {/* <i className="bx bxs-chevron-up"></i> */}
            <i className="bx bx-chevron-up"></i>
          </div>
          <div className="footer-info">
            <div className="copywrite">
              <p>
                Copyright ©2022 All rights reserved | Made with ❤️ by Jay Jain
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
