import { useEffect, useState } from "react";
import { serverBaseURL } from "../config/config";

//API
//import { getDocumentById } from "../api/api";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { detailPopUp } from "../styles/animations";

//icons
import { MdWeb } from "react-icons/md";
import Icon from "./Icon";
//import { AiOutlineCalendar } from "react-icons/ai";

//functions
import CloseButton from "./closeButton";

//uuid
import { v4 as uuidv4 } from "uuid";

//dates
//import { DateTime } from "luxon";

//image gallery
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetails = ({ project, projectClose }) => {
  let [imageArray, setImageArray] = useState([]);
  //let [mainImage, setMainImage] = useState({});

  useEffect(() => {
    setImageArray(
      project.screenshots?.map((image) => {
        return {
          original: `${serverBaseURL()}/images/${image?.fileName}`,
          thumbnail: `${serverBaseURL()}/images/${image?.fileName}`,
        };
      })
    );
    // setMainImage(
    //   project.screenshots?.filter((image) => {
    //     return image._id === project?.mainImage;
    //   })[0]
    // );
  }, [project.screenshots]);

  return (
    <StyledOuterContainer>
      <StyledInnerContainer
        variants={detailPopUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseButton closeFunction={projectClose} />

        <div className="title-header">
          <MdWeb className="title-icon" />
          <h1>Project details</h1>
        </div>

        <div className="form-information">
          <fieldset className="details">
            <legend>
              Overview
              <Icon
                icon="BsCardText"
                color="#313131"
                size="14pt"
                title="Screenshots"
              />
            </legend>
            <h1>
              {project?.projectName ? project?.projectName : "Project name"}
            </h1>
            <p>
              {project?.projectDescription
                ? project?.projectDescription
                : "Description"}
            </p>
            <div className="version-featured">
              <div className="input-item">
                <label htmlFor="version">Version:</label>
                <p>{project?.version ? project?.version : "Version"}</p>
              </div>
              <div className="input-item">
                <label htmlFor="featured">Featured:</label>
                <div className="version-featured-item">
                  {project.featured ? (
                    <Icon
                      icon="FaStar"
                      color="gold"
                      size="25px"
                      title="Featured project"
                    />
                  ) : (
                    <Icon
                      icon="FaRegStar"
                      color="#313131"
                      size="25px"
                      title="Not featured project"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="addresses">
              <div className="address-item">
                <label htmlFor="github">Github:</label>
                <a href={project?.githubLink}>
                  <Icon
                    icon="FaGithub"
                    color="black"
                    size="50px"
                    title="Github link"
                  />
                </a>
              </div>

              <div className="address-item">
                <label>Live site:</label>
                <a href={project?.website}>
                  <Icon
                    icon="CgWebsite"
                    color="black"
                    size="50px"
                    title="Live site link"
                  />
                </a>
              </div>

              <div className="address-item">
                <label>Walkthough video:</label>
                <a href={project?.walkthroughVideo}>
                  <Icon
                    icon="FaYoutube"
                    color="#ff0000"
                    size="50px"
                    title="Site walkthrough link"
                  />
                </a>
              </div>
            </div>
          </fieldset>

          <fieldset className="images">
            <legend>
              Screenshots
              <Icon
                icon="ImImages"
                color="#313131"
                size="14pt"
                title="Screenshots"
              />
            </legend>

            {imageArray.length > 0 ? (
              <ImageGallery
                items={imageArray}
                showPlayButton={false}
                //thumbnailPosition={"bottom"}
                //showIndex={true}
                autoPlay={false}
                showThumbnails={false}
                showBullets={false}
                showNav={true}
              />
            ) : (
              <Icon
                icon="BsImageFill"
                color="#65617d"
                size="300px"
                title="project"
              />
            )}
            {/* {project.screenshots[0]?.fileName ? (
                <img
                  src={`${serverBaseURL()}/images/${
                    project.screenshots[0]?.fileName
                  }`}
                  alt="project"
                />
              ) : (
                <Icon
                  icon="BsImageFill"
                  color="#65617d"
                  size="50%"
                  title="project"
                />
              )} */}
          </fieldset>
          {project?.features?.length > 0 && (
            <fieldset className="features">
              <legend>
                Features
                <Icon
                  icon="BsCardChecklist"
                  color="#313131"
                  size="14pt"
                  title="Features icon"
                />
              </legend>
              {project?.features?.map((feature) => (
                <div className="feature-item" key={uuidv4()}>
                  <Icon
                    icon="GoArrowSmallRight"
                    color="#494949"
                    size="25px"
                    title="Highlights icon"
                  />
                  <h4>{feature}</h4>
                </div>
              ))}
            </fieldset>
          )}

          {project?.highlights?.length > 0 && (
            <fieldset className="highlights">
              <legend>
                Highlights
                <Icon
                  icon="FaStar"
                  color="#313131"
                  size="14pt"
                  title="Highlights icon"
                />
              </legend>
              {project?.highlights?.map((highlight) => (
                <div className="highlight-item" key={uuidv4()}>
                  <Icon
                    icon="GoArrowSmallRight"
                    color="#313131"
                    size="25px"
                    title="Highlights icon"
                  />
                  <h4>{highlight}</h4>
                </div>
              ))}
            </fieldset>
          )}

          {project?.technologies?.length > 0 && (
            <fieldset className="technologies">
              <legend>
                Technologies
                <Icon
                  icon="HiCode"
                  color="#313131"
                  size="14pt"
                  title="package icon"
                />
              </legend>
              <StyledIcons>
                {project?.technologies?.map((tech) => (
                  <a
                    key={uuidv4()}
                    href={tech.address}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{tech.name}</h4>
                    <Icon
                      key={uuidv4()}
                      icon={tech.icon}
                      color={tech.color}
                      size="75px"
                    />
                  </a>
                ))}
              </StyledIcons>
            </fieldset>
          )}

          {project?.packages?.length > 0 && (
            <fieldset className="packages">
              <legend>
                Packages
                <Icon
                  icon="GoPackage"
                  color="#313131"
                  size="14pt"
                  title="package icon"
                />
              </legend>
              <StyledIcons>
                {project?.packages?.map((pack) => (
                  <a
                    key={uuidv4()}
                    href={pack.npmaddress}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{pack.name}</h4>
                    <Icon
                      key={uuidv4()}
                      icon={pack.icon}
                      color={pack.color}
                      size="75px"
                    />
                  </a>
                ))}
              </StyledIcons>
            </fieldset>
          )}

          {project?.libraries?.length > 0 && (
            <fieldset className="libraries">
              <legend>
                Libraries
                <Icon
                  icon="IoLibraryOutline"
                  color="#313131"
                  size="14pt"
                  title="library icon"
                />
              </legend>

              <StyledIcons>
                {project?.libraries?.map((library) => (
                  <a
                    key={uuidv4()}
                    href={library.npmaddress}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{library.name}</h4>
                    <Icon
                      icon={library.icon}
                      color={library.color}
                      size="75px"
                      title={`${library.name} library`}
                    />
                  </a>
                ))}
              </StyledIcons>
            </fieldset>
          )}

          {/* <fieldset className="dates">
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
          </fieldset> */}
        </div>
      </StyledInnerContainer>
    </StyledOuterContainer>
  );
};

const StyledOuterContainer = styled(motion.div)`
  z-index: 1001;
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

const StyledInnerContainer = styled(motion.div)`
  display: flex;

  flex-direction: column;
  justify-items: flex-start;
  padding: 2rem 4rem;
  box-shadow: 0 0 10px 5px #689ed0;
  position: relative;
  z-index: 10;
  width: 95vw;
  height: 95vh;
  height: 100%;
  border: 0.05rem #689ed0 solid;
  border-radius: 4px;
  background-color: var(--color-light-background);
  color: #313131;
  overflow-y: scroll;

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
    height: auto;
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;

    .details {
      display: flex;
      flex-direction: column;
      flex-basis: 45%;
      flex-grow: 1;
      padding: 1rem;
      gap: 1rem;
      box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);

      p {
        color: #313131;
        font-size: 12pt;
        background: rgba(104, 158, 208, 10%);
        background: rgba(49, 49, 49, 25%);
        border-radius: 10px;
        padding: 0.5rem;
      }
      .version-featured {
        display: flex;
        justify-content: space-evenly;
        min-width: 25vw;
        //gap: 1rem;
        .version-featured-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      .addresses {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        column-gap: 1rem;
        .address-item {
          display: flex;
          flex-shrink: 0;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          //border: 1px solid red;
        }
      }
    }

    .images {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 45%;
      flex-grow: 1;
      padding: 1rem;
      box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
      //height: auto;
      //min-width: 45vw;
    }

    .main-image {
      /* display: flex;
      flex-basis: 45%; */
      //width: auto;
      border-radius: 10px;
      object-fit: contain;
    }

    .dates {
      display: flex;
      //flex-direction: column;
      width: 100%;
      height: auto;
      padding: 1rem;
      //gap: 1rem;
      justify-content: space-evenly;
      align-items: center;
      flex-grow: 1;
    }

    .features,
    .highlights {
      display: flex;
      //flex-basis: 50%;
      flex-direction: column;
      flex-grow: 1;
      padding: 1rem;
      box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
      .feature-item,
      .highlight-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }

    .libraries,
    .technologies,
    .packages {
      padding: 1rem;
      width: 100%;
      box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
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

    fieldset {
      position: relative;
      border-radius: 10px;
      border: 2px solid #313131;
      //z-index: 1;
      .label {
        position: absolute;
        top: -1rem;
        left: 0;
        z-index: -1;
        //background: rgb(104, 158, 208, 50%);
        border-top: 2px solid #313131;
        //border-left: 2px solid #313131;
        //border-right: 2px solid #313131;
        //box-shadow: 0px -3px 10px rgba(101, 97, 125, 1);
        background: whitesmoke;
        border-radius: 10px 10px 0px 0px;
        display: flex;
        align-items: center;
        //text-align: center;
        gap: 0.5rem;
        padding: 0 1rem;
        font-weight: bold;
        font-size: 16pt;
        font-variant-caps: all-small-caps;
      }
      legend {
        z-index: 1;
        //background: rgb(104, 158, 208, 50%);
        border-top: 2px solid #313131;
        border-left: 2px solid #313131;
        border-right: 2px solid #313131;
        //box-shadow: 0px -3px 10px rgba(101, 97, 125, 1);
        background: whitesmoke;
        border-radius: 10px 10px 0px 0px;
        display: flex;
        align-items: center;
        text-align: center;
        gap: 0.5rem;
        padding: 0 1rem;
        font-weight: bold;
        font-size: 16pt;
        font-variant-caps: all-small-caps;
      }
    }
    .input-item {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: bold;
      font-size: 14pt;
      font-variant-caps: all-small-caps;
      //margin-bottom: 0.5rem;
    }
  }

  .image-gallery {
    //height: auto;
    //width: auto;
    min-width: 200px;
  }
`;

const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5rem;
  padding: 1rem 0.5rem;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 3rem;

    h4 {
      color: #1c3b57;
    }
  }
`;

export default ProjectDetails;
