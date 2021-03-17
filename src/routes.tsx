import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './modules/home/home';
import PageNotFound from './shared/error/page-not-found';
import Fheo from './modules/form/fheo';
import Confirmation from './modules/confirmation/confirmation';
export const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <Route path="/confirmation" exact component={Confirmation} />
        <Route path="/fheo" exact component={Fheo} />
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
export default Routes;
