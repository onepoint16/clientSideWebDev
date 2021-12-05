import React, { Component } from 'react';
import List from './List';
import Paragraph from './Paragraph';

class App extends Component {
  render() {
      return (
        <List item={[{ id: 1, body: 'Fender' }, { id: 2, body: 'PRS' }, { id: 3, body: 'Musicman' }]} />,
        <Paragraph>This is a paragraph</Paragraph>
      )
    }
}

export default App;