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
import { DateTime } from "luxon";
//image gallery
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
  let [imageArray, setImageArray] = useState([]);
  let [mainImage, setMainImage] = useState({});

  useEffect(() => {
    async function getProject() {
      return await getDocumentById("projects", projectId);
    }

    getProject()
      .then((results) => {
        console.log(results.data);
        if (results.status === 200) {
          setProject(results.data);
          // currentImage = results.data.screenshots.filter(
          //   (image) => image._id === results.data.mainImage
          // )[0];
        }
        return results;
      })
      .then((results) => {
        setImageArray(
          results.data?.screenshots?.map((image) => {
            return {
              original: `${serverBaseURL()}/images/${image.fileName}`,
              thumbnail: `${serverBaseURL()}/images/${image.fileName}`,
            };
          })
        );
        setMainImage(
          results.data?.screenshots?.filter((image) => {
            console.log("image._id: ", typeof image._id);
            console.log("mainImage: ", typeof results.data?.mainImage);
            return image._id === results.data?.mainImage;
          })[0]
        );
      });
  }, []);

  console.log(imageArray);

  return (
    <StyledOuterContainer>
      <StyledInnerContainer
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
          <h1>Project details</h1>
          {/* <h5>{project?._id}</h5> */}
        </div>

        <div className="form-information">
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
              <label htmlFor="website">Live site:</label>
              <a href={project?.website}>
                <Icon
                  icon="CgWebsite"
                  color="black"
                  size="50px"
                  title="Live site link"
                />
              </a>
            </div>
          </fieldset>

          {imageArray.length > 1 ? (
            <fieldset>
              <legend>
                Screenshots <ImImages />
              </legend>
              <ImageGallery
                items={imageArray}
                showPlayButton={false}
                //thumbnailPosition={"bottom"}
                //showIndex={true}
                autoPlay={true}
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
                  href={library.address}
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
        </div>
      </StyledInnerContainer>
    </StyledOuterContainer>
  );
};

const StyledOuterContainer = styled(motion.div)`
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
    row-gap: 2rem;
    column-gap: 2rem;
    .details {
      display: flex;
      flex-direction: column;
      width: 45%;
      height: auto;
      padding: 1rem;
      gap: 1rem;
      flex-wrap: wrap;
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
    .main-image {
      width: 50%;
      object-fit: scale-down;
    }

    .dates {
      display: flex;
      flex-direction: column;
      width: auto;
      width: 100%;
      height: auto;
      padding: 1rem;
      gap: 1rem;
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
