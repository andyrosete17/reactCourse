import React from 'react';
import './Cockpit.css';

const  cockpit = (props) =>{
  const classes = [];
  let btnClass = '';

if (props.showPerson) {
  btnClass = 'red';
}

  if (props.persons.length <= 2) {
    classes.push('red');
  }
  if (props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div className='Cockpit'>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          //style={style}
          className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;