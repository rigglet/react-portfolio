import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";
import * as allIcons from "react-icons/all";

const Icon = ({ icon, color, size, title, className }) => {
  //icons
  let DynamicIcon = allIcons[icon];
  // if (icon in allIcons) {
  //   DynamicIcon = allIcons[icon];
  // } else {
  //   DynamicIcon = allIcons["FaDAndD"];
  // }

  //console.log("DynamicIcon: ", DynamicIcon);
  // console.log(icon, color, size, title, className);
  return (
    <IconContext.Provider value={{ color, size, title, className }}>
      {DynamicIcon !== undefined ? <DynamicIcon /> : ""}
      {/* <DynamicIcon /> */}
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
};

Icon.defaultProps = {
  icon: "FaFlushed",
  color: "blue",
  size: "30px",
  title: "icon",
};

export default Icon;
