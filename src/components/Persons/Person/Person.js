import './Person.css';

import PropTypes from 'prop-types';
import Radium from 'radium';
import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
            console.log('Person.js rendering');
            const style ={
                '@media(min-width: 500px':{
                    width: '450px'
                }
            };
            return (
                <Aux>
                    {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <div className='Person' style={style}>
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                    type="text" 
                    onChange={this.props.changed} 
                    // ref= {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    value={this.props.name}/>
                </div>
            </Aux>
            )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Radium(withClass(Person, "Person")); 