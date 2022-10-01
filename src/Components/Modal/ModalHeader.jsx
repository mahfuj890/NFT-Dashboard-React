import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function ModalHeader({ title, onCloseModal }) {
  return (
    <div className="action_table_modal_area d-flex-between g-sm">
      <h3>{title}</h3>
      <div className="close_btn">
        <button type="button" onClick={onCloseModal}>
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
}
ModalHeader.prototype = {
  title: PropTypes.string,
};
ModalHeader.defaultProps = {
  title: "Add Modal Title",
};

export default ModalHeader;
