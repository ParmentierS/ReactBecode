import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Donation from './Donation';

const DonationModule = ({match}) => (
  <div className="app-wrapper h-100">
    {/*<Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/donate`}/>*/}
      <Route path={'/agir/compenser/donation'} component={Donation}/>
      {/*<Route component={asyncComponent(() => import('components/Error404'))}/>*/}
    {/*</Switch>*/}
  </div>
);

export default DonationModule;
