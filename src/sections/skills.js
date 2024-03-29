import { useState, useEffect } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Icon from "../components/Icon";
import useScroll from "../components/useScroll";
import {
  containerSlideInOutRight,
  slideUp,
  slideDown,
  bounceDown,
  bounceUp,
  slideLeft,
  slideRight,
} from "../styles/animations";
//data
import { getCollection } from "../api/api";

const Skills = ({ skillsRef }) => {
  const [technologies, setTechnologies] = useState([]);
  const [tools, setTools] = useState([]);
  const [element, controls] = useScroll();

  useEffect(() => {
    async function getTechnologies() {
      return await getCollection("technologies");
    }
    async function getTools() {
      return await getCollection("tools");
    }

    getTechnologies()
      .then((results) => {
        if (results.status === 200) {
          //console.log(results.status);
          setTechnologies(results.data);
        }
      })
      .catch((err) => {
        console.log("Skills: get Technologies error: ", err);
      });

    getTools()
      .then((results) => {
        if (results.status === 200) {
          console.log(results.status);
          setTools(results.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const frontend = technologies.filter((t) => t.category === "frontend");
  const backend = technologies.filter((t) => t.category === "backend");
  const database = technologies.filter((t) => t.category === "database");
  const infrastructure = technologies.filter(
    (t) => t.category === "infrastructure"
  );
  const other = technologies.filter(
    (t) =>
      t.category !== "frontend" &&
      t.category !== "backend" &&
      t.category !== "database" &&
      t.category !== "infrastructure"
  );

  return (
    <SkillsSection
      className="section-light fullheight"
      id="skills"
      ref={element}
    >
      <motion.div
        className="container container-light container-right"
        variants={containerSlideInOutRight}
        initial="initial"
        animate={controls}
      >
        <div className="gradientRight" />
        <div className="inner-container" ref={skillsRef}>
          <div className="section-header">
            <motion.div
              variants={slideDown}
              initial="initial"
              animate="animate"
              className="section-title-content"
            >
              <Icon
                icon="HiCode"
                size="30px"
                color="#313131"
                title="Skills icon"
              />
              <h1 className="section-heading heading-dark">Technical Skills</h1>
            </motion.div>
            <StyledLine
              transition={{
                delay: 1,
                duration: 1,
              }}
              height="6px"
              width="100%"
              bgColor="#f5f5f5"
            />
          </div>

          <div className="content">
            {frontend.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Frontend
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {frontend.map((technology) => {
                    return (
                      <motion.div
                        className="skill-item"
                        key={uuidv4()}
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                      >
                        <a
                          key={uuidv4()}
                          href={technology.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{technology.name}</h4>
                          <Icon
                            icon={technology.icon}
                            color={technology.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
            {backend.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Backend
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {backend.map((technology) => {
                    return (
                      <motion.div
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                        className="skill-item"
                        key={uuidv4()}
                      >
                        <a
                          key={uuidv4()}
                          href={technology.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{technology.name}</h4>
                          <Icon
                            icon={technology.icon}
                            color={technology.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
            {database.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Database
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {database.map((technology) => {
                    return (
                      <motion.div
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                        className="skill-item"
                        key={uuidv4()}
                      >
                        <a
                          key={uuidv4()}
                          href={technology.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{technology.name}</h4>
                          <Icon
                            icon={technology.icon}
                            color={technology.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
            {infrastructure.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Deployment
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {infrastructure.map((technology) => {
                    return (
                      <motion.div
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                        className="skill-item"
                        key={uuidv4()}
                      >
                        <a
                          key={uuidv4()}
                          href={technology.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{technology.name}</h4>
                          <Icon
                            icon={technology.icon}
                            color={technology.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
            {other.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Other
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {other.map((technology) => {
                    return (
                      <motion.div
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                        className="skill-item"
                        key={uuidv4()}
                      >
                        <a
                          key={uuidv4()}
                          href={technology.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{technology.name}</h4>
                          <Icon
                            icon={technology.icon}
                            color={technology.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
            {tools.length > 0 && (
              <section>
                <div className="section-header">
                  <div className="section-title-content">
                    <motion.h2
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      className="section-subheading heading-dark"
                    >
                      Tools
                    </motion.h2>
                  </div>
                  <StyledLine
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    height="4px"
                    width="100%"
                    bgColor="#f5f5f5"
                  />
                </div>
                <div className="selection">
                  {tools?.map((tool) => {
                    return (
                      <motion.div
                        variants={bounceUp}
                        initial="initial"
                        animate="animate"
                        className="skill-item"
                        key={uuidv4()}
                      >
                        <a
                          key={uuidv4()}
                          href={tool.address}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{tool.name}</h4>
                          <Icon
                            icon={tool.icon}
                            color={tool.color}
                            size="70px"
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          <div className="section-header">
            <motion.div
              className="section-title-content"
              variants={slideDown}
              initial="initial"
              animate="animate"
            >
              <Icon
                icon="BsPersonFill"
                size="30px"
                color="#313131"
                title="Skills icon"
              />
              <h1 className="section-heading heading-dark">Soft Skills</h1>
            </motion.div>
            <StyledLine
              transition={{
                delay: 1,
                duration: 1,
              }}
              height="6px"
              width="100%"
              bgColor="#f5f5f5"
            />
          </div>

          <div className="content">Effective communicator</div>
        </div>
      </motion.div>
    </SkillsSection>
  );
};

const SkillsSection = styled(motion.div)`
  //edit justify content if switching sides
  justify-content: flex-end;

  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    //border: 1px solid red;
    row-gap: 1rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    //flex-direction: column;
    width: 100%;
    height: auto;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 7rem;
    z-index: 1;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      //border: 1px solid red;

      .selection {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;

        .skill-item {
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
        }
      }
    }
  }
`;

export default Skills;
