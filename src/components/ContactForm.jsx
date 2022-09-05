import React from "react";

const ContactForm = () => {
  return (
    <div>

         <h2  className="d-flex justify-content-center">Contact Me</h2>
      <input
        className="form-control form-control-lg bg-dark m-3"
        type="text"
        placeholder=".form-control-lg"
      />
      <input className="form-control bg-dark m-3" type="text" placeholder="Default input" />
      <input
        className="form-control form-control-sm m-3 bg-dark"
        type="text"
        placeholder=".form-control-sm"
      />
      <button className="p-3   d-flex ms-auto  bg-danger " type="input"> Button</button>
    </div>
  );
};

export default ContactForm;
