import PropTypes from "prop-types";

function PageTitle({ text, children }) {
  return (
    <div className="header_area">
      <h2 className="page_title">{text}</h2>
      {children}
    </div>
  );
}

PageTitle.prototype = {
  text: PropTypes.string,
};
PageTitle.defaultProps = {
  text: "Add Your Title",
};

export default PageTitle;
