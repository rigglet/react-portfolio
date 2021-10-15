import React from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const loaderVariants = {
  // animationTwo: {
  //   rotate: [0, 180, 360],
  //   borderRadius: ["5%", "50%", "5%"],
  //   scale: [1, 1.1, 1],
  //   x: [0, 150, 300],
  //   y: [0, 0, 0],
  //   //color: ["#1c3b57", "#65617d", "#689ed0", "#c6c6c6", "#f5f5f5"],
  //   transition: {
  //     borderRadius: {
  //       yoyo: Infinity,
  //       duration: 1,
  //       //delay: 1,
  //       type: "spring",
  //       //stiffness: 130,
  //     },
  //     rotate: {
  //       yoyo: Infinity,
  //       duration: 1,
  //       //delay: 1,
  //       type: "spring",
  //     },
  //     scale: {
  //       yoyo: Infinity,
  //       duration: 1,
  //       //delay: 1,
  //       type: "spring",
  //     },
  //     x: {
  //       yoyo: Infinity,
  //       duration: 1,
  //       //delay: 1,
  //       type: "spring",
  //     },
  //     y: {
  //       yoyo: Infinity,
  //       duration: 3,
  //       //delay: 1,
  //       type: "spring",
  //     },
  //   },
  // },
  // animationLoading: {
  //   opacity: [0, 1],
  //   transition: {
  //     opacity: {
  //       yoyo: Infinity,
  //       duration: 1,
  //       type: "spring",
  //       staggerChildren: { delay: 0.5 },
  //     },
  //   },
  // },
  hidden: {
    //opacity: 1,
  },
  show: {
    //opacity: 0,
    transition: {
      staggerChildren: 0.2,
      //when: "afterChildren",
    },
  },
};

const dotVariants = {
  hidden: {
    opacity: 1,
    y: "0",
  },
  show: {
    opacity: 1,
    y: "-25px",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.7,
    },
  },
};

export default function Loader() {
  return (
    <StyledLoader variants={loaderVariants} initial="hidden" animate="show">
      <StyledDot variants={dotVariants}>l</StyledDot>
      <StyledDot variants={dotVariants}>o</StyledDot>
      <StyledDot variants={dotVariants}>a</StyledDot>
      <StyledDot variants={dotVariants}>d</StyledDot>
      <StyledDot variants={dotVariants}>i</StyledDot>
      <StyledDot variants={dotVariants}>n</StyledDot>
      <StyledDot variants={dotVariants}>g</StyledDot>
    </StyledLoader>
  );
}

const StyledLoader = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
  min-height: 30vh;
`;

const StyledName = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Lobster", cursive;
  color: #f5f5f5;
`;
const StyledDot = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Lobster", cursive;
  color: #f5f5f5;
`;

// const StyledDot = styled(motion.div)`
//   width: 40px;
//   height: 200px;
//   background: var(--gradient-ltr);
//   background: whitesmoke;
//   border-radius: 50px;
// `;
