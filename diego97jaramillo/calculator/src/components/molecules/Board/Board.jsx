import Result from "../../atoms/result/Result";
import Input from "../../atoms/input/Input";
import './Board.scss';


const namespace = 'board';

const Board = () => {
  return (
    <section className={namespace}>
        <Input />
        <Result />
    </section>
  )
}

export default Board
