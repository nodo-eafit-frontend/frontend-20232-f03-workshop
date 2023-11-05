
import '../../json/keys.json';
// import Buttons from "../buttons/Buttons.jsx";
import '../buttons/buttons.scss';
import "./keyboard.scss";

const namespace = "keyboard";

const Keyboard = () => {
  return (
    <article className={namespace}>
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
  );
};

export default Keyboard;