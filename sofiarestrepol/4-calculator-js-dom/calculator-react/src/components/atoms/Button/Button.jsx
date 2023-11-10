// import PropTypes from 'prop-types';
import './styles.scss';

// const namespace = 'button';

const Button = (classname, text) => {
  return (
    <button>{text}</button>
  );
} //step 2: el boton le aplica el classname a la etiqueta button

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   className: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export default Button;
