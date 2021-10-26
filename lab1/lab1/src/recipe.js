import React, { Component } from 'react';

class Recipe extends Component { render() {
    return (
        <div>
            <ul> {this.props.name.map((ingredient, i) => (
                <li key={i} >{ingredient}</li> ))}
            </ul> 
        </div>
        ); 
    }
}
export default Recipe;