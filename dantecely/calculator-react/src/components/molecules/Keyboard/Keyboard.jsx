import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import keyBoards from '../../../json/key-boards.json';
import './styles.scss';

const namespace = 'keyboard';

const Keyboard = ({ onClick }) => {
  return (
    <article className={namespace}>
      {keyBoards.map(({ text, classname }, index) => {
        return <Button key={`button-${index}-${text}`} text={text} className={classname} onClick={onClick} />;
      })}
    </article>
  );
};

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keyboard;
