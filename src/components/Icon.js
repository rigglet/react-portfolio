import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";
import * as allIcons from "react-icons/all";

const Icon = ({ icon, color, size, title, className, func, showDropMenu }) => {
  //icons
  let DynamicIcon = allIcons[icon];
  return (
    <IconContext.Provider
      value={{ color, size, title, className, func, showDropMenu }}
    >
      {DynamicIcon !== undefined && (
        <DynamicIcon onClick={() => func(!showDropMenu)} />
      )}
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
