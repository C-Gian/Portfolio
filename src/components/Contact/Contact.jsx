import React from "react";
import "./Contact.css";
import { getImageUrl } from "../../utils";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const TEMPLATE_ID = "template_id";
const SERVICE_ID = "service_8euts8m";
const PUBLIC_KEY = "3IQVV8Ar9TJZwew5b";

export const Contact = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init(PUBLIC_KEY), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const button = document.getElementById("submit_button"); // Sostituisci con l'id o una referenza del tuo pulsante
    button.classList.add("activeLoading");
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      //alert("email successfully sent check inbox");
      button.classList.add("button-ok");
      button.textContent = "Success!";
    } catch (error) {
      button.classList.add("button-error");
      button.textContent = "Error!";
    } finally {
      button.classList.remove("activeLoading");
      setTimeout(() => {
        setLoading(false);
        button.classList.remove("button-ok");
        button.classList.remove("button-error");
        button.textContent = "Submit";
      }, 3000);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-t-container">
        <h1>Contact</h1>
      </div>
      <div className="contact-b-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-input">
            <input ref={nameRef} placeholder="Name" />
          </div>
          <div className="contact-input">
            <input ref={emailRef} type="email" placeholder="Email" />
          </div>
          <div className="contact-input message">
            <input ref={messageRef} placeholder="Message" />
          </div>
          <button id="submit_button" className="contact-button">
            Submit<span className="contact-bs" disabled={loading}></span>
          </button>
          {/* <button className="contact-button" disabled={loading}>
            subscribe
          </button> */}
        </form>
        {/* <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form> */}
      </div>
    </section>
  );
};

/* <footer id="contact" className="contact-container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:g.culaon.lav@gmail.com">g.culaon.lav@gmail.com</a>
        </li>

        <li className="link">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/gianluca-culaon-2380201a3/">
            Linkedin.com/CulaonGianluca
          </a>
        </li>

        <li className="link">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
          <a href="https://github.com/C-Gian">github.com/C-Gian</a>
        </li>
      </ul>
    </footer> */
