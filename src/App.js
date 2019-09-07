import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
const [personState, setPersonsState] = useState({
  persons:[
    {name: 'lola', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stef', age: 26}
  ],
  otherState : 'other state first'
});

const [otherState, setOtherState] = useState('other state new value');

console.log(personState, otherState);
const switchNameHandler = (newName) => {
  setPersonsState({persons:[
    {name: newName, age: 26},
    {name: 'Manu', age: 29},
    {name: 'Stef', age: 55}
  ] });
}

const nameChangedHandler =(event) =>{
  setPersonsState({persons:[
    {name: 'Manu', age: 26},
    {name: event.target.value, age: 29},
    {name: 'Stef', age: 55}
  ] });
}

    return (
      <div className="App">
        <h1>Hi, Im react</h1>
        <button onClick={() => switchNameHandler('Palla')}>Switch Name</button>
        <Person name={personState.persons[0].name} 
                age={personState.persons[0].age}
                click={switchNameHandler}>My hobbies: Racing
        </Person>
        <Person name={personState.persons[1].name} 
                age={personState.persons[1].age}
                click={switchNameHandler.bind(this, 'AndyLaTIs')}
                changed = {nameChangedHandler}/>
        <Person name={personState.persons[2].name} 
                age={personState.persons[2].age}/>
      </div>
    );
}

export default app;

