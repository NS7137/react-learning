import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (firstName && email) {
      // console.log('submit the form');
      const person = { id: new Date().getTime().toString(), firstName, email };
      // console.log(person);
      setPeople(people => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {/* onSubmit 放在form元素上，或  onClick 放在button元素上 */}
          <button type='submit'>add person</button>
        </form>
        {people.map(person => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
