import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    const { userList } = this.props;
    return (
      <div className="row">
        {/* 循环遍历组件的写法 ,因为写在return中要加括号*/}
        {
        userList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank">
                <img
                  src={item.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
