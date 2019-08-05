//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {connect} from 'react-redux';
import Action from '../views/Agir/Action';
import Suivis from '../views/Agir/Compenser/Suivis/Suivis';
import HappyDrink from '../views/Becode/HappyDrink/HappyDrink'
import DonationViews from '../views/Agir/Compenser/Donation/';
import EvaluerViews from '../views/Evaluer/';
//Views
import Main from '../views/Main';
//Components
import Menu from './Menu/Menu';
import View from './View/View';

const views = [
  {link: '/', component: Main, exact: true},
  {link: '/agir/actions', component: Action, exact: false},
  {link: '/agir/compenser/suivis', component: Suivis, exact: false},
  {link: '/becode/happydrink', component: HappyDrink, exact: false}
];

class App extends React.Component 
{
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu className="col-2"/>
          <div className='container-content col-10'>
            {views.map((view) => <View key={view.link} item={view}/>)}
            <DonationViews />
            <EvaluerViews />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
// {pure false} when connect with react-redux in components using react-router
export default connect(mapStateToProps, null, null, {pure: false})(App);