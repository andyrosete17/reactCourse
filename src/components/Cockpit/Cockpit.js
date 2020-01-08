import './Cockpit.css';

import React, { useEffect, useRef } from 'react';

const  cockpit = (props) =>{

    const toggleBtnRef = useRef(null);

    
    //Execute every time persons change
    useEffect(()=>{
        console.log('CockPit.js useEffect');
        //http request
        // setTimeout(() => {
            //   alert('Save data to cloud');
            // }, 1000);
            toggleBtnRef.current.click();
  },[props.persons])

  //Execute only once when the app load or when component is destroy
  useEffect(()=>{
    console.log('CockPit.js useEffect');
    //http request
    setTimeout(() => {
      //alert('FirstTime');
    }, 2000);
    return () => {
      console.log('[Cockpit.js] cleanup work in use effect');
    }
  },[]);

  // i will trigger in every cycle
  useEffect(() => {
    console.log('CockPit.js 2nd useEffect');
    return () => {
      console.log('CockPit.js cleanup work in 2nd useEffect');
    };
  });

  const classes = [];
  let btnClass = '';

if (props.showPerson) {
  btnClass = 'red';
}

  if (props.personsLength <= 2) {
    classes.push('red');
  }
  if (props.personsLength <= 1) {
    classes.push('bold');
  }

  return (
    <div className='Cockpit'>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        ref= {toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>Toggle Persons
          </button>
          <button onClick={props.login}>Log in</button>
    </div>
  );
}
//Memo get a snapshot of the datas
export default React.memo(cockpit);