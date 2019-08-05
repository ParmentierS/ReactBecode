import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Audit from './Audit';
import Quiz from './Quiz';

const EvaluerViews = ({match}) => (
  <div className="app-wrapper h-100">
    {/*<Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/donate`}/>*/}
      <Route path={'/evaluer/audit'} component={Audit}/>
      <Route path={'/evaluer/quiz'} component={Quiz}/>
      {/*<Route component={asyncComponent(() => import('components/Error404'))}/>*/}
    {/*</Switch>*/}
  </div>
);

export default EvaluerViews;
