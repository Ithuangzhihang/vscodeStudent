import React from "react";
import { Navigate ,NavLink,Outlet} from "react-router-dom";
export default function School() {
  const [sum, setSum] = React.useState(1);
  return (
 
   
     
      
      <div>
      <ul className="nav nav-tabs">
      <li> <NavLink className="list-group-item" to="news">News</NavLink></li>
        <li>    <NavLink className="list-group-item" to="message">Message</NavLink></li>
      </ul>
      <Outlet/>
    </div>
  

    
    
  );
}
