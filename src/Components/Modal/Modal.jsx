import ReactDom from "react-dom";
import ModalHeader from "./ModalHeader";
import PropTypes from "prop-types";
function Modal({ isOpen, title, children, showHeader, onCloseModal }) {
  if (!isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal_wrapper">
      <div className="modal_content_wrapper">
        {showHeader && (
          <ModalHeader title={title} onCloseModal={onCloseModal} />
        )}

        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.object,
};
Modal.defaultProps = {
  children: "Add Your Modal Content",
  showHeader: true,
};

export default Modal;
