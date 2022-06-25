import React, { Component, useState } from "react";

import { Link, Route,Outlet } from "react-router-dom";
import Detile from "./Detile";
export default class Message extends Component {

  render() {
    let { messages } = this.state;
    console.log(messages);
    return (
  
    );
  }
  pushShow = (id) => {
    this.props.history.push(`/home/message/detile/${id}`);
  };
  replaceShow = (id) => {
    this.props.history.replace(`/home/message/detile/${id}`);
  };
}











import React from 'react'

export default function index() {

  const [state,setState] = useState(
    { messages: [
       { id: "1", pro: "测试1参数" },
       { id: "2", pro: "测试2参数" },
       { id: "3", pro: "测试3参数" },
     ],}
   );
   let { messages } = state;
  return (
    <div>
    <ul>
      {messages.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/school/message/detile/${item.id}`}>{item.pro}</Link>
            &nbsp;&nbsp;  
          </li>
        );
      })}
    </ul>

    Out
  </div>
  )
}
