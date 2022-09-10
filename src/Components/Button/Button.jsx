import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Button({
  hylerLink,
  path,
  children,
  type,
  version,
  isdisable,
  onHandleClick,
}) {
  return (
    <>
      {hylerLink ? (
        <Link
          to={path}
          disabled={isdisable}
          className={`default_btn ${version}`}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          disabled={isdisable}
          className={`default_btn ${version}`}
          onClick={onHandleClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  hylerLink: false,
  path: "#",
  type: "button",
  version: "",
  isdisable: false,
};

Button.propTypes = {
  hylerLink: PropTypes.bool,
  path: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isdisable: PropTypes.bool,
};

export default Button;
