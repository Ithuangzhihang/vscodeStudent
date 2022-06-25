import React, { Component } from 'react'
import Front from './component/front'
import List from './component/list'
import './App.css'

export default class App extends Component {
  state={userList:[]}
  render() {
    return (
    
      <div className="container">
          <Front getUsers={this.getUsers}/>
          <List  userList={this.state.userList} />
  </div>
     
    )
  }
  //得到用户保存在state中,参数是搜索得到的数据
  getUsers=(users)=>{
    console.log('子组件传过来的user',users)
      this.setState({userList:users})
  }
}
