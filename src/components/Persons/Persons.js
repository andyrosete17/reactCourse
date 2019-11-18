import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

  // static getDerivedStateFromProps(props,state){
  //   console.log('Persons.js getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nexState){
    console.log('Persons.js shouldComponentUpdate', nextProps, nexState );
    return  nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
            ? true 
            : false;
  }

  getSnapshotBeforeUpdate(prevProps, prevStates){
    console.log('Persons.js getSnapshotBeforeUpdate', prevProps, prevStates);
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Persons.js componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] component willUnmount');
  }

  render(){
      console.log('Persons.js rendering');
      return this.props.persons.map((person, index) => {
          return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
        });
  };
}

  export default Persons;