import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
export default function App() {
  //   <Routes>
  //   <Route path="/home" element={<Home />} />
  //   <Route path="/school" element={<School />} />
  //   {/* 改变四  Redirect自定义变为Navigate <Redirect to="/home"> </Redirect> */}
  //   <Route path="/" element={<Navigate to="/school" />} />
  // </Routes>
  const element = useRoutes(routes);
  function isActiveFunction({ isActive }) {
    return isActive === true ? "list-group-item xiucai" : "list-group-item";
  }
  return (
    <div>
      <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
      
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 编写路由规则 */}

            <NavLink className="list-group-item" to="/home">
              HOME
            </NavLink>

            {/* 更换一种写导航名字的写法 */}
            <NavLink className={isActiveFunction} to="/school">
              School
            </NavLink>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body">{element}</div>
        </div>
      </div>
    </div>
  );
}
