import React from 'react';
import './Button.scss';


const Button = ({text}) => {
    const handleClick = () => console.log(text);
  return <button onClick={() => handleClick()} >{text}</button>
}

export default Button
