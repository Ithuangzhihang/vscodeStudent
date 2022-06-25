import React, { useState } from "react";

import { Link,Outlet, useNavigate } from "react-router-dom";


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
  const navgate= useNavigate()
  function ToNew(id) {
 
   navgate('detile',{
    replace:true,
    state:{
    id:id
   }})
  }

  return (
    <div>
        <ul>
          {messages.map((item) => {
            return (
              <li key={item.id}>
                {/* 这里由于不需要点击高亮我们只需要link标签就可以了 */}
                {/* <Link to={`detile?id=${item.id}&pro=${item.pro}`}>{item.pro}</Link> */}
                <Link to='detile' state={{id:item.id, pro:item.pro}} >{item.pro}</Link>
                &nbsp;&nbsp;
               <button onClick={()=>{ToNew(item.id)}}>查看当前信息</button>
              </li>
            );
          })}
        </ul>
        <Outlet/>
      </div>
  )

}

