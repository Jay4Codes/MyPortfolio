import "./Footer.css";
import Main from "./main";
import { useGetSocialMediaQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { data: social, isFetching } = useGetSocialMediaQuery();
  const [socialDetails, setSocialDetails] = useState(social);
  useEffect(() => {
    setSocialDetails(social);
    console.log(socialDetails);
  }, [socialDetails, social]);
  if (isFetching) return "loading";

  return (
    <>
      <Main />
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
              <i className="fa fa-angle-up" aria-hidden="true"></i>
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
          <div className="footer-info">
            <div className="copywrite">
              <p>
                Copyright ©2022 All rights reserved | Made with ❤️ by James
                Waweru
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
