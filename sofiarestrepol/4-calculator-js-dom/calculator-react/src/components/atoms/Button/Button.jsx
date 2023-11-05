import PropTypes from 'prop-types';
import './styles.scss';

const namespace = 'button';

const Button = ({ text, className, onClick }) => {
  return (
    <button className={`${namespace} ${className}`} onClick={() => onClick(text)}>
      {text}
    </button>
  );
} //step 2: el boton le aplica el classname a la etiqueta button

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
