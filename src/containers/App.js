import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      {id:'asdf1', name: 'Max', age: 28 },
      {id:'asdf2', name: 'Manu', age: 29 },
      {id:'asdf3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
   console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }

  // componentWillMount(){
  //   console.log('App.js componentWillMount');
  // }

  componentDidUpdate(){
    console.log('App.js componentDidUpdate');
  }
  
  //Indica si el componente debe actualizarse o renderizarse
  shouldComponentUpdate(nextProps, nextState){
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice(); //create a copy 
    const persons = [...this.state.persons];
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
      const persons = [...this.state.persons];
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
    console.log('App.js Render');
    let persons = null;

    if (this.state.showPersons){
        persons =(
          <div>
             <Persons
             persons = {this.state.persons}
             clicked = {this.deletePersonHandler}
             changed = {this.nameChangedHandler}
             />
          </div>
        );
    }

    return (
      <StyleRoot>
        <div className="App">
          <button onClick= {() => {
            this.setState({showCockpit:false});
            }}>
              Remove Cockpit
          </button>
        
        {this.state.showCockpit ? (
        <Cockpit
          title={this.props.appTitle}
          personsLength = {this.state.persons.length}
          showPerson = {this.state.showPersons} 
          clicked = {this.tooglePersonHandler}/>
          ) : null}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
