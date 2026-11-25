import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import portfolioData from "./data";
import Filter from "./Filter";
import "./portfolio.css";
import SingleProduct from "./SingleProduct";

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState([]);

  const [activeProduct, setActiveProduct] = useState(0);
  useEffect(() => {
    setFilteredData(portfolioData);
  }, []);

  return (
    <section id="portfolio" className="portfolio_area section-padding">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h4>Portfolio</h4>
          <h1>Some Inspiration</h1>
        </div>
        <div className="col-lg-12 text-center">
          <Filter
            mainData={portfolioData}
            setFilteredData={setFilteredData}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
          />
        </div>
        <motion.div layout className="row grid">
          <AnimatePresence>
            {filteredData?.length > 0 ? (
              filteredData.map((data, index) => (
                <SingleProduct key={index} data={data} />
              ))
            ) : (
              <h1 style={{ textAlign: "center" }}>Not Found 404 ERROR</h1>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
