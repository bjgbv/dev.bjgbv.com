/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../constants/imgs";
// import header css
import "./header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollNav = useRef(null);
  const Navigate = useNavigate();
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 150;
      scrollNav.current.classList.toggle("scrolling-nav", windowScroll);
    });
  }, []);
  return <div id="navigation" className="fixed-top navbar-light bg-faded site-navigation" ref={scrollNav}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="site-logo">
              <Link to={"/"} onClick={() => (document.documentElement.scrollTop = 0)}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>

          <div className="col-lg-7 col-md-9 col-sm-8 d-flex align-items-center justify-content-end ">
            <div className="header_right  w-100 mt-sm-4 mt-md-0">
              <nav id="main-menu" className="ms-auto">
                <ul>
                  <li>
                    <a href="#home" className="nav-link" onClick={() => Navigate("/")}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#about" onClick={() => Navigate("/")}>
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#service" onClick={() => Navigate("/")}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#resume" onClick={() => Navigate("/")}>
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#portfolio" onClick={() => Navigate("/")}>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#blog" onClick={() => Navigate("/")}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#faq" onClick={() => Navigate("/")}>
                      Faq
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contact" onClick={() => Navigate("/")}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div id="mobile_menu" className={mobileMenu ? "w-100 active" : "w-100"}>
                <nav id="navigation" className="me-auto w-100 p-3">
                  <ul>
                    <li>
                      <a className="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#service">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#resume">
                        Resume
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#faq">
                        Faq
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>

                <button className="slicknav_btn position-absolute" onClick={handleMobileMenu}>
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-8">
            <div className="social_profile">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/bjornjangerwig/" className="ti-linkedin" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Header;
