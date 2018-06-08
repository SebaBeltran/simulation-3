import React from "react";
import Auth from "./Component/Auth/Auth"
import Dashboard from "./Component/Dashboard/Dashboard"
import Post from "./Component/Post/Post"
import Form from "./Component/Form/Form"
import {HashRouter, Switch, Route} from "react-router-dom"

export default function (){
  return(
    <HashRouter>
      <Switch>
        <Route component={Auth} path="/" exact />
        <Route component={Dashboard} path="/dashboard"/>
        {/* <Route component={Post} path="/posts" exact />*/}
        <Route component={Form} path="/new" /> 
      </Switch>
    </HashRouter>  
  )
}