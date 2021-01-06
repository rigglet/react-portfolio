//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//images
import splashImage from "../img/me-bw-blue-tie.png";
//components
import ContactIconBar from "../components/ContactIconBar";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <ContactLayout>
      <ContactInfo>
        <form onSubmit={handleFormSubmit}>
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <button>Send Message</button>
        </form>

        <ContactIconBar />
      </ContactInfo>
      <img src={splashImage} alt="Me" />
    </ContactLayout>
  );
};

const ContactLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
  img {
    height: 10%;
    width: 10%;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0rem 2rem 8rem;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
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

// const StyledImage = styled(motion.div)`
//   padding-right: 6rem;
//   img {
//     min-width: 100%;
//     height: 100%;
//   }
// `;

export default Contact;
