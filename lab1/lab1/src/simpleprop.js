import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SimpleProp extends Component { render() {
  return (
    <div>
      <p> This is a {this.props.name} </p> 
    </div>
  )} 
}
export default SimpleProp;