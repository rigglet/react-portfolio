//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//images
//import splashImage from "../img/me-bw-blue-tie.png";
//components
import ContactIconBar from "../components/ContactIconBar";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log("submit");
  };
  return (
    <ContactLayout>
      <ContactForm>
        <h1>Contact Me</h1>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input id="name" autoComplete="off" name="name" type="text" />
          <label>Email:</label>
          <input id="email" autoComplete="off" name="email" type="email" />
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="msg" autoComplete="off" cols="10" rows="5" />
          <button>Send Message</button>
        </form>
      </ContactForm>
      <ContactInfo>
        {/* <img src={splashImage} alt="Me" /> */}
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
  justify-content: flex-end;
  padding: 4rem 8rem 2rem 0rem;
`;

// const StyledImage = styled(motion.div)`
//   padding-right: 6rem;
//   img {
//     min-width: 100%;
//     height: 100%;
//   }
// `;

export default Contact;
