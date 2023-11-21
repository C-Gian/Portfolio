import React from "react";
import "./Contact.css";
import { getImageUrl } from "../../utils";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const TEMPLATE_ID = "diocane";
const SERVICE_ID = "service_8euts8m";
const PUBLIC_KEY = "3IQVV8Ar9TJZwew5b";

export const Contact = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init(PUBLIC_KEY), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-t-container">
        <h1>Contact</h1>
      </div>
      <div className="contact-b-container">
        <form className="for" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="">name</label>
            <input ref={nameRef} placeholder="enter your name" />
          </div>
          <div className="form_group">
            <label htmlFor="">email</label>
            <input ref={emailRef} type="email" placeholder="enter your email" />
          </div>
          <button className="btn" disabled={loading}>
            subscribe
          </button>
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
