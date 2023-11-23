import Button from "../../atoms/buttons/Button";
import keyboardButtons from '../../../json/keyboard.json';
import './style.scss';

const namespace = 'keyboard';

const Keyboard = ({onClick}) => {



    return (
        <article className={namespace}>
            {keyboardButtons.map(({text, classname}, index) => (
                <Button className={classname} text={text} key={`button_${index}`} onClick={onClick}/>
            ))}
        </article>
    )
};



export default Keyboard;
