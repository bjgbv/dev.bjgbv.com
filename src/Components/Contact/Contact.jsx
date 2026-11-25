import React from "react";
import Adress from "./Adress";
import Form from "./Form";
// import  style
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact_us section-padding">
      <div className="container">
        <div className="section-title cmtop text-center">
          <h4>Have a question?</h4>
          <h1>Say Hello!</h1>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          className="row"
        >
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <Adress />
          </div>
          <div className="col-lg-8 col-sm-12 col-xs-12">
            <div className="contact">
              <Form />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
