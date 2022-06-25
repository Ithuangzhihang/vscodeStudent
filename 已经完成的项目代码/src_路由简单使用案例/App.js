import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import School from "./pages/School";
import CustomNavLink from "./component/CustomNavLink";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 编写路由规则 */}
                {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
                <CustomNavLink to="/home">HOME</CustomNavLink>
                {/* <CustomNavLink to='/school'>School</CustomNavLink> */}
                {/* 更换一种写导航名字的写法 */}
                <CustomNavLink to="/school" children="School" />
              </div>
            </div>
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/school" component={School} />
                  <Redirect to="/home"> </Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
