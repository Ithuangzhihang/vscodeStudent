import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import School from "./pages/School";
import CustomNavLink from "./component/CustomNavLink";
import Header from "./component/Header";
export default class App extends Component {
  render() {
    return (
      <div >
        <Header />
    
         
  
      </div>
    );
  }
}
