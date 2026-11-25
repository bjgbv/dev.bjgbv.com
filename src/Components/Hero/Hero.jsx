import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { hero } from "../../constants/imgs";
import "./home.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section id="home" className="home_bg">
      <div className="container">
        <div className="row">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            className="col-lg-7 col-sm-12 col-xs-12 no-padding"
          >
            <div className="about_me_content">
              <h1>
                Hello! <br /> This is Björn <br />{" "}
                <span className="rotate">
                  <Typewriter
                    className="hello"
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Consultant")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("SAP EAM")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("SAP FSM")
                        .pauseFor(2000)
                        .start();
                    }}
                    options={{
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>
            <div className="home_btn">
              <a href="#contact" className="home_one">
                Download CV <i className="fa fa-download"></i>
              </a>
              <ModalVideo
                channel="youtube"
                isOpen={isVideoOpen}
                videoId="RXv_uIN6e-Y"
                onClose={() => setVideoOpen(false)}
              />
              <a
                href="#video"
                className="video-play"
                onClick={() => setVideoOpen(true)}
              >
                <i className="fa fa-play"></i>{" "}
                <span className="video-title">Video Tour</span>
              </a>
            </div>
          </motion.div>
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              className="profile_img"
            >
              <img src={hero} className="img-fluid" alt="profile_image" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
