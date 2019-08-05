import React, {Component} from 'react';

export default class Donation extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:1
    }
  }
  getNumber(event) {
    event.preventDefault();
    this.setState({
      number:event.target.value
    });
  }
  createDiv(content,classes = "") {
    let str = "mt-5 p-5 bg-light rounded" + classes;
    return (
      <div className={str}>
        {content()}
      </div>
    )
  }
  createLi(title,...text) {
    return this.createDiv(() => {
      return (
        <div className=''>
          <h2 className="text-center">{title}</h2>
          <ul className="list-group mt-5">
            {text.map((element,index) => <li key={index} className="list-group-item">{element}</li>)}
          </ul>
        </div>
      );
    })
  }
  render(){
    return(
      <div className="m-5">
        <div className="bg-light p-5 rounded">
          <h2 className="text-center">Pourquoi donner a CO2N ?</h2>
          <h5 className="text-center pt-3">
            CO2N s'engage a militer contre la pollution et permettra pour tout le monde de vivre dans un monde
            sans gaz a effet de serre.
          </h5>
        </div>
        {this.createLi(
          "Nous nous engagons a :",
          "Planter des arbres pour chaque don donner",
          "Un suivi de vos action en temps réel",
          "Les dons permetterons aussi de construire des éoliènnes",
          "Création de de champs de panneau solaire pour une énergie verte"
        )}
        {this.createDiv(() => {
          return (
            <div className="text-center">
              <p>Choisissez un prix</p>
              <p>{this.state.number}€</p>
              <input className="form-control w-50 m-auto" type='range' value={this.state.number} min='1' max="100" onChange={this.getNumber.bind(this)}></input>
              <button className="btn btn-success mt-4" type="submit">Faire un don</button>
            </div>
          );
        })};
      </div>
    )
  }
}