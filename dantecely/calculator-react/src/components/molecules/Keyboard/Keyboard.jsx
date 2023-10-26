import Button from '../../atoms/Button/Button';
import keyBoards from '../../../json/key-boards.json'

const namespace = 'keyboard';

const Keyboard = () => {
  return (
    <article className={namespace}>
      {keyBoards.map(({ text, class_name }, index) => (
        <Button key={`button-${index}-${text}`} text={text} className={class_name} />
      ))}
    </article>
  )
}

export default Keyboard
