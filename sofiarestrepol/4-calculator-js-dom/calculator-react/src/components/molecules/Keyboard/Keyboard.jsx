// import PropTypes from "prop-types";
// import keys from '../../../json/keys.json';
import "./styles.scss";

const namespace = "keyboard";


const Keyboard = () => {
  return (
    <article className={namespace}>
      {/* {keys.map(({ text, classname }, index) => (
        <Button key={`button-${index}-${text}`} text={text} className={classname} />
      ))} */}
      <button>AC</button>
      <button>←</button>
      <button>%</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      <button>OK</button>
    </article>
  )

}//step 1: toma la lista de keys, saca su classname, y se lo aplica al boton


// Keyboard.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default Keyboard;
