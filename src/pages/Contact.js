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
//plane svg
import plane from "../img/swoop.svg";

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
      .then(
        (result) => {
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
        },
        (error) => {
          console.log(error.text);
          //handle error
          notify("FAILURE");
        }
      );
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
    <ContactLayout>
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
        <h1>Contact Me</h1>

        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input
            id="name"
            autoComplete="off"
            name="user_name"
            type="text"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label>Subject:</label>
          <input
            id="subject"
            autoComplete="off"
            name="user_subject"
            type="text"
            value={formData.user_subject}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            id="email"
            autoComplete="off"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="msg"
            name="message"
            autoComplete="off"
            cols="10"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <input type="submit" value="Send Message" />
        </form>
      </ContactForm>
      <ContactInfo>
        <img src={plane} alt="Send message" />
        <ContactIconBar />
      </ContactInfo>
    </ContactLayout>
  );
};

const ContactLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: lighter;
    font-size: 2rem;
  }
`;

const ContactForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem 2rem 8rem;
  h1 {
    margin-bottom: 2rem;
  }
  form {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  input,
  textarea {
    width: 30vw;
    font-family: "inter", sans-serif;
    padding: 0.3rem;
    font-size: 1.3rem;
    &:active,
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
    }
  }
  button {
    width: 20vw;
    &:active,
    &:focus {
      outline: none;
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

  img {
    width: 40vw;
    height: 40vh;
  }
`;

// const StyledImage = styled(motion.div)`
//   padding-right: 6rem;
//   img {
//     min-width: 100%;
//     height: 100%;
//   }
// `;

export default Contact;
