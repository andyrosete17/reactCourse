import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      {id:'asdf1', name: 'Max', age: 28 },
      {id:'asdf2', name: 'Manu', age: 29 },
      {id:'asdf3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice(); //create a copy 
    const persons = [... this.state.persons];
    persons.splice(personIndex,1); //delete element
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]};
    if (person !== null)
    {
      person.name = event.target.value;
      const persons = [... this.state.persons];
      persons[personIndex] = person;
  
      this.setState( {persons: persons } );
    }
    
  }

  tooglePersonHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    });
  }

  render () {
    const style ={
      backgroundColor:'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };   

    let persons = null;

    if (this.state.showPersons){
        persons =(
          <div>
              {this.state.persons.map((person, index) => {
                return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age} 
                key = {person.id} 
                changed = {(event) => this.nameChangedHandler(event, person.id)}/>;
              })}         
          </div>
        );
        style.backgroundColor = 'red';
        style[':hover']= {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }

    const classes = [];
    if (this.state.persons.length <=2){
        classes.push('red');
    }
    if (this.state.persons.length <=1){
       classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className= {classes.join(' ')}>This is really working!</p>
        <button 
        style={style}
        onClick={this.tooglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
