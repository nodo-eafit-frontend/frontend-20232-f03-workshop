import PropTypes from "prop-types";
import keys from "../../../json/keys.json";
import Button from "../../atoms/Button/Button";
import "./styles.scss";

const namespace = "keyboard";

const Keyboard = ({ onClick }) => {
  return (
    <article className={namespace}>
      {/* {keys.map(({ text, class_name }, index) => ( //step 1: toma la lista de keys, saca su classname, y ...
        <Button key={`button-${index}-${text}`} text={text} className={class_name} /> //... se lo aplica al boton
      ))} tambien le aplica el index y el text */}
      {keys.map(({ text, classname }, index) => {
        return (
          <Button
            key={`button-${index}-${text}`}
            text={text}
            className={classname}
            onClick={onClick}
          />
        );
      })}
    </article>
  );
};

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keyboard;
