import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { Button } from './Button';
// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_Artemis1503",
        "template_6hvtecr",
        form.current,
        "EgQfKi4cyt4Ggsm-d"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="header">


        <h3 className='subheadlineContact'>
          Contact Me
        </h3>
        <p>Need to message me? Feel free to fill out the form below or message me over on linkedin.</p>
      </div>
      <div className="ContactMeForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;