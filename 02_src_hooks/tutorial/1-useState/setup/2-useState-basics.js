import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('random titel');

  const handleClick = () => {
    if (text === 'random titel') {
      setText('hello world');
    } else {
      setText('random titel');
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
