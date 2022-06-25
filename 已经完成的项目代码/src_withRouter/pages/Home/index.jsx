import React, { Component } from "react";
import CustomNavLink from "../../component/CustomNavLink";
import { Route, Switch, Redirect } from "react-router";
import Message from "./Message";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>这是Home</h3>
        <div>
          <ul className="nav nav-tabs">
            {/* 声明路由,有哪几个件 */}
            <li>
              <CustomNavLink to="/home/news">News</CustomNavLink>
            </li>
            <li>
              <CustomNavLink  to="/home/message">Message</CustomNavLink>
            </li>
         
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
