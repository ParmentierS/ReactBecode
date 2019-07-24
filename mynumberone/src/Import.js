import React, { Component } from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

export default class Import extends Component {
  render() {
    const items =[];
    for(let i=0 ; i < 26 ; i++)
    {
          items.push(<Hello param={'stupid cat ' + i} />);
          items.push(<Welcome param={'at board ' + i} />);
    }
    
    return (
      <div className="App">
          <h1>Importé</h1>
        <Hello />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Hello />
        <Hello />
        <Welcome param={'Everyone'} />
        <Hello param={'stupid dog'} />
        {items}
      </div>
    );
  }
}