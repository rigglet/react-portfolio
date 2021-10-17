import { useEffect, useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { detailPopUp } from "../styles/animations";
import { getDocumentById } from "../api/api";
import Icon from "./Icon";
//uuid
import { v4 as uuidv4 } from "uuid";
import { serverBaseURL } from "../config/config";
//functions
import CloseButton from "./closeButton";
//dates
//import { DateTime } from "luxon";
//image gallery
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
//icons
import { BsCardText } from "react-icons/bs";
import { ImImages } from "react-icons/im";
import { MdWeb } from "react-icons/md";
//import { AiOutlineCalendar } from "react-icons/ai";

const ProjectDetails = ({ projectClose, project }) => {
  let [imageArray, setImageArray] = useState([]);
  let [mainImage, setMainImage] = useState({});

  useEffect(() => {
    setImageArray(
      project.screenshots?.map((image) => {
        return {
          original: `${serverBaseURL()}/images/${image.fileName}`,
          thumbnail: `${serverBaseURL()}/images/${image.fileName}`,
        };
      })
    );
    setMainImage(
      project.screenshots?.filter((image) => {
        return image._id === project?.mainImage;
      })[0]
    );
  }, []);

  //console.log(project);
  console.log(projectClose);
  return (
    <StyledOuterContainer>
      <StyledInnerContainer
        variants={detailPopUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseButton closeFunction={projectClose} />

        <div className="titleHeader">
          <MdWeb className="titleIcon" />
          <h1>Project details</h1>
        </div>

        <div className="form-information">
          <section className="top-section">
            <fieldset className="details">
              <legend>
                Overview <BsCardText />
              </legend>

              <h1>{project?.projectName}</h1>
              <p>{project?.projectDescription}</p>

              <div className="input-item">
                <label htmlFor="version">Version:</label>
                <p>{project?.version}</p>
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

            {imageArray.length > 1 ? (
              <fieldset className="images">
                <legend>
                  Screenshots <ImImages />
                </legend>
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
              </fieldset>
            ) : (
              <img
                className="main-image"
                src={`${serverBaseURL()}/images/${mainImage.fileName}`}
                alt={mainImage.description}
              />
            )}
          </section>

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
                  size="2rem"
                  title="Highlights icon"
                />
                <h4
                //key={uuidv4()}
                >
                  {feature}
                </h4>
              </div>
            ))}
          </fieldset>

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
                  size="2rem"
                  title="Highlights icon"
                />
                <h4
                //key={uuidv4()}
                >
                  {highlight}
                </h4>
              </div>
            ))}
          </fieldset>

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
  //min-height: 95vh;
  height: 95vh;
  height: 100%;
  border: 0.05rem #689ed0 solid;
  border-radius: 4px;
  background-color: var(--color-light-background);
  color: #313131;
  overflow-y: scroll;
  //overflow-x: scroll;

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
    //width: 100%;
    height: auto;
    display: flex;
    //flex-direction: column;
    //flex-grow: 1;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;

    .top-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      //justify-content: center;
      //flex-grow: 1;
      //flex-wrap: wrap;
      //border: 1px solid red;
      .images {
        display: flex;
        flex-basis: 50%;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 1rem;
        box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
      }
      .main-image {
        display: flex;
        flex-grow: 1;
        flex-shrink: 2;
        flex-basis: 45%;
        max-width: 50%;
        border-radius: 10px;
        object-fit: scale-down;
        border: 2px solid red;
      }
      .details {
        display: flex;
        //flex-shrink: 0;
        //flex-shrink: 0;
        flex-direction: column;
        flex-basis: 50%;
        flex-grow: 1;
        //height: 100%;
        padding: 1rem;
        gap: 1rem;
        //flex-wrap: wrap;
        box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
        p {
          color: whitesmoke;
          color: rgb(49, 49, 49);
          //color: black;
          font-size: 12pt;
          background: rgba(104, 158, 208, 10%);
          background: rgba(49, 49, 49, 25%);
          border-radius: 10px;
          padding: 0.5rem;
        }
        .addresses {
          display: flex;
          justify-content: space-evenly;
          //gap: 1rem;
          .address-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
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
      flex-direction: column;
      //align-items: center;
      flex-grow: 1;
      padding: 1rem;
      //width: 100%;
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
      border-radius: 10px;
      border: 2px solid #313131;
      z-index: 2;
    }
    legend {
      z-index: 1;
      //background: rgb(104, 158, 208, 50%);
      border-top: 2px solid #313131;
      border-left: 2px solid #313131;
      border-right: 2px solid #313131;
      box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
      background: whitesmoke;
      border-radius: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
      padding: 0 1rem;
      font-weight: bold;
      font-size: 16pt;
      font-variant-caps: all-small-caps;
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
    height: 70vh;
    width: auto;
  }
  .image-gallery-thumbnails-container {
    max-width: 65vw;
  }
  .image-gallery-thumbnails-container img {
    height: 100px;
    object-fit: scale-down;
  }
  .image-gallery-slide {
    height: 55vh;
    //background: white;
  }
  .image-gallery-slide img {
    height: 400px;
    object-fit: scale-down;
    object-position: center center;
  }
  //fullscreen view
  .fullscreen .image-gallery-slide {
    height: 80vh;
  }
  .fullscreen .image-gallery-slide img {
    height: 80vh;
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
