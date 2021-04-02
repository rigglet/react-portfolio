//contactBar links
export const LinkedInLink = "https://www.linkedin.com/in/neil-rigg-794243159/";
export const FacebookLink = "https://www.facebook.com/neil.rigg.5";
export const TwitterLink = "https://twitter.com/r1gglet";

//Portfolio link
export const GithubLink = "https://github.com/rigglet";

export const technologies = () => {
  //const t = ["HTML", "CSS", "JS", "REACT", "SASS", "NODE"];
  return [
    { name: "HTML", link: "https://html.spec.whatwg.org/" },
    { name: "CSS", link: "https://www.w3.org/Style/CSS/Overview.en.html" },
    {
      name: "JS",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "REACT", link: "https://reactjs.org/" },
    { name: "SASS", link: "https://sass-lang.com/" },
    { name: "NODE", link: "https://nodejs.dev/" },
    { name: "EXPRESS", link: "https://expressjs.com/" },
    { name: "MONGODB", link: "https://www.mongodb.com/1" },
    { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
  ];
};

export const projectData = () => {
  return [
    {
      id: 1,
      featured: false,
      projectName: "Sudoku",
      shortDescription:
        "A simple Sudoku game for storing and completing Sudoku puzzles",
      projectDescription:
        "A simple Sudoku game for storing and completing Sudoku puzzles",
      author: "Neil Rigg",
      mainImg: "sudoku.png",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS", "BOOTSTRAP"],
      packages: [],
      libraries: [],
      githubLink: "https://github.com/rigglet/sudoku",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
      version: "",
    },
    {
      id: 2,
      featured: false,
      projectName: "Color Picker",
      shortDescription: "A color picker",
      projectDescription: "A color picker",
      author: "Neil Rigg",
      mainImg: "",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS", "BOOTSTRAP"],
      packages: [],
      libraries: [],
      githubLink: "",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
      version: "1.0",
    },
    {
      id: 3,
      featured: true,
      projectName: "Portfolio",
      shortDescription: "Personal portfolio website",
      projectDescription:
        "My personal portfolio website was created using Create-React-App. It untilises a number of packages, including; emailjs-com for sending emails from the Contact page, styled-components for styling, react-toastify for messaging, react-router-dom for navigation, framer-motion for page transitions and animation. node-sass is used to compile sass into css. The icons came from react-icons",
      author: "Neil Rigg",
      mainImg: "portfolioMain.png",
      screenshots: ["portfolio1.png", "portfolio2.png", "portfolio3.png"],
      technologies: ["HTML", "CSS", "JS", "REACT", "SASS"],
      packages: [
        "emailjs-com",
        "framer-motion",
        "node-sass",
        "react",
        "react-dom",
        "react-icons",
        "react-intersection-observer",
        "react-router-dom",
        "react-scripts",
        "react-toastify",
        "styled-components",
        "web-vitals",
      ],
      githubLink: "https://github.com/rigglet/react-portfolio",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
      libraries: [],
      version: "1.0",
    },

    {
      id: 4,
      featured: true,
      projectName: "BudgetApp",
      shortDescription: "A personal budget App built with React",
      projectDescription:
        "A personal budget App built with React. Allows the user to create and store a personal budget, including income, budget, expenditure. It also provides functionality to track expenses and provides analytics via a dashboard. Data can be viewed as tables or charts. Data is stored as using local storage.",
      author: "Neil Rigg",
      mainImg: "budgetApp/budgetAppHome.png",
      screenshots: [
        "budgetApp/budgetAppBudget.png",
        "budgetApp/budgetAppTracker.png",
        "budgetApp/budgetAppDash.png",
      ],
      technologies: ["HTML", "CSS", "JS", "REACT", "SASS"],
      libraries: ["Moment.js", "Chart.js"],
      githubLink: "https://github.com/rigglet/react-budget-app",
      www: "https://github.com/rigglet/react-budget-app",
      addedDate: "01/03/2021",
      startedDate: "",
      completedDate: "",
      version: "1.0",
    },
  ];
};
