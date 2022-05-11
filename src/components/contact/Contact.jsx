import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
// import emiljs form "emailjs-com";
// import { useRef } from 'react';


const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_title">
        <h5>Get In Tach</h5>
        <h2>Cobntact Me</h2>
      </div>
      <div className="container contact_container">
        {/* contact opctions */}
        <div className="contact_opction">
          <article className="contact_opction_data">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email:</h4>
            <h5>codewithashim@gmail.com</h5>
            <a href="mailto:codewithashim@gmail.com"> Send Message</a>
          </article>
          <article className="contact_opction_data">
            <RiMessengerLine className="contact_icon" />
            <h4>Messnger</h4>
            <h5>codewithashim</h5>
            <a href="https://m.me/codewithashim"> Send Message</a>
          </article>
          <article className="contact_opction_data">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+8801740737445</h5>
            <a href="https://api.whatsapp.com/send?phone+8801740737445">
              {" "}
              Send Message
            </a>
          </article>
        </div>
        {/* contact opction end */}
        <form action="#">
          <input
            type="text"
            name="full_name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            className="message"
            name="message"
            rows="7"
            placeholder="Type Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
