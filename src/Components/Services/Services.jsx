import React from "react";
import "./services.css";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section id="service" className="service_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>Services</h4>
          <h1>What I'm Doing</h1>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          className="row text-center"
        >
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_service">
              <span className="ti-ink-pen"></span>
              <h3>Consultation and Requirements Gathering</h3>
              <p>

                Business Process Analysis: Assessing current asset management processes, identifying inefficiencies, and recommending improvements.
                Requirements Gathering: Understanding the client’s specific needs related to asset management, maintenance, and tracking.
                Solution Design: Proposing a tailored solution based on the company's requirements and industry best practices.
              </p>
              <a href="#contact">Place Order</a>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div className="single_service">
              <span className="ti-package"></span>
              <h3>Implementation and Configuration</h3>
              <p>

                SAP EAM Module Setup: Installing and configuring SAP EAM software (including SAP PM - Plant Maintenance) for managing equipment, facilities, and other assets.
                Integration: Ensuring SAP EAM integrates seamlessly with other SAP modules, such as SAP MM (Material Management), SAP PS (Project System), SAP SD (Sales and Distribution), and more.
                Customization: Adapting the SAP EAM system to meet specific business processes, including custom reports, workflows, and user interfaces.
              </p>
              <a href="#contact">Place Order</a>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div className="single_service">
              <span className="ti-truck"></span>
              <h3>Training and Knowledge Transfer</h3>
              <p>

                User Training: Conducting training sessions for end-users, ensuring they are well-versed in using SAP EAM for asset management and maintenance.
                Documentation: Providing clear documentation for users and administrators regarding the SAP EAM system’s functionality and processes.
              </p>
              <a href="#contact">Place Order</a>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-wow-offset="0"
          >
            <div className="single_service">
              <span className="ti-infinite"></span>
              <h3>Support and Maintenance</h3>
              <p>

                Post-Implementation Support: Offering ongoing support to address any issues that arise after the system goes live.
                Troubleshooting: Resolving system errors, handling user queries, and ensuring smooth operation.
                System Updates: Managing updates to the SAP EAM system to ensure it remains up-to-date with the latest features and security patches.
              </p>
              <a href="#contact">Place Order</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
