import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Suivis from './Suivis';

const SuivisModule = ({match}) => (
  <div className="app-wrapper h-100">
    {/*<Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/donate`}/>*/}
      <Route path={'/agir/suivis'} component={Suivis}/>
      {/*<Route component={asyncComponent(() => import('components/Error404'))}/>*/}
    {/*</Switch>*/}
  </div>
);

export default SuivisModule;
