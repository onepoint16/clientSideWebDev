import React, { Component } from 'react'; 
import Recipe from './recipe';
import BarChartExample from './barchartexample';
import FoodCategories from './foodCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './searchBar';

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

    const items = [
      {"name":"carrot cake","description":"home made here","price":"2.50","category":
      "cake","available":"no","_id":"1fhvraM8vnUQN5bS"},
      {"name":"sandwiches","description":"with a variety of fillings","price":"2.50",
      "category":"snack","available":"no","_id":"4cc74zd1NItLzSMP"},
      {"name":"salad","description":"uses seasonal local produce", "price":"3.50","category":"side","available":"yes","_id":"AeEPtzfuv1YAjIRZ"},
      {"name":"hot chocolate","description":"with fully fat or skimmed milk" , "price":"2.00","category":"drinks","available":"no","_id":"BcSmYk5W7lOLuDPo"},
      {"name":"chocolate cake","description":"with cream", "price":"2.50","category":
      "cake","available":"yes","_id":"aT7WD1X87ztQKgS0"},
      {"name":"soup","description":"ask for soups available today","price":"2.00","category":"snack","available":"yes","_id":"FUrulAa46eiSFUPM"},
      {"name":"pizza","description":"ham and pineapple or four cheese","price":"5.00"
      ,"category":"main","available":"yes","_id":"U9YkPp94immRUsjw"},
      {"name":"baked potato","description":"with cheese, coleslaw, beans or tuna","price":"4.50","category":"main","available":"yes","_id":"UrNK9hyiW6ZUJYqt"},
      {"name":"chocolate cake","description":"with cream","price":"2.50","category":"cake","available":"yes","_id":"aT7WD1X87ztQKgS0"},
      {"name":"apple pie","description":"with cream or custard","price":"3.50","category":"pudding","available":"yes","_id":"gOMxx3ZA3OCMwGrp"},
      {"name":"cheesecake","description":"with cream","price":"3.00","category":"pudding","available":"yes","_id":"gPmLlIUI0kn6EJXm"},
      {"name":"fish and chips","description":"locally caught ","price":"6.50","category":"main","available":"yes","_id":"jtw4LZgWMovX5QVi"},
      {"name":"lasagne","description":"with chips or garlic bread","price":"6.50","category":"main","available":"yes","_id":"mwfH2oHYDV21ITjZ"},
      {"name":"ice cream","description":"various flavours","price":"2.50","category":
      "pudding","available":"yes","_id":"s8YvrgP6UIaKuGzO"},
      {"name":"coffee","description":"freshly ground","price":"1.50","category":"drinks","available":"yes","_id":"wbmNFAREWMCX46KU"},
      {"name":"pasta","description":"with a tomato and garlic sauce","price":"5.50","category":"main","available":"yes","_id":"xUpnhzGNnS7K4wA3"}
      ];

class App extends Component {
  state = {items: []}
  componentDidMount() {
    fetch('/foods')
    .then(res => res.json())
    .then(items => this.setState({ items }));
  }
  render() {
    const items=this.state.items;
    return ( 
      <div className="appStyle" >
      <h1>Menu</h1>
      <div>
      <SearchBar
      filterText={this.state.filterText}
      onFilterTextChange={this.handleFilterTextChange}
      />
      <FoodCategories
      menuCategory='drinks'
      items={items}
      filterText={this.state.filterText}
      />
      <FoodCategories
      menuCategory='cake'
      items={items}
      filterText={this.state.filterText}
      />
      <FoodCategories
      menuCategory='snack'
      items={items}
      filterText={this.state.filterText}
      />
      <FoodCategories
      menuCategory='main'
      items={items}
      filterText={this.state.filterText}
      />
      <FoodCategories
      menuCategory='pudding'
      items={items}
      filterText={this.state.filterText}
      /></div>
      <h1> Recipe </h1>
      <Recipe name={recipeIngredients} />
      <div style={this.divStyle}>
        <BarChartExample />
      </div>
      </div>
    );
  }
}

export default App;