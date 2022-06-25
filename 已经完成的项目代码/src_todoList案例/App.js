import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Front from "./component/front";
import Botton from "./component/botton";
import List from "./component/list";

// 这里写export default加在类前也行,放在类最后边也行
//extends  React.Component 可以直接在上边引入{Component}  extends Component
export default class App extends Component {
  //定义state数据
  state = {
    lists: [
      { id: 1, title: "学习", isSelect: true },
      { id: 2, title: "打架", isSelect: false },
    ],
  };
  render() {
    const { lists } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Front addItem={this.addItem} />
          <List
            lists={lists}
            exchange={this.exchange}
            deleteItem={this.deleteItem}
          />
          <Botton
            lists={lists}
            selectAll={this.selectAll}
            deleteAllFinish={this.deleteAllFinish}
            
          />
          <button onClick={this.getStuden}>点击发送学生请求</button>



        </div>
        
      </div>
    );
  }
  //定义增加de
  addItem = (item) => {
    const { lists } = this.state;
    const newItem = [item, ...lists];
    this.setState({ lists: newItem });
  };
  // 子组件将选择的ID传递过来
  exchange = (itemId) => {
    const { lists } = this.state;
    // 将每个数据进行遍历,如果要返回新的内容需要加上return
    const NewList = lists.map((item) => {
      if (item.id === itemId) {
        //使用对象拓展符进行对象内容的替换
        const newItem = { ...item, isSelect: !item.isSelect };
        return newItem;
      } else {
        return item;
      }
    });
    console.log("newList", NewList);
    this.setState({ lists: NewList });
  };
  //reduce 执行删除单个组件的功能

  deleteItem = (itemId) => {
    const { lists } = this.state;
    // 返回一个新数组
    const newList = lists.filter((item) => {
      if (item.id !== itemId) {
        return true;
      }
    });
    console.log("newList", newList);
    this.setState({ lists: newList });
  };
  //实现全选
  selectAll = (isItemSelect) => {
    const { lists } = this.state;
    // 将每个数据进行遍历,如果要返回新的内容需要加上return
    const NewList = lists.map((item) => {
      //使用对象拓展符进行对象内容的替换
      const newItem = { ...item, isSelect: isItemSelect };
      return newItem;
    });
    console.log("newList", NewList);
    this.setState({ lists: NewList });
  };

  //更改状态:删除所有已经选中的内容
  deleteAllFinish = () => {
    const { lists } = this.state;
    // 返回一个新数组
    const newList = lists.filter((item) => {
      //想要保留啥需要放置确定的内容
      if (!item.isSelect) {
        return true;
      }
    });
    console.log("newList", newList);
    this.setState({ lists: newList });
  };

  //测试axios发送数据

  getStuden = () => {
    axios.get("http://localhost:3000/api1/students").then(
      //  成功输出数值
      (response) => {
        console.log(" 测试成功", response.data);
      },
      //  失败输出数值
      (error) => {}
    );
  };
}
