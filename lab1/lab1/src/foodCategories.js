import React, { Component } from 'react';
import './App.css';
import SimpleProp from './simpleProp';


class FoodCategories extends Component {
render() {
const filterText = this.props.filterText;
const foodItem = [];

    this.props.items.map(item => {
        if ( item.name.indexOf(filterText) === -1) {
            return null;
            } else if ( this.props.menuCategory === item.category) {
            foodItem.push(
            <SimpleProp
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            />);
            return foodItem;
            } else return null;}
        );
    return(
        <div>
        <h2>{this.props.menuCategory}</h2>
        <div >{foodItem}</div>
        </div>
        )
    }
}

export default FoodCategories;