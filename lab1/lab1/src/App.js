import React, { Component } from 'react'; 
import Recipe from './recipe';
import BarChartExample from './barchartexample';

const recipeIngredients = [
    "225g softened butter",
    "225g golden caster sugar",
    "4 large eggs",
    "lemon, zested",
    "1 tsp vanilla extract",
    "225g self-raising flour",
    "splash of milk",
    "Optional fillings of lemon curd, jam, lightly whipped cream", "icing sugar for dusting",
    ];


class App extends Component {
  divStyle={
    padding: "5%",
    margin: "5%",
    width: "50%",
    height: "50%"
    }
render() {
return (
    <div style={this.divStyle}> 
      <Recipe name={recipeIngredients} /> 
      <BarChartExample/> 
    </div>
    ); 
  }  
}
export default App;
