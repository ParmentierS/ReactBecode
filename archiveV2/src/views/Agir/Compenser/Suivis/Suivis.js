import React, {Component, Fragment} from 'react';
import ContentSuivis from '../../../../components/Suivis/ContentSuivis';
import HeaderSuivis from '../../../../components/Suivis/HeaderSuivis';
import './style.scss';

class Suivis extends Component {
  render() {
    return (
      <Fragment>
        a
        <HeaderSuivis/>
        <ContentSuivis/>
      </Fragment>
    );
  }
}

export default Suivis;