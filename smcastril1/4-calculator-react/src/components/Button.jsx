// import { useState, useEffect } from "react";

const Button = ({ text }) => {
  // const [count, setCount] = useState(0);
  // const [timer, setTimer] = useState(0);

  // const incrementar = () => {
  //   setTimer(timer + 100);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log(count);
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [count]);

  const handleClick = () => console.log(text);

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default Button;
