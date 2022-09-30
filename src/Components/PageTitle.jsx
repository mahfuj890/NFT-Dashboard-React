import PropTypes from "prop-types";

function PageTitle({ text, children,bottomSpace }) {
  return (
    <div className={`header_area ${bottomSpace ? "add_space":""}`}>
      <h2 className="page_title">{text}</h2>
      {children}
    </div>
  );
}

PageTitle.prototype = {
  text: PropTypes.string,
  bottomSpace: PropTypes.bool,
};
PageTitle.defaultProps = {
  text: "Add Your Title",
  bottomSpace: true,
};

export default PageTitle;
