import React, { useEffect } from "react";

const Filter = ({
  mainData,
  setFilteredData,
  activeProduct,
  setActiveProduct
}) => {
  useEffect(
    () => {
      if (activeProduct === 0) {
        setFilteredData(mainData);
      }
      const filteredData = mainData.filter(e => e.id.includes(activeProduct));

      setFilteredData(filteredData);
    },
    [activeProduct, setFilteredData, mainData]
  );
  return (
    <ul className="portfolio-filters text-center">
      <li
        className={activeProduct === 0 ? "filter active" : "filter"}
        onClick={() => setActiveProduct(0)}
      >
        all
      </li>
      <li
        className={activeProduct === "marketing" ? "filter active" : "filter"}
        onClick={() => setActiveProduct("marketing")}
      >
        Marketing
      </li>
      <li
        className={activeProduct === "seo" ? "filter active" : "filter"}
        onClick={() => setActiveProduct("seo")}
      >
        seo
      </li>
      <li
        className={activeProduct === "projects" ? "filter active" : "filter"}
        onClick={() => setActiveProduct("projects")}
      >
        projects
      </li>
      <li
        className={activeProduct === "social" ? "filter active" : "filter"}
        onClick={() => setActiveProduct("social")}
      >
        Social
      </li>
    </ul>
  );
};

export default Filter;
