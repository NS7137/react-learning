import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removerPerson = id => {
    setPeople(people => {
      return people.filter(person => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removerPerson={removerPerson} />
    </section>
  );
};

const List = ({ people, removerPerson }) => {
  return (
    <>
      {people.map(person => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removerPerson={removerPerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removerPerson }) => {
  return (
    <div className='item'>
      <h4>{id}</h4>
      <h4>{name}</h4>
      <button onClick={() => removerPerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
