import Button from "./components/Button";
import "./App.scss";

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "="];
function App({ title }) {
  // const { title } = props;

  return (
    <>
      <h1>{title}</h1>
      <main>
        <section>
          {buttons.map((button, index) => (
            <Button key={index} text={button} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
