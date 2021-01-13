//contactBar links
export const LinkedInLink = "https://www.linkedin.com/in/neil-rigg-794243159/";
export const FacebookLink = "https://www.facebook.com/neil.rigg.5";
export const TwitterLink = "https://twitter.com/r1gglet";

//Portfolio link
export const GithubLink = "https://github.com/rigglet";

export const technologies = () => {
  const t = ["HTML", "CSS", "JS", "REACT", "SASS", "NODE"];
  return t;
};

//return a specific project given the id
export const getProject = (id) => {
  const projects = projectData();
  //console.log(typeof p.id);
  //console.log(typeof id);
  return projects.filter((p) => String(p.id) === id)[0];
};

export const projectData = () => {
  const data = [
    {
      id: 1,
      featured: true,
      projectName: "Sudoku",
      shortDescription:
        "A simple Sudoku game for storing and completing Sudoku puzzles",
      projectDescription:
        "A simple Sudoku game for storing and completing Sudoku puzzles",
      author: "Neil Rigg",
      mainImg: "sudoku.png",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS"],
      githubLink: "https://github.com/rigglet/sudoku",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 2,
      featured: true,
      projectName: "Color Picker",
      shortDescription: "A color picker",
      projectDescription: "A color picker",
      author: "Neil Rigg",
      mainImg: "",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS"],
      githubLink: "",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 3,
      featured: true,
      projectName: "Portfolio",
      shortDescription: "Personal portfolio",
      projectDescription: "Personal portfolio",
      author: "Neil Rigg",
      mainImg: "portfolio.png",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS", "REACT", "SASS"],
      githubLink: "https://github.com/rigglet/react-portfolio",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 4,
      featured: true,
      projectName: "Color Picker",
      shortDescription:
        "A color picker Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis rerum architecto odit, ut alias delectus optio. Maiores id ipsam deleniti.",
      projectDescription:
        "A color picker Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi, a explicabo inventore modi laboriosam assumenda, velit nulla amet natus molestiae at necessitatibus error odit quidem magni accusantium libero asperiores facilis. Assumenda sit aperiam numquam minima esse, alias, voluptate fuga perferendis consequatur consequuntur ipsa explicabo vero id soluta impedit dolorum. ",
      author: "Neil Rigg",
      mainImg: "sudoku.png",
      screenshots: [
        "sudoku.png",
        "me.png",
        "me-bw-blue-tie.png",
        "me.png",
        "me-bw-blue-tie.png",
      ],
      technologies: ["HTML", "CSS", "JS", "NODE"],
      githubLink: "https://github.com/rigglet/react-portfolio",
      www: "https://github.com/rigglet/react-portfolio",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 5,
      featured: false,
      projectName: "Color Picker",
      shortDescription: "A color picker",
      projectDescription: "A color picker",
      author: "Neil Rigg",
      mainImg: "",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS", "REACT"],
      githubLink: "",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 6,
      featured: false,
      projectName: "Color Picker",
      shortDescription: "A color picker",
      projectDescription: "A color picker",
      author: "Neil Rigg",
      mainImg: "",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS"],
      githubLink: "",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
    {
      id: 7,
      featured: false,
      projectName: "Color Picker",
      shortDescription: "A color picker",
      projectDescription: "A color picker",
      author: "Neil Rigg",
      mainImg: "",
      screenshots: [],
      technologies: ["HTML", "CSS", "JS"],
      githubLink: "",
      addedDate: "06/01/2021",
      startedDate: "",
      completedDate: "",
    },
  ];
  return data;
};
