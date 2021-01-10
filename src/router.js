import React from 'react'
import { Route, Switch, Link, useHistory } from "react-router-dom";

import Login from "./screens/login"
import SignUp from './screens/signup'
import Admin from "./screens/admin";
import Home from "./screens/Home";




const Rout=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/admin" component={Admin}/>
        </Switch>
    )
}

export default function AppRouter(){
return(
    <>
    <Rout />
    </>
)

}
