import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState('24');
  const [message, setMessage] = useState('random message');

  const changeMessage1 = () => {
    setPerson({ ...person, message: 'hello world' });
  };

  const changeMessage2 = () => {
    setMessage('hello world');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={changeMessage1}>
        change message1
      </button>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeMessage2}>
        change message2
      </button>
    </>
  );
};

export default UseStateObject;
