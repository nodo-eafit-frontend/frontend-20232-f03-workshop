import Result from "../../atoms/result/Result";
import Input from "../../atoms/input/Input";
import './Board.scss';


const namespace = 'board';

const Board = ({result}) => {
  return (
    <section className={namespace}>
        <Result result={result} readOnly={true}/>
        <Input  />
    </section>
  )
}

export default Board
