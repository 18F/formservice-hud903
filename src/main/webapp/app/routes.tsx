import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../app/modules/home/home';
import ErrorBoundaryRoute from '../app/shared/error/error-boundary-route';
import PageNotFound from '../app/shared/error/page-not-found';
import Fheo from './modules/form/fheo';


const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/fheo" exact component={Fheo} />
      <ErrorBoundaryRoute path="/" exact component={Home} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
