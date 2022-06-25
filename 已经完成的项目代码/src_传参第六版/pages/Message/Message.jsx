import React, { useState } from "react";

import { Link,Outlet } from "react-router-dom";


export default function Message() {
 const  [state] =useState (
    [
      { id: "1", pro: "测试1参数" },
      { id: "2", pro: "测试2参数" },
      { id: "3", pro: "测试3参数" },
    ]
  )
  console.log('state',state)
  let messages  = state;

  return (
    <div>
        <ul>
          {messages.map((item) => {
            return (
              <li key={item.id}>
                {/* 这里由于不需要点击高亮我们只需要link标签就可以了 */}
                <Link to={`detile/${item.id}`}>{item.pro}</Link>
                &nbsp;&nbsp;
 
              </li>
            );
          })}
        </ul>
        <Outlet/>
      </div>
  )
}

