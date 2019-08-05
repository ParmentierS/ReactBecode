import React, { Component } from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
//import base from './base';

export default class Import extends Component {

  state={
    launchNumber : 0,
    sessionLaunchNumber: 0
  }

  componentWillMount()
  {
    const self = this;
    const  firebaseRef = firebase.database().ref();
    firebaseRef.once('value')
    .then(function(dataSnapshot) 
    {
      self.setState({ launchNumber : self.state.launchNumber+1 });
      self.setState({ sessionLaunchNumber : self.state.launchNumber+1});  
    }); 
  }
  render() 
  {
    const items =[];
    for(let i=0 ; i < 26 ; i++)
    {
          items.push(<Hello param={'stupid cat ' + i} />);
          items.push(<Welcome param={'at board ' + i} />);
    }
    
    return (
      <div className="App">
          <h1>Importé</h1>
          <p>Nombre d'itérations générale : {this.state.launchNumber} itérations</p>
          <p>Nombre d'itérations depuis le lancement : {this.state.sessionLaunchNumber} itérations</p>
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