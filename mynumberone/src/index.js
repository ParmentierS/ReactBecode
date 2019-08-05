import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext }  from './Firebase';
import Welcome from './Welcome';
import Hello from './Hello';
import Import from './Import';

//ReactDOM.render(<Welcome />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
<Import />
</FirebaseContext.Provider>
, document.getElementById('root'));