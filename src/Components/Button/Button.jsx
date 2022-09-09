import PropTypes from 'prop-types'

function Button(text, type, disabled, children) {
  return (
    <button type={type} disabled={disabled && true}>
      {text} {children ? children : null}
    </button>
  );
}

Button.defaultProps = {
  text: "Button Title",
  type: "submit",
  disabled: false,
//   children: null,
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
//   children: PropTypes.object,
};

export default Button;
