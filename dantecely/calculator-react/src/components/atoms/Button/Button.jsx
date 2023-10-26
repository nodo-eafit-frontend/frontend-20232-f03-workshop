import PropTypes from 'prop-types'

const Button = ({ text, className }) => {
  const handleClick = () => console.log(text);

  return <button className={className} onClick={() => handleClick()}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Button;

