//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//import Loader from "../components/Loader";
import profile from "../img/profile.png";
//import Icon from "../components/Icon";
import StyledLine from "../styles/styledLine";
import {
  fadeInOut,
  elementSlideInOut,
  containerSlideInOutLeft,
} from "../styles/animations";

const About = ({ aboutRef, aboutControls }) => {
  return (
    <AboutSection
      ref={aboutRef}
      //variants={containerSlideInOutLeft}
      //initial="initial"
      //animate={aboutControls}
    >
      <div className="section-header">
        <div className="section-title-content">
          {/* <Icon
                icon="FaRegUserCircle"
                size="30px"
                color="#313131"
                title="About icon"
              /> */}
          <h1 className="section-heading heading-dark">About me</h1>
        </div>
        <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
      </div>

      <motion.div className="content">
        <motion.img
          className="profile"
          src={profile}
          alt="Author of portfolio"
          variants={elementSlideInOut}
          //variants={fadeInOut}
          initial="initial"
          animate={aboutControls}
        />
        <motion.div
          variants={fadeInOut}
          initial="initial"
          animate={aboutControls}
          className="copy"
        >
          <motion.article
          // variants={fadeInOut}
          // initial="initial"
          // animate={aboutControls}
          >
            <p id="hi">Hi, I'm</p>
            <p>
              <span id="first">Neil </span>
            </p>
            <p id="last">
              <span>Rigg</span>
              <span id="dot">.</span>
            </p>
          </motion.article>
          <motion.article
          // variants={fadeInOut}
          // initial="initial"
          // animate={aboutControls}
          >
            <p>
              I am a graduate with a&nbsp;
              <span className="highlight">
                BSc in Computer Systems and Networks
              </span>
              &nbsp;with&nbsp;
              <span className="highlight">
                over 5 years of relevant industry experience
              </span>
              &nbsp; in the full software development life-cycle. From
              requirements gathering, to designing and building systems in
              response to the needs of the customer.
            </p>
          </motion.article>
        </motion.div>
      </motion.div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  //row-gap: 1rem;
  z-index: 20;

  .content {
    position: static;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    //justify-content: space-between;
    column-gap: 2rem;

    .copy {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      column-gap: 2rem;

      article {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        //width: 100%;
        padding: 0.5rem;
        font-weight: 200;
        text-align: justify;
        font-size: 1.5rem;

        &:first-of-type {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          row-gap: 1rem;
        }

        .highlight {
          font-weight: 600;
          color: #689ed0;
        }
      }

      #first {
        display: inline-block;
        font-size: 4rem;
        color: #689ed0;
        color: #313131;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      #last {
        font-size: 6rem;
        color: #313131;
        color: #689ed0;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      #dot {
        font-size: 6rem;
        color: #313131;
        font-weight: 700;
        //text-align: right;
        width: 100%;
        line-height: 0;
      }
      #hi {
        font-size: 2rem;
      }
    }

    .profile {
      z-index: 10;
      min-width: 400px;
      height: 400px;
      border: 4px solid #313131;
      background: whitesmoke;
      padding: 8px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: scale-down;
      object-position: center;
    }
  }
`;

export default About;
// //framer motion and styled components
// import { motion } from "framer-motion";
// import styled from "styled-components";
// //import Loader from "../components/Loader";
// import profile from "../img/profile.png";
// //import Icon from "../components/Icon";
// import StyledLine from "../styles/styledLine";
// import {
//   fadeInOut,
//   elementSlideInOut,
//   containerSlideInOutLeft,
// } from "../styles/animations";
// const About = ({ aboutRef, aboutControls }) => {
//   return (
//     <AboutSection
//       id="about"
//       className="section-light autoheight"
//       ref={aboutRef}
//     >
//       <motion.div
//         className="container container-light container-left"
//         variants={containerSlideInOutLeft}
//         initial="initial"
//         animate={aboutControls}
//       >
//         <div className="gradientLeft" />
//         <div className="inner-container">
//           <div className="section-header">
//             <div className="section-title-content">
//               {/* <Icon
//                 icon="FaRegUserCircle"
//                 size="30px"
//                 color="#313131"
//                 title="About icon"
//               /> */}
//               <h1 className="section-heading heading-dark">About me</h1>
//             </div>
//             <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
//           </div>

//           <motion.div className="content">
//             <motion.img
//               className="profile"
//               src={profile}
//               alt="Author of portfolio"
//               variants={elementSlideInOut}
//               //variants={fadeInOut}
//               initial="initial"
//               animate={aboutControls}
//             />
//             <motion.div
//               variants={fadeInOut}
//               initial="initial"
//               animate={aboutControls}
//               className="copy"
//             >
//               <motion.article
//               // variants={fadeInOut}
//               // initial="initial"
//               // animate={aboutControls}
//               >
//                 <p id="hi">Hi, I'm</p>
//                 <p>
//                   <span id="first">Neil </span>
//                 </p>
//                 <p id="last">
//                   <span>Rigg</span>
//                   <span id="dot">.</span>
//                 </p>
//               </motion.article>
//               <motion.article
//               // variants={fadeInOut}
//               // initial="initial"
//               // animate={aboutControls}
//               >
//                 <p>
//                   I am a graduate with a&nbsp;
//                   <span className="highlight">
//                     BSc in Computer Systems and Networks
//                   </span>
//                   &nbsp;with&nbsp;
//                   <span className="highlight">
//                     over 5 years of relevant industry experience
//                   </span>
//                   &nbsp; in the full software development life-cycle. From
//                   requirements gathering, to designing and building systems in
//                   response to the needs of the customer.
//                 </p>
//               </motion.article>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* <Loader /> */}
//     </AboutSection>
//   );
// };

// const AboutSection = styled(motion.div)`
//   min-height: 90%;
//   display: flex;
//   align-items: center;
//   //edit justify content if switching sides
//   justify-content: flex-start;

//   .inner-container {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     height: 100%;
//     width: 100%;
//     //row-gap: 1rem;
//     z-index: 100;
//   }
//   .content {
//     position: static;
//     display: flex;
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     //justify-content: space-between;
//     column-gap: 2rem;

//     .copy {
//       height: 100%;
//       width: 100%;
//       display: flex;
//       align-items: center;
//       column-gap: 2rem;

//       article {
//         display: flex;
//         flex-direction: column;
//         flex-grow: 1;
//         //width: 100%;
//         padding: 0.5rem;
//         font-weight: 200;
//         text-align: justify;
//         font-size: 1.5rem;

//         &:first-of-type {
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//           justify-content: center;
//           row-gap: 1rem;
//         }

//         .highlight {
//           font-weight: 600;
//           color: #689ed0;
//         }
//       }

//       #first {
//         display: inline-block;
//         font-size: 4rem;
//         color: #689ed0;
//         color: #313131;
//         font-weight: 700;
//         width: 100%;
//         line-height: 70px;
//       }
//       #last {
//         font-size: 6rem;
//         color: #313131;
//         color: #689ed0;
//         font-weight: 700;
//         width: 100%;
//         line-height: 70px;
//       }
//       #dot {
//         font-size: 6rem;
//         color: #313131;
//         font-weight: 700;
//         //text-align: right;
//         width: 100%;
//         line-height: 0;
//       }
//       #hi {
//         font-size: 2rem;
//       }
//     }

//     .profile {
//       z-index: 10;
//       min-width: 400px;
//       height: 400px;
//       border: 4px solid #313131;
//       background: whitesmoke;
//       padding: 8px;
//       border-radius: 50%;
//       overflow: hidden;
//       object-fit: scale-down;
//       object-position: center;
//     }
//   }
// `;

// export default About;
