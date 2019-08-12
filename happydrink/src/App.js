import React from 'react';
import logo from './logo.svg';
import './App.css';
import { establishments }     from './fixtures'
import Like from './Like'


class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state =
    {
      searchString : "",
      favoritesBar : [],
      renderlistFavorites: [],
      filteredBar :establishments,
      renderFilteredBar :[],
      renderEstablishment :establishments.map( (establishment) => 
      {
        return (
            // L'attribut "key" permet à React d'identifier les éléments.
            // Cela améliore les performances lors de l'ajout,
            // la modification et la suppression d'un élément.
            <li
                key = { establishment.id }
                className = 'establishment'
                onClick={this.changeFavorites}
            >
                <h3>{ establishment.name }</h3>
  
                { establishment.description }

                <h3>Happy Hour</h3>
  
                { establishment.happyHour }

                <Like like={0} />
  
            </li>
            
        )
      })
    }
    this.changeFavorites = this.changeFavorites.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  filterList = async function(event)
  {
    await this.setState({searchString : event.target.value.toLowerCase()})
    //console.log(this.state.searchString);
    /*for(let key in event)
    {
      console.log(key," : ",event[key])
    }
    for(let key in event)
    {
      if(event[key])
        console.log(key," : ",event[key]["data"])
    }*/
    console.table(this.state.renderEstablishment);
    await this.setState({filteredBar: establishments.filter( 
      (establishment) => {
        
        let str = establishment.name + " " + establishment.description;
        str=str.toLowerCase();
        console.log(str);
        return str.match(this.state.searchString);
        
      })})

    await this.setState({renderFilteredBar: this.state.filteredBar.map( (establishment) => 
      {
        return (
            // L'attribut "key" permet à React d'identifier les éléments.
            // Cela améliore les performances lors de l'ajout,
            // la modification et la suppression d'un élément.
            <li
                key = { establishment.id }
                className = 'establishment'
                onClick={this.changeFavorites}
            >
                <h3>{ establishment.name }</h3>
  
                { establishment.description }

                <h3>Happy Hour</h3>
  
                { establishment.happyHour }

                <Like like={0} />
  
            </li>
            
        )
      })})
      console.log(this.state.searchString);
      console.table(this.state.filteredBar);
      console.table(this.state.renderFilteredBar);
  }
  changeFavorites = function(event)
    {
      /*_targetInst or _dispatchInstances 
      it seems like targetInst doesn't work each time*/
      /*for(let key in event)
        {
          console.log(key," : ",event[key])
        }
      for(let key in event)
        {
          if(event[key])
            console.log(key," : ",event[key]["key"])
        }*/
      const key = event._dispatchInstances["key"]
      let  estab = {};
      let alreadyFavorited = false;
      let indexFavorited=0;
      const myFavorites = this.state.favoritesBar;
      for (let e of establishments)
      {
        console.log(e.id, key)
        if(e.id === key)
        {
          estab=e;
        }
      }
      for (let keyBar in myFavorites)
      {
        if(myFavorites[keyBar].id === key)
        {
          alreadyFavorited =true;
          indexFavorited=keyBar;
        }
      }
      if(alreadyFavorited)
      {
        myFavorites.splice(indexFavorited,1) 
      }
      else
      {
        myFavorites.push(estab)
      }
      console.table(myFavorites);
      this.setState({renderlistFavorites : this.state.favoritesBar.map( (establishment) => 
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
    
              </li>
              
          )
        })})
      
    }
  render()
  {
    
    //const testalacon = 50074444440;
    this.state.renderFilteredBar = this.state.filteredBar.map( (establishment) => 
    {
      return (
          // L'attribut "key" permet à React d'identifier les éléments.
          // Cela améliore les performances lors de l'ajout,
          // la modification et la suppression d'un élément.
          <li
                key = { establishment.id }
                className = 'establishment'
                onClick={this.changeFavorites}
            >
                <h3>{ establishment.name }</h3>
  
                { establishment.description }

                <h3>Happy Hour</h3>
  
                { establishment.happyHour }

                <Like like={0} />

  
          </li>
          
      )
    })
    
    /*this.state.renderlistFavorites = this.state.favoritesBar.map( (establishment) => 
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
              {this.testalacon}


              { establishment.description }

          </li>
          
      )
    })*/

  return (
      <section className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to { this.props.title }</h2>
          </div>
          <div className="App-search">
            <input 
            
              type="text"
              placeholder="find a bar"
              value={this.state.searchString}
              onChange={this.filterList}

            />
          </div>
          <div className="App-intro">
            <h3>Liste des Bars</h3>
              { this.state.renderFilteredBar }
          </div>
          <div className="App-favorites">
            <h3>Favorites Bar</h3>
              { this.state.renderlistFavorites}
          </div>

      </section>
    );
  }
  
}

export default App;
