import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SingleProduct = ({ data }) => {
  return (
    <>
      <motion.div
        layout
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="col-lg-4 col-xs-12 col-sm-4 mix graphic social"
      >
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          className="single_portfolio"
        >
          <div className="port_image">
            <img className="img-fluid" src={data.imgUrl} alt="Portfolio" />
          </div>
          <div className="portfolio_text">
            <span>{data.brand}</span>
            <h3>
              <Link to={"/react-templates/ajmain/single_project"}>{data.title}</Link>
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SingleProduct;
