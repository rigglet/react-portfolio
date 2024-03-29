//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import { experienceVariants, buttonVariants } from "../styles/animations";
import { HashLink } from "react-router-hash-link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "../components/Icon";
import {
  //fadeInOut,
  //elementSlideInOut,
  containerSlideInOutLeft,
} from "../styles/animations";
import useScroll from "../components/useScroll";
//import { GiPurpleTentacle } from "react-icons/gi";

const Experience = ({ experienceRef }) => {
  const [element, controls] = useScroll();

  return (
    <ExperienceSection
      className="section-light fullheight"
      id="experience"
      ref={element}
    >
      <motion.div
        className="container-light container-left"
        variants={containerSlideInOutLeft}
        initial="initial"
        animate={controls}
      >
        <div className="gradientLeft" />
        <div className="content" ref={experienceRef}>
          <div className="section-header">
            <div className="section-title-content">
              <Icon
                icon="FaUserTie"
                size="30px"
                color="var(--header-color-dark)"
                title="Projects icon"
              />
              <h1 className="section-heading heading-dark">Experience</h1>
            </div>
            <StyledLine
              height="6px"
              width="100%"
              bgColor="var(--color-light-background)"
            />
          </div>

          {/* <article>Code Challenges</article>
          <p>Codewars API</p>
          <p>Hacker Rank</p>
          <p>Freecode Camp</p>
          <p>Others - DevEd - Udemy</p> */}

          <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#c6c6c6",
                color: "#313131",
              }}
              contentArrowStyle={{
                borderRight: "20px solid  #c6c6c6",
              }}
              date="2006 - 2007"
              iconStyle={{ background: "#689ed0" }}
              icon={
                <Icon
                  icon="MdWork"
                  color="#313131"
                  size="25px"
                  title="work icon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Enterprise Web Application Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                England, UK
              </h4>
              <p>EADS Astrium - Web Application Developer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#c6c6c6",
                color: "#313131",
              }}
              contentArrowStyle={{
                borderRight: "20px solid #c6c6c6",
              }}
              date="2017 - 2020"
              iconStyle={{ background: "#689ed0", color: "#689ed0" }}
              icon={
                <Icon
                  icon="MdWork"
                  color="#313131"
                  size="25px"
                  title="work icon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Technical Consultant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sydney, NSW
              </h4>
              <p>Phaze Technologies</p>
            </VerticalTimelineElement>
          </VerticalTimeline>

          <HashLink smooth to="/#contact">
            <motion.button
              className="page-btn light-btn"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request full CV
            </motion.button>
          </HashLink>
        </div>
      </motion.div>
    </ExperienceSection>
  );
};
const ExperienceSection = styled(motion.div)`
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //overflow-y: scroll;
  }
`;

export default Experience;
