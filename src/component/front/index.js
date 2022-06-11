import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";
export default class Front extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.addItem}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
  //增加item事件
  addItem = (event) => {
    // 事件里边可以得到键盘中的唯一标识
    //如果是回车提交
    if (event.which === 13) {
      const item = {};
      item.id = nanoid();
      item.title = event.target.value;
      item.isSelect = false;
      // 由于事件发生跟事件更改的值在一体
      this.props.addItem(item);
      //增加成功以后,清楚内容
      event.target.value = "";
    }
  };
}
