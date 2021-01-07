//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//icons
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
//link addresses
import { LinkedInLink, FacebookLink, TwitterLink } from "../Data";

const ContactIconBar = () => {
  return (
    <StyledBar>
      <a target="_blank" rel="noreferrer" href={FacebookLink}>
        <FaFacebookSquare className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href={TwitterLink}>
        <FaTwitterSquare className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href={LinkedInLink}>
        <FaLinkedin className="icon" />
      </a>
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  a {
    text-decoration: none;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
export default ContactIconBar;
