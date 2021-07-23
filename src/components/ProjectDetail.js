import { useEffect, useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { detailPopUp } from "../styles/animations";
import { getDocumentById } from "../api/api";
import Icon from "./Icon";
//uuid
import { v4 as uuidv4 } from "uuid";
import { productionBaseURL as serverBaseURL } from "../config/config";
//functions
import CloseButton from "./closeButton";
//dates
import { DateTime } from "luxon";
//icons
import { FaGithub } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ImImages } from "react-icons/im";
import { HiCode, HiLink } from "react-icons/hi";
import { MdWeb } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

const ProjectDetails = ({
  projectClose,
  skipProject,
  arrSize,
  handleImageChange,
  currentImage,
  projectId,
}) => {
  //const project = getProject(projectId);
  const [project, setProject] = useState({});

  useEffect(() => {
    async function getProject() {
      return await getDocumentById("projects", projectId);
    }

    getProject().then((results) => {
      console.log(results.data);
      if (results.status === 200) {
        setProject(results.data);
        // currentImage = results.data.screenshots.filter(
        //   (image) => image._id === results.data.mainImage
        // )[0];
      }
    });
  }, []);

  return (
    <StyledDetail>
      <StyledCard
        variants={detailPopUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseButton closeFunction={projectClose} />
        {/* <p>{project._id}</p>
        <p>{project.projectName}</p>
        <p>{project.shortDescription}</p>
        <p>{project.projectDescription}</p>
        <p>{project.author}</p>
        <p>{project.version}</p>
        <p>{project.featured}</p>
        <p>{project.included}</p>
        <p>{project.website}</p>
        <p>{project.githubLink}</p>
        <p>{project.mainImage}</p> */}
        {/*screenshots: [{…}]
        highlights: (2) ["AWS S3 bucket image storage and handling", "Express server backend with MongoDB"]
        features: (3) ["AWS S3 bucket image storage and handling", "Express server backend with MongoDB", "Built with React"]
        packages: (5) [{…}, {…}, {…}, {…}, {…}]
        libraries: []
        technologies: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]*/}

        {/* <p>{project.startedDate}</p>
                <p>{project.completedDate}</p>
                <p>{project.addedDate}</p> */}

        <div className="titleHeader">
          <MdWeb className="titleIcon" />
          <h1>{project?.projectName}</h1>
          {/* <h5>{project?._id}</h5> */}
        </div>

        <div className="form-information">
          <fieldset className="details">
            <legend>
              Overview <BsCardText />
            </legend>
            <div className="subsection">
              <div className="input-item">
                <label htmlFor="projectName">Project name:</label>
                <p>{project?.projectName}</p>
              </div>
              <div className="input-item">
                <label htmlFor="version">Version:</label>
                <p>{project?.version}</p>
              </div>
              <div className="input-item">
                <label htmlFor="author">Author:</label>
                <p>{project?.author}</p>
              </div>
            </div>
            <div className="subsection">
              {/* <div className="input-item">
                <label htmlFor="featured">Featured:</label>
                <input
                  disabled={true}
                  checked={project?.featured}
                  type="checkbox"
                  name="featured"
                  id="featured"
                />
              </div>
              <div className="input-item">
                <label htmlFor="included">Included:</label>
                <input
                  disabled={true}
                  checked={project?.included}
                  type="checkbox"
                  name="included"
                  id="included"
                />
              </div> */}
              <div className="input-item">
                <label htmlFor="short">Short description:</label>
                <p>{project?.shortDescription}</p>
              </div>
              <div className="input-item">
                <label htmlFor="description">Description:</label>
                <p>{project?.projectDescription}</p>
              </div>
            </div>
          </fieldset>

          <fieldset className="addresses">
            <legend>
              Addresses
              <HiLink />
            </legend>
            <div className="address-item">
              <label htmlFor="github">Github:</label>
              <div className="address">
                <FaGithub className="address-icon" />
                <p>{project?.githubLink}</p>
              </div>
            </div>
            <div className="address-item">
              <label htmlFor="website">Website:</label>
              <div className="address">
                <CgWebsite className="address-icon" />
                <p>{project?.website}</p>
              </div>
            </div>
          </fieldset>

          <fieldset className="dates">
            <legend>
              Dates <AiOutlineCalendar />
            </legend>
            <div className="input-item">
              <label htmlFor="started">Started:</label>
              <p>
                {DateTime.fromISO(project?.startedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
            <div className="input-item">
              <label htmlFor="started">Completed:</label>
              <p>
                {DateTime.fromISO(project?.completedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
            <div className="input-item">
              <label htmlFor="started">Added:</label>
              <p>
                {DateTime.fromISO(project?.addedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
          </fieldset>
          {/* <fieldset className="descriptions">
            <legend>
              Descriptions
              <BiMessageSquareDetail />
            </legend>
            <div className="input-item">
              <label htmlFor="short">Short description:</label>
              <p>{project?.shortDescription}</p>
            </div>
            <div className="input-item">
              <label htmlFor="description">Description:</label>
              <p>{project?.projectDescription}</p>
            </div>
          </fieldset> */}
          <fieldset className="libraries">
            <legend>
              Libraries <IoLibraryOutline />
            </legend>
            <ul>
              {project?.libraries?.map((lib) => (
                <li key={uuidv4()}>{lib.name}</li>
              ))}
            </ul>
          </fieldset>
          <fieldset className="packages">
            <legend>
              Packages <GoPackage />
            </legend>
            <ul>
              {project?.packages?.map((p) => (
                <li key={uuidv4()}>{p.name}</li>
              ))}
            </ul>
          </fieldset>
          <fieldset className="technologies">
            <legend>
              Technologies <HiCode />
            </legend>
            <ul>
              {project?.technologies?.map((t) => (
                <li key={uuidv4()}>{t.name}</li>
              ))}
            </ul>
          </fieldset>
          <fieldset>
            <legend>
              Screenshots <ImImages />
            </legend>
            <div className="scroller">
              {project?.screenshots?.map((s) => (
                <img
                  key={uuidv4()}
                  src={`${serverBaseURL()}/images/${s.fileName}`}
                  alt={s.description}
                />
              ))}
            </div>
          </fieldset>
        </div>

        {/* <StyledHeaderSection>
          <h2>{project.projectName}</h2>
          <StyledHeaderIcons>
            <StyledLinks>
              <a href={project.website} target="_blank" rel="noreferrer">
                {
                  <Icon
                    key={uuidv4()}
                    icon="HiLink"
                    color="#313131"
                    size="25px"
                  />
                }
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                {
                  <Icon
                    key={uuidv4()}
                    icon="FaGithubSquare"
                    color="#313131"
                    size="25px"
                  />
                }
              </a>
            </StyledLinks>
            {project.featured ? (
              <Icon key={uuidv4()} icon="FaStar" color="#313131" size="25px" />
            ) : (
              <Icon
                key={uuidv4()}
                icon="FaRegStar"
                color="#313131"
                size="25px"
              />
            )}
          </StyledHeaderIcons>
        </StyledHeaderSection> */}

        {/* <StyledMain>
          <div className="left">
            <p>{project.projectDescription}</p>

            <StyledIcons>
              {project.technologies?.map((tech) => (
                <Icon
                  key={uuidv4()}
                  icon={tech.icon}
                  color={tech.color}
                  size="25px"
                />
              ))}
            </StyledIcons>
          </div>

          <div className="middle">
            {project.screenshots?.map((shot) => (
              <img
                key={uuidv4()}
                src={`${serverBaseURL()}/images/${shot.fileName}`}
                alt={shot.description}
                onClick={() => handleImageChange(shot.fileName)}
              />
            ))}
          </div>

          <div className="right">
            {project?.mainImage && (
              <img
                src={`${serverBaseURL()}/images/${project?.mainImage}`}
                alt="project"
              />
            )} 
          </div>
        </StyledMain> */}

        {/* <StyledLeftSection>
          {arrSize > 1 && (
            <Icon
              key={uuidv4()}
              icon="FaAngleLeft"
              color="#313131"
              size="25px"
              className="arrow"
              onClick={() => {
                skipProject("BACK");
              }}
            />
          )}
        </StyledLeftSection>

        <StyledRightSection>
          {arrSize > 1 && (
            <Icon
              key={uuidv4()}
              icon="FaAngleRight"
              color="#313131"
              size="25px"
              className="arrow"
              onClick={() => {
                skipProject("FORWARD");
              }}
            />
          )}
        </StyledRightSection> */}
      </StyledCard>
    </StyledDetail>
  );
};

const StyledDetail = styled(motion.div)`
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(256, 256, 256, 0.5);
  //overflow-y: scroll;
  padding: 5vh 0;
`;

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  //flex-wrap: wrap;
  padding: 2rem 4rem;
  //margin: 5vh 0;
  box-shadow: 0 0 10px 5px #689ed0;
  position: relative;
  z-index: 10;
  width: 95vw;
  //min-height: 95vh;
  height: 95vh;
  height: 100%;
  border: 0.05rem #689ed0 solid;
  border-radius: 4px;
  background-color: var(--color-light-background);
  color: #313131;
  overflow-y: scroll;
  //overflow-x: scroll;

  p {
    color: #313131;
    font-size: 10pt;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: lighter;
  }
  .arrow {
    color: #313131;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  .form-information {
    //border: 1px solid red;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .details {
      display: flex;
      width: 100%;
      height: auto;
      padding: 1rem;
      gap: 1rem;
      .subsection {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input[type="checkbox"] {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 4px;
          cursor: default;
        }
      }
    }
    .addresses {
      display: flex;
      flex-direction: column;
      width: 100%;
      //height: auto;
      padding: 1rem;
      row-gap: 0.5rem;
    }
    /* .descriptions {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      padding: 1rem;
    } */
    .dates {
      display: flex;
      flex-direction: column;
      width: auto;
      width: 100%;
      height: auto;
      padding: 1rem;
      gap: 1rem;
    }
    .scroller {
      padding: 1rem;
      width: 84vw;
      min-width: 100%;
      overflow-x: scroll;
      display: flex;
      column-gap: 0.5rem;
      img {
        cursor: default;
        height: auto;
        width: 425px;
        object-fit: contain;
        object-position: center center;
        border-radius: 4px;
        border: 1px solid #689ed0;
      }
    }
    .libraries,
    .technologies,
    .packages {
      padding: 1rem;
      width: 100%;
      ul {
        list-style-type: none;
        li {
          text-decoration: none;
          width: 100%;
          border-radius: 4px;
          margin-bottom: 0.5rem;
          padding: 0.25rem;
          background-color: rgba(131, 169, 204, 0.5);
          font-family: "Poppins", sans-serif;
          font-weight: 300;
          font-size: 10pt;
        }
      }
    }
    p {
      width: 100%;
      background-color: rgba(131, 169, 204, 0.5);
      border-radius: 4px;
      padding: 0.25rem;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 10pt;
    }
    .address-item {
      display: flex;
      flex-direction: column;
      .address {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        .address-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    fieldset {
      border-radius: 4px;
    }
    legend {
      display: flex;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
      padding: 0 0.5rem;
      font-weight: bold;
      font-size: 14pt;
      font-variant-caps: all-small-caps;
    }
    .input-item {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: bold;
      font-size: 12pt;
      font-variant-caps: all-small-caps;
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledHeaderSection = styled(motion.div)`
  grid-area: header;
  padding: 1rem;
  color: #313131;
`;

const StyledMain = styled(motion.div)`
  grid-area: main;
  display: flex;
  .left {
    color: #313131;
    border: 1px solid black;
    padding: 0rem 1rem 1rem 1rem;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .middle {
    color: #313131;
    border: 1px solid black;
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img {
      min-width: 10vw;
      max-height: 12vh;
      object-fit: cover;
      object-position: top;
      padding: 0rem 1rem 1rem 1rem;
      cursor: pointer;
    }
  }
  .right {
    color: #313131;
    border: 1px solid black;
    padding: 1rem;
    flex: 4;
    img {
      width: 100%;
      max-height: 60vh;
      object-fit: scale-down;
      object-position: top;
      padding: 0rem 1rem 1rem 1rem;
    }
  }
`;

const StyledHeaderIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  .icon {
    height: 30px;
    width: 30px;
  }
`;
const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLinks = styled(motion.div)`
  display: flex;
  //align-items: center;

  a {
    padding-right: 1rem;
    color: white;
    text-decoration: none;
    &:visited {
      color: white;
      text-decoration: none;
    }
  }
`;

const StyledLeftSection = styled(motion.div)`
  grid-area: left-side;
  display: flex;
  align-items: center;
`;

const StyledRightSection = styled(motion.div)`
  grid-area: right-side;
  justify-self: end;
  display: flex;
  align-items: center;
`;
// const StyledCard = styled(motion.div)`
//   display: grid;
//   grid-template-columns: 5% auto 5%;
//   grid-template-rows: 20% 5% auto;
//   grid-template-areas:
//     "left-side header right-side"
//     "left-side line right-side"
//     "left-side main right-side";

//   //box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
//   position: relative;
//   z-index: 10;
//   width: 95vw;
//   min-height: 95vh;
//   height: auto;
//   border: 0.05rem #689ed0 solid;
//   border-radius: 4px;
//   background-color: var(--color-light-background);
//   overflow-y: scroll;
//   overflow-x: hidden;
//   //border: 1px solid red;

//   h2 {
//     color: #313131;
//     margin-bottom: 1rem;
//     font-weight: lighter;
//   }
//   .arrow {
//     color: #313131;
//     height: 40px;
//     width: 40px;
//     cursor: pointer;
//   }
// `;

// const StyledHeaderSection = styled(motion.div)`
//   grid-area: header;
//   padding: 1rem;
//   color: #313131;
// `;

// const StyledMain = styled(motion.div)`
//   grid-area: main;
//   display: flex;
//   .left {
//     color: #313131;
//     border: 1px solid black;
//     padding: 0rem 1rem 1rem 1rem;
//     flex: 2;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
//   .middle {
//     color: #313131;
//     border: 1px solid black;
//     flex: 1;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     img {
//       min-width: 10vw;
//       max-height: 12vh;
//       object-fit: cover;
//       object-position: top;
//       padding: 0rem 1rem 1rem 1rem;
//       cursor: pointer;
//     }
//   }
//   .right {
//     color: #313131;
//     border: 1px solid black;
//     padding: 1rem;
//     flex: 4;
//     img {
//       width: 100%;
//       max-height: 60vh;
//       object-fit: scale-down;
//       object-position: top;
//       padding: 0rem 1rem 1rem 1rem;
//     }
//   }
// `;

// const StyledHeaderIcons = styled(motion.div)`
//   display: flex;
//   justify-content: space-between;
//   .icon {
//     height: 30px;
//     width: 30px;
//   }
// `;
// const StyledIcons = styled(motion.div)`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const StyledLinks = styled(motion.div)`
//   display: flex;
//   //align-items: center;

//   a {
//     padding-right: 1rem;
//     color: white;
//     text-decoration: none;
//     &:visited {
//       color: white;
//       text-decoration: none;
//     }
//   }
// `;

// const StyledLeftSection = styled(motion.div)`
//   grid-area: left-side;
//   display: flex;
//   align-items: center;
// `;

// const StyledRightSection = styled(motion.div)`
//   grid-area: right-side;
//   justify-self: end;
//   display: flex;
//   align-items: center;
// `;

export default ProjectDetails;
