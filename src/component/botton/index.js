import React, { Component } from 'react'
import './index.css'
export default class Botton extends Component {
    render() {
      const {lists}=this.props
      // 通过reduce,计算数组中的某个值的集合
      const finish=lists.reduce((pre,item)=>{
       return  pre+(item.isSelect?1:0)
      },0)
        return (
            <div className="todo-footer">
        <label>
          <input type="checkbox" checked={finish===lists.length&&lists.length!==0} onChange={this.selectAll}/>
        </label>
        <span>
          <span>已完成{finish}</span> / 全部{lists.length}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAllFinish}>清除已完成任务</button>
      </div>
        )
    }

    //当点击时执行全选内容,因为也要改变状态也需要app.js传值
    selectAll=(event)=>{
      const {selectAll}=this.props
      const isSelect=event.target.checked
      selectAll(isSelect)
    }
    //点击时删除所有已经完成的任务
    deleteAllFinish=()=>{
      const {deleteAllFinish}=this.props
      deleteAllFinish()
    }
}
