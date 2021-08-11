import { useState, useEffect } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Icon from "./Icon";

//data
import { getCollection } from "../api/api";

const ContactIconBar = ({ size, color }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      return await getCollection("links");
    }

    getLinks().then((results) => {
      if (results.status === 200) {
        setLinks(results.data);
        //console.log(results.data);
      }
    });
  }, []);

  return (
    <StyledBar>
      {links.map((link) => (
        <a key={uuidv4()} target="_blank" rel="noreferrer" href={link.address}>
          <Icon icon={link.icon} color={color} size={size} />
          {/* <Icon icon="FaDAndD" color={color} size={size} /> */}
        </a>
      ))}
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 10px;
  background: #1f2525;
  padding: 0.5rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
export default ContactIconBar;
