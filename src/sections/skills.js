import { useState, useEffect } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Icon from "../components/Icon";
//data
import { getCollection } from "../api/api";

const Skills = () => {
  const [technologies, setTechnologies] = useState([]);
  const [tools, setTools] = useState([]);

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
          console.log(results.status);
          setTechnologies(results.data);
        }
      })
      .catch((err) => {
        console.log(err);
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

  const frontend = technologies.filter((t) => t.type === "frontend");
  const backend = technologies.filter((t) => t.type === "backend");
  const database = technologies.filter((t) => t.type === "database");
  const other = technologies.filter(
    (t) =>
      t.type !== "frontend" && t.type !== "backend" && t.type !== "database"
  );

  return (
    <SkillsSection className="section-light fullheight" id="skills">
      <div className="container container-light container-right">
        <div className="gradientRight" />
        <div className="inner-container">
          <div className="header">
            <h1 className="section-heading heading-dark">Skills</h1>
            <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
          </div>
          <div className="content">
            {frontend.length > 0 && (
              <section>
                <div className="header">
                  <h2 className="section-subheading heading-dark">Frontend</h2>
                  <StyledLine height="4px" width="100%" bgColor="#f5f5f5" />
                </div>
                <div className="selection">
                  {frontend.map((technology) => {
                    return (
                      <div className="skill-item" key={uuidv4()}>
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
            {backend.length > 0 && (
              <section>
                <div className="header">
                  <h2 className="section-subheading heading-dark">Backend</h2>
                  <StyledLine height="4px" width="100%" bgColor="#f5f5f5" />
                </div>
                <div className="selection">
                  {backend.map((technology) => {
                    return (
                      <div className="skill-item" key={uuidv4()}>
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
            {database.length > 0 && (
              <section>
                <div className="header">
                  <h2 className="section-subheading heading-dark">Database</h2>
                  <StyledLine height="4px" width="100%" bgColor="#f5f5f5" />
                </div>
                <div className="selection">
                  {database.map((technology) => {
                    return (
                      <div className="skill-item" key={uuidv4()}>
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
            {other.length > 0 && (
              <section>
                <div className="header">
                  <h2 className="section-subheading heading-dark">Other</h2>
                  <StyledLine height="4px" width="100%" bgColor="#f5f5f5" />
                </div>
                <div className="selection">
                  {other.map((technology) => {
                    return (
                      <div className="skill-item" key={uuidv4()}>
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
            {tools.length > 0 && (
              <section>
                <div className="header">
                  <h2 className="section-subheading heading-dark">Tools</h2>
                  <StyledLine height="4px" width="100%" bgColor="#f5f5f5" />
                </div>
                <div className="selection">
                  {tools?.map((tool) => {
                    return (
                      <div className="skill-item" key={uuidv4()}>
                        <h4>{tool.name}</h4>
                        <Icon icon={tool.icon} color={tool.color} size="70px" />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
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
      h3 {
      }
      .selection {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;

        .skill-item {
          h4 {
            color: #1c3b57;
          }
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          column-gap: 3rem;
        }
      }
    }
  }
`;

export default Skills;
