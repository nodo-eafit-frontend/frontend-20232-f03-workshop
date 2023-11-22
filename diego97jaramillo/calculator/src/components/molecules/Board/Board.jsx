import Result from "../../atoms/result/Result";
import Input from "../../atoms/input/Input";
import PropTypes from 'prop-types';
import './Board.scss';


const namespace = 'board';

const Board = ({ textGiven, result }) => {
  return (
    <section className={namespace}>
      <Result result={result}/>
      <Input textGiven={textGiven} readOnly={true}/>
    </section>
  )
}

Board.propTypes = {
  textGiven: PropTypes.string
};


export default Board
