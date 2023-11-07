import Button from "../../atoms/buttons/Button";
import './styles.scss';

const namespace = 'keyboard';

const Keyboard = () => {
    return (
        <article className={namespace}>
        {Keyboards.map(({ text, classname }, index) => {
            return <Button key={`button-${index}-${text}`} text={text} className={classname} />
        })}
        </article>
    )
};

export default Keyboard;
