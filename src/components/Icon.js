import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";
import * as allIcons from "react-icons/all";

const Icon = ({ icon, color, size }) => {
  //icons
  let DynamicIcon = allIcons[icon];
  return (
    <IconContext.Provider value={{ color, size }}>
      <DynamicIcon />
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  icon: "FaFlushed",
  color: "white",
  size: "30px",
};

export default Icon;
