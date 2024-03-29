import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import {
  buttonVariants,
  flyIn,
  planeVariants,
  trailVariants,
  slideRight,
  slideDown,
  slideUp,
} from "../styles/animations";
//email
import emailjs from "emailjs-com";
//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import ContactIconBar from "../components/ContactIconBar";
import useScroll from "../components/useScroll";
//icon
import Icon from "../components/Icon";
//SVGs
import Plane from "../img/plane";
import Trail from "../img/trail";

const Contact = ({ contactRef }) => {
  const [element, controls] = useScroll();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

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
    //<FaWindowClose className="toastClose" onClick={closeToast} />
    <Icon
      icon="FaWindowClose"
      color="#689ed0"
      size=""
      title="Close message"
      onClick={closeToast}
    />
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection
      className="section-dark fullheight"
      id="contact"
      ref={element}
    >
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

      <div className="container container-dark" ref={contactRef}>
        <motion.div
          initial="initial"
          variants={slideDown}
          animate={controls}
          className="section-header"
        >
          <div className="section-title-content">
            <Icon
              icon="BiMessageRounded"
              size="30px"
              color="whitesmoke"
              title="Contact icon"
            />
            <h1 className="section-heading heading-light">Contact me</h1>
          </div>
          <StyledLine height="6px" width="100%" bgColor="#111111" />
        </motion.div>

        <ContactInfo>
          <motion.form
            autoComplete="off"
            onSubmit={handleFormSubmit}
            initial="initial"
            variants={slideRight}
            animate={controls}
          >
            <div className="formItem">
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
            <div className="formItem">
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
            <div className="formItem">
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
            <div className="formItem">
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

            <div className="button">
              <motion.input
                className="page-btn dark-btn"
                type="submit"
                value="Send Message"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          </motion.form>

          <div className="contact-images">
            <motion.div
              className="trail"
              initial="initial"
              variants={trailVariants}
              animate={controls}
            >
              <Trail />
            </motion.div>
            <motion.div
              className="outer-plane"
              initial="initial"
              variants={flyIn}
              animate={controls}
            >
              <motion.div
                className="plane"
                variants={planeVariants}
                animate="animate"
                //animate={controls}
              >
                <Plane />
              </motion.div>
            </motion.div>

            <motion.div
              className="contactBar"
              initial="initial"
              variants={slideUp}
              animate={controls}
            >
              <ContactIconBar size="40px" color="whitesmoke" />
            </motion.div>
          </div>
        </ContactInfo>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled(motion.div)`
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    flex-grow: 1;
    justify-content: space-between;
    background: #1f2525;
    padding: 2rem;
    border-radius: 10px;
    height: 100%;

    .formItem {
      display: flex;
      flex-direction: column;
      row-gap: 0.25rem;
    }
    .button {
      display: flex;
      justify-content: center;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      font-family: "poppins", sans-serif;
      padding: 0.2rem;
      font-size: 1.1rem;
      resize: none;
      border-radius: 4px;
      border: none;
      outline-style: none;
      -moz-outline-style: none;
      &:active,
      &:focus {
        outline: none;
        -moz-outline: none;
        box-shadow: 0px 0px 5px 3px #689ed0;
      }
    }
  }

  .contact-images {
    position: relative;
    flex-basis: 40%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-evenly;

    .outer-plane {
      display: flex;
      align-self: flex-start;
      justify-self: flex-end;
      .plane {
        display: flex;
        align-self: flex-start;
        justify-self: flex-end;
      }
    }
    .contactBar {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export default Contact;
