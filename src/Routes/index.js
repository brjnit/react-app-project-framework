import React, { useState } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "../Screen/Home";
import Login from "../Screen/Login";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => auth ?
                (<Component />) :
                (<Redirect to="/"/>)} />
    )
}

const Routes = () => {
    const [isAuthenticated, authenticate] = useState(false)
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <ProtectedRoute exact path="/home" component={Home} auth={isAuthenticated} />
        </Switch>
    )
}
export default withRouter(Routes)