import React from 'react'
import { Route, Switch } from "react-router-dom";
import Chart from '../views/chart/Chart';
import Home from '../views/home/Home';
function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chart" component={Chart} />
        </Switch>
    )
}

export default Routes
