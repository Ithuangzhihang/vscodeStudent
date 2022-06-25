import React, { Component } from "react";
import "./index.css";
import PubSub from "pubsub-js";
export default class index extends Component {
  state={
    userList:[],
    isFirst:true,//标识第一次打开,要有初始化内容
    isSearcheing:false,
    err:''//输出错误信息
  }
  // 在组件加载完毕执行
  componentDidMount(){
    PubSub.subscribe('xiucai',(_,stateObj)=>{
  // 如果是对象需要用{}引起来，如果直接传入的对象他自己会进行结构
      this.setState(stateObj)
    })
  }
  // 组件要被卸载的时候加载
  componentWillUnmount(){
    PubSub.unsubscribe()
  }
  render() {
    
    const { userList,isFirst,isSearcheing,err } = this.state;
    return (
      <div className="row">
        {/* 循环遍历组件的写法 ,因为写在return中要加括号*/}
        {  isFirst? <div>第一次打开请输入,搜索</div>:
           isSearcheing?<div>正在搜索</div>:   
           
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
