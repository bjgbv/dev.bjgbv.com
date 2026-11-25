/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-sm-12 col-xs-12"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div className="single_footer">
              <p className="copyright">
                Copyright &copy; 2022 | All Rights Reserved.
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-12 col-xs-12 text-center wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div className="footer_scroll_top">
              <p onClick={scrollTop}>
                Back to top <span className="ti-arrow-up"></span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12 text-center">
            <div className="single_footer">
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
