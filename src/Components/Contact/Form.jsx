import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    console.log(name, email, subject, message);

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    emailjs
      .send(
        "service_ns6jxe8",
        "template_oxnjbzr",
        templateParams,
        "VrrYupDuebtgZisdc"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };
  return (
    <form className="form" name="enq" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required="required"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required="required"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            required="required"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <textarea
            rows="6"
            name="message"
            className="form-control"
            placeholder="Your Message"
            required="required"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            value="Send message"
            name="submit"
            id="submitButton"
            className="btn btn-lg contact_btn"
            title="Submit Your Message!"
          >
            Click to submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
