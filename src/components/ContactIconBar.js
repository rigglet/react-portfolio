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
      console.log(results);
      if (results.status === 200) {
        setLinks(results.data);
      }
    });
  }, []);

  return (
    <StyledBar>
      {links.map((link) => (
        <a key={uuidv4()} target="_blank" rel="noreferrer" href={link.address}>
          <Icon icon={link.icon} color={color} size={size} />
        </a>
      ))}
    </StyledBar>
  );
};

const StyledBar = styled(motion.div)`
  display: flex;
  column-gap: 1rem;

  a {
    text-decoration: none;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
export default ContactIconBar;
