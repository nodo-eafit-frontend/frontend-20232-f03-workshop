// import PropTypes from 'prop-types';
import './styles.scss';

const namespace = 'input';

const Input = () => {
  return <input className={namespace} />;
}; 

//se agrega readonly para solo lec, se pone como un props, y se define su valor en default


// Input.defaultProps = { //si no se pone nada en props, se usa esto por defecto (como los argumentos en Py)
//   type: 'text',
//   value: '', //vacio por defecto
//   // readOnly: false,
//   readOnly: true,
// };

// Input.propTypes = {
//   type: PropTypes.string,
//   value: PropTypes.string,
//   readOnly: PropTypes.bool,
// };

export default Input;
