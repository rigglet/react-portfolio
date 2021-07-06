export const navVariants = {
  initial: { y: "-10vw", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1.5,
    },
  },
};

//SPLASH PAGE VARIANTS
export const splashVariants = {
  // initial: { opacity: 1 },
  // animate: {
  //   opacity: 1,
  //   transition: {
  //     duration: 5,
  //   },
  // },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 2,
    },
  },
};

//HOME PAGE VARIANTS
export const homeVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  // exit: {
  //   opacity: 1,
  //   scale: 3,
  //   transition: {
  //     delay: 0.5,
  //     duration: 2,
  //   },
  // },
};

export const headerVariants = {
  initial: { x: "-50vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const subheaderVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

export const imageVariants = {
  initial: { x: "50vh", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
  // exit: {
  //   opacity: 1,
  //   scale: 3,
  //   transition: {
  //     delay: 0.5,
  //     duration: 2,
  //   },
  // },
};

export const buttonVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.5,
      duration: 2,
    },
  },
};

//ABOUT PAGE VARIANTS
export const aboutVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

//EXPERIENCE PAGE VARIANTS
export const experienceVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

//CONTACT PAGE VARIANTS
export const contactVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
    scale: 3,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

export const planeVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      //repeat: Infinity,
    },
  },
};

export const trailVariants = {
  initial: {
    pathLength: 0,
    pathOffset: 1,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 5,
      duration: 2,
    },
  },
};
