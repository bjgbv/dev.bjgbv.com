import React from "react";
import { blog1, blog2, blog3 } from "../../constants/imgs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  return <section id="blog" className="blog_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>News</h4>
          <h1>Latest blogs</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-xs-12 ">
            <motion.div whileInView={{ opacity: [0, 1], y: [50, 0] }} className="single_blog">
              <img src={blog1} className="img-fluid" alt="images" />
              <span>June 05, 2022 / By Admin</span>
              <h2>
                <Link to={"/react-templates/ajmain/single_blog"}>
                  Autumn is a second spring when every leaf is a flower
                </Link>
              </h2>
              <p>
                Because when a visitor first lands on your website stranger
                They have to get to know you in order to want to read.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 ">
            <motion.div className="single_blog single_blog_two" whileInView={{ opacity: [0, 1], y: [50, 0] }}>
              <span>June 06, 2022 / By Admin</span>
              <h2>
                <Link to={"/react-templates/ajmain/single_blog"}>
                  Never let your memories be greater than your dreams
                </Link>
              </h2>
              <p>
                Because when a visitor first lands on your website stranger
                They have to get to know you in order to want to read.
              </p>
              <img src={blog2} className="img-fluid" alt="images" />
            </motion.div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 ">
            <motion.div whileInView={{ opacity: [0, 1], y: [50, 0] }} className="single_blog">
              <img src={blog3} className="img-fluid" alt="images" />
              <span>June 07, 2022 / By Admin</span>
              <h2>
                <Link to={"/react-templates/ajmain/single_blog"}>
                  Self-observation is the first step of inner unfolding
                </Link>
              </h2>
              <p>
                Because when a visitor first lands on your website stranger
                They have to get to know you in order to want to read.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};

export default Blog;
