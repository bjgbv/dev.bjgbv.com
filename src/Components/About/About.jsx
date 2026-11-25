import React from "react";
import { about, award } from "../../constants/imgs";
import "./about.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="about_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>Profile</h4>
          <h1>At a glance</h1>
        </div>
        <div className="row">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            className="col-lg-6 col-sm-12 col-xs-12"
          >
            <div className="about_img">
              <img src={about} className="img-fluid" alt="profile_picture" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            className="col-lg-6 col-sm-12 col-xs-12 "
          >
            <div className="about_info">
              <h1>About Me</h1>
              <h4>
                Passionate and dedicated <br /> Freelancer from Amsterdam.
              </h4>
              <p>
                I'm a freelance SAP EAM (Enterprise Asset Management) and SAP FSM (Field Service Management) consultant with extensive experience helping businesses optimize their asset management processes.
                I specialize in implementing, customizing, and supporting SAP EAM and FSM solutions to improve efficiency, reduce costs, and ensure asset reliability.
                My expertise includes system integration, data migration, and end-user training, ensuring seamless transitions and successful project outcomes.{" "}
              </p>
            </div>
            <div className="award_area">
              <img src={award} alt="award" />
              <h4>
                International Freelance <br />
                Awards 2022
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
