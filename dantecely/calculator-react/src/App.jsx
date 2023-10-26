import Button from './components/Button/Button';
import "./App.scss";

const bottons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '='];

function App({ title, time }) {

  return (
    <main>
      <section>
        {bottons.map((botton, index) => <Button key={index} text={botton} />)}
      </section>
    </main>
  );
}

export default App;
