import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import data from './data';
import './style.scss';

class Menu extends React.Component {
  renderMenu(starter, basePath) {
    return (
      <ul className="nav flex-column">
        {
          starter.map((elem) => {
            const path = basePath + elem.path;
            return (
              <li className="nav-item" key={path}>
                {!elem.disabled ? <NavLink exact className="nav-link" to={path}>{elem.label}</NavLink> : elem.label}
                {elem.sub !== undefined && this.renderMenu(elem.sub, path + '/')}
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="container-menu col-2">
        {this.renderMenu(data, '/')}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return state;
}
// {pure false} when connect with react-redux in components using react-router
export default connect(mapStateToProps, null, null, {pure: false})(Menu);