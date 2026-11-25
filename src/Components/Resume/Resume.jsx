import { motion } from "framer-motion";
import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>Resume</h4>
          <h1>Education & Experience</h1>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          className="row"
        >
          <div
            className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <h4 className="timeline_title">Education</h4>
            <div className="single_timeline">
              <div className="edu_info">
                <span className="active_year">2009</span>
                <span className="active_company">
                  Business Informatics
                </span>
              </div>
              <div className="edu_content">
                <h4>Utrecht University of Applied Sciences</h4>
                <p>
                  It is a long established fact that a reader distracted
                  readable content looking at its layout.
                </p>
              </div>
            </div>
            <div className="single_timeline">
              <div className="edu_info">
                <span className="active_year">2021</span>
                <span className="active_company">
                  SAP S/4HANA Cloud Private Edition, Asset Management
                </span>
              </div>
              <div className="edu_content">
                <h4>SAP S/4HANA Cloud Private Edition, Asset Management</h4>
                <p>
                  <a href="https://www.credly.com/badges/5fe1cffb-1d96-49f2-9d57-959a8f9a3ee1/public_url" className="">link</a>
                </p>
              </div>
            </div>
            <div className="single_timeline">
              <div className="edu_info">
                <span className="active_year">2022</span>
                <span className="active_company">
                  SAP Certified Associate
                </span>
              </div>
              <div className="edu_content">
                <h4>SAP Field Service Management 2005</h4>
                <p>
                  <a href="https://www.credly.com/badges/9a201306-29fa-4a72-8309-640c0bcdae30/linked_in_profile" className=""> link </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <h4 className="timeline_title">Experience</h4>
            <div className="single_timeline">
              <div className="edu_info">
                <span className="active_year">2013</span>
                <span className="active_company">Web Designer & Marketing</span>
              </div>
              <div className="edu_content">
                <h4>Wrap Market</h4>
                <p>
                  It is a long established fact that a reader distracted
                  readable content looking at its layout.
                </p>
              </div>
            </div>
            <div className="single_timeline">
              <div className="edu_info">
                <span className="active_year">2016</span>
                <span className="active_company">
                  Professional Front-End Developer
                </span>
              </div>
              <div className="edu_content">
                <h4>ABC Studios</h4>
                <p>
                  It is a long established fact that a reader distracted
                  readable content looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
