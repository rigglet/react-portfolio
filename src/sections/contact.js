import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import { buttonVariants } from "../styles/animations";
//email
import emailjs from "emailjs-com";
//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import ContactIconBar from "../components/ContactIconBar";
import Icon from "../components/Icon";
//icon
//import { FaWindowClose } from "react-icons/fa";
//SVGs
import Plane from "../img/plane";
import Trail from "../img/trail";

const Contact = () => {
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
    <ContactSection className="section-dark fullheight" id="contact">
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

      <div className="container-dark">
        <div className="content">
          <div className="section-header">
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
          </div>

          <ContactInfo>
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
            </form>

            <div className="contact-images">
              <Trail />
              <Plane />
            </div>
          </ContactInfo>
          <div className="contactBar">
            <ContactIconBar className="cib" size="40px" color="whitesmoke" />
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled(motion.div)`
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .header {
    align-self: flex-start;
    margin-left: 5%;
  }
  .contactBar {
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60vh;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;

    .formitem {
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
    width: 40%;
    display: flex;
    align-items: center;
  }
`;

export default Contact;
