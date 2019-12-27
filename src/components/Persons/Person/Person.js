import './Person.css';

import PropTypes from 'prop-types';
import Radium from 'radium';
import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
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
                <div className='Person' style={style}>
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                    type="text" 
                    onChange={this.props.changed} 
                    ref= {(inputEl) => {this.inputElement = inputEl}}
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