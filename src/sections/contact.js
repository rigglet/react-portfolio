import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//email
import emailjs from "emailjs-com";
//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import ContactIconBar from "../components/ContactIconBar";
//icon
import { FaWindowClose } from "react-icons/fa";
//SVGs
import Plane from "../img/plane";
import Trail from "../img/trail";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const notify = (type) => {
    const toastStyle = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: "0.. 1",
    };
    switch (type) {
      case "SUCCESS":
        toast.dark("Message sent", toastStyle);
        break;
      case "FAILURE":
        toast.dark("Message failed to send", toastStyle);
        break;
      default:
        toast.dark("Nothing to report", toastStyle);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (result.status === 200) {
          //sent message
          //console.log("Message sent");
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
          notify("SUCCESS");
        }
      })
      .catch((err) => {
        console.log(err);
        notify("FAILURE");
      });
  };

  const CloseButton = ({ closeToast }) => (
    <FaWindowClose className="toastClose" onClick={closeToast} />
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection className="section fullheight section-dark" id="contact">
      <ContactForm>
        <ToastContainer
          closeButton={CloseButton}
          // closeButton={false}
          transition={Zoom}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <h1 className="section-heading">Contact Me</h1>

        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="formitem">
            <label>Name:</label>
            <input
              id="name"
              autoComplete="off"
              name="user_name"
              type="text"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="formitem">
            <label>Subject:</label>
            <input
              id="subject"
              autoComplete="off"
              name="user_subject"
              type="text"
              value={formData.user_subject}
              onChange={handleChange}
            />
          </div>
          <div className="formitem">
            <label>Email:</label>
            <input
              id="email"
              autoComplete="off"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <div className="formitem">
            <label htmlFor="message">Message:</label>
            <textarea
              id="msg"
              name="message"
              autoComplete="off"
              cols="15"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Send Message" />
        </form>
      </ContactForm>
      <ContactInfo>
        <div className="contact-images">
          <Trail />
          <Plane />
        </div>
        <ContactIconBar size="40px" color="whitesmoke" />
      </ContactInfo>
    </ContactSection>
  );
};

const ContactSection = styled(motion.div)`
  display: flex;
  justify-content: space-around;
`;

const ContactForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    margin-bottom: 1rem;
  }
  form {
    row-gap: 0.5rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .formitem {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
  }
  input,
  textarea {
    width: 30vw;
    font-family: "poppins", sans-serif;
    padding: 0.3rem;
    font-size: 1.3rem;
    resize: none;
    &:active,
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
    }
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8rem 8rem 2rem 0rem;

  .contact-images {
    height: 100%;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
  }
`;

export default Contact;
