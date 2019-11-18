import React, {Component} from 'react';
import './Person.css';
import Radium from 'radium';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
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
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </div>
            </Aux>
            )
    };
};

export default Radium(withClass(Person, "Person")); 