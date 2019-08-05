import React from 'react';
import logo from './logo.svg';
import './HappyDrink.css';
import { establishments }     from './fixtures'


class HappyDrink extends React.Component 
{
  constructor(props)
  {
      super(props);
      this.state =
      {
        favorites : []
      }
  }

  
  render()
  {
    const listEstablishment = establishments.map( (establishment) => 
    {
      return (
          // L'attribut "key" permet à React d'identifier les éléments.
          // Cela améliore les performances lors de l'ajout,
          // la modification et la suppression d'un élément.
          <li
              key = { establishment.id }
              className = 'establishment'
          >
              <h3>{ establishment.name }</h3>

              { establishment.description }

          </li>
      )
    })

  return (
      <section className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to { this.props.title }</h2>
          </div>
          <div className="App-intro">
              { listEstablishment }
          </div>

      </section>
    );
  }
  
}

export default HappyDrink;
