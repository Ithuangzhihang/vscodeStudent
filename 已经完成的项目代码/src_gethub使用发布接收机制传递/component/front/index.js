
import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class index extends Component {
  render() {

    return (
  
          
    <section className="jumbotron">
      <h3 className="jumbotron-heading">查找用户</h3>
      <div>
        <input ref={(c)=>{this.textUserInput=c}} type="text" placeholder="请输入姓名关键字"/>&nbsp;<button onClick={this.search}>查询</button>
      </div>
    </section>
     
    )
  }
  //点击查询按钮执行的事件
  search=()=>{
        let userName =this.textUserInput.value
        PubSub.publish('xiucai',{isFirst:false,isSearcheing:true})
        console.log(userName)
       axios.get(`http://localhost:3000/api1/search/users2?q=${userName}`).then(
         (response)=>{
       console.log('访问成功',response.data)  
      
       PubSub.publish('xiucai',{isFirst:false,isSearcheing:false,userList:response.data.items})
        

       })
       //省略失败返回
  }
}
