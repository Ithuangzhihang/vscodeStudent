import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouseIsEnter: false,
  };
  render() {
    // 刚才还想怎么获取id,这里就能传过来了，每个组件都有自己的id

    const { item } = this.props;
    const { mouseIsEnter } = this.state;
    const id = item.id;
    return (
      <li
        onMouseEnter={() => {
          this.mouseEnter(true);
        }}
        onMouseOut={() => {
          this.mouseEnter(false);
        }}
        style={{ backgroundColor: mouseIsEnter ? "#c0c0c0" : "#FFFFFF" }}
      >
        <label>
          {/* 这里onchange带了参数了，但是不用行内的箭头函数，我换一种写法 */}

          <input
            type="checkbox"
            checked={item.isSelect ? true : false}
            onChange={() => {
              this.exchangeSelect(id);
            }}
          />
          <span>{item.title} </span>
        </label>
        <button
          onMouseEnter={() => {
            this.mouseEnter(true);
          }}
          onMouseOut={() => {
            this.mouseEnter(false);
          }}
          onClick={()=>{
            this.deleteItem(id)
          }}
          className="btn btn-danger"
          style={{ display: mouseIsEnter ? "" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }

  //  鼠标悬浮的方法
  mouseEnter = (flag) => {
    let { mouseIsEnter } = this.state;
    console.log(flag);
    if (flag) {
      mouseIsEnter = true;
      this.setState({ mouseIsEnter: mouseIsEnter });
    } else {
      mouseIsEnter = false;
      this.setState({ mouseIsEnter: mouseIsEnter });
    }
  };
  // 选择框向app.js传参
  exchangeSelect = (id) => {
    const { exchange } = this.props;

    exchange(id);
  };
  // 点击删除向app传参
  deleteItem=(id)=>{
       const {deleteItem}=this.props
       if (window.confirm("你确定要删除吗?")) {
        deleteItem(id)
      }
      
  }
}
