import React from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const loaderVariants = {
  animationOne: {
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    scale: [1, 2, 2, 1, 1],
    x: [0, 0, 0, 0, 0],
    y: [30, 0, -30, 0, 30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 2,
        type: "spring",
      },
      y: {
        repeat: Infinity,
        duration: 2,
        type: "spring",
      },
    },
  },
  animationTwo: {
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    scale: [1, 2, 2, 1, 1],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 2,
        type: "spring",
      },
      y: {
        yoyo: Infinity,
        duration: 2,
        type: "spring",
      },
    },
  },
};

export default function Loader() {
  return (
    <StyledLoader>
      <StyledBall variants={loaderVariants} animate="animationTwo"></StyledBall>
      <StyledBall variants={loaderVariants} animate="animationOne"></StyledBall>
      <StyledBall variants={loaderVariants} animate="animationOne"></StyledBall>
      <StyledBall variants={loaderVariants} animate="animationOne"></StyledBall>
      <StyledBall variants={loaderVariants} animate="animationOne"></StyledBall>
    </StyledLoader>
  );
}

const StyledLoader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 100vw;
  height: auto;
  gap: 1rem;

  .ball {
    width: 15px;
    height: 15px;
    //margin: 40px auto;
    border-radius: 50%;
    background: #f5f5f5;
    background: black;
  }
`;

const StyledBall = styled(motion.div)`
  width: 15px;
  height: 15px;
  //margin: 40px auto;
  border-radius: 50%;
  background: #f5f5f5;
  background: black;
`;
