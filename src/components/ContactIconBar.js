import { useState, useEffect } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

//icons
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
//data
import { getCollection } from "../api/api";

const ContactIconBar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      return await getCollection("links");
    }

    getLinks().then((results) => {
      console.log(results);
      if (results.status === 200) {
        setLinks(results.data);
      }
    });
  }, []);

  //TODO: add link icon to db and server
  //TODO: add technology icon to db and server
  //TODO: flag on images for mainImage
  //console.log(size);
  return (
    <StyledBar>
      {links.map((link) => (
        <a key={ uuidv4()}target="_blank" rel="noreferrer" href={link.address}>
          <FaFacebookSquare className="icon" />
        </a>
      ))}
      {/* <a target="_blank" rel="noreferrer" href={TwitterLink}>
        <FaTwitterSquare className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href={LinkedInLink}>
        <FaLinkedin className="icon" />
      </a> */}
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  /* .icon {
    height: 100px;
    width: 100px;
  } */
  a {
    text-decoration: none;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
export default ContactIconBar;
