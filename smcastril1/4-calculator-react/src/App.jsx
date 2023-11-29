import Button from "./components/button/Button";
import "./App.scss";

function App(props) {
  const { title } = props;

  return (
    <>
      <h1>{title}</h1>

      <main>
        <section>
          <Button text={1} />
        </section>
      </main>
    </>
  );
}

export default App;
