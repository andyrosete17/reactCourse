import React, {useEffect} from 'react';
import './Cockpit.css';

const  cockpit = (props) =>{

  //Execute every time persons change
  useEffect(()=>{
    console.log('CockPit.js useEffect');
    //http request
    setTimeout(() => {
      alert('Save data to cloud');
    }, 1000);
  },[props.persons])

  //Execute only once when the app load
  useEffect(()=>{
    console.log('CockPit.js useEffect');
    //http request
    setTimeout(() => {
      alert('FirstTime');
    }, 2000);
  },[])

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
          className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;