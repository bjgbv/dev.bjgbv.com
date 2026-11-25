/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { singleImg } from "../../constants/imgs";

const SingleProject = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <section id="section_home" className="section-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>Single Project</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        className="single_project_area section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">
              <div className="single_project_details">
                <img src={singleImg} className="img-fluid" alt="imagea" />
                <h1>Winged moved stars, food creature seed night</h1>
                <div className="project_details_info">
                  <h4>Project Details</h4>
                  <ul>
                    <li>
                      <i className="fa fa-user"></i>
                      <b>Client: </b>Google, Inc
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      <b>Date: </b>10 May, 2022
                    </li>
                    <li>
                      <i className="fa fa-folder"></i>
                      <b>Category: </b>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="fa fa-eye"></i>
                      <b>Project Url: </b>
                      <a href="#">www.google.com</a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vitae risus nec dui venenatis dignissim. Aenean vitae metus in
                  augue pretium ultrices. Duis dictum eget dolor vel
                  blandit.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Fusce vitae risus nec dui venenatis dignissim. Aenean
                  vitae metus in augue pretium ultrices. Duis dictum eget dolor
                  vel blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProject;
