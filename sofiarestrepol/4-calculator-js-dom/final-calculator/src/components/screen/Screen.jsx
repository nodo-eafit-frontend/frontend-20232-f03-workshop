import { currentOp, operation, previousOp } from '../calculator/Calculator.jsx';
import './screen.scss';

const namespace = 'screen';

const Screen = () => {
  return (
    <article className={namespace}>
      <div className="previous-op">{previousOp} {operation} 123 + </div>
      <div className="current-op">{currentOp}456</div>
    </article>
  );
};

export default Screen;