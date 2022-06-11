import React, { Component } from 'react'
import './index.css'
import Item from '../item'
export default class List extends Component {
    render() {
        //接受App中传过来的数据
        const { lists,exchange,deleteItem } = this.props
        console.log(lists)
        return (
            <div>
                <ul className="todo-main">
                    {/* 嵌入js语句需要加入括号 */}
                    {lists.map((item) => {
                        // 将每一行的内容传递到一行中
                        return   <Item key={item.id} item={item} exchange={exchange} deleteItem={deleteItem}/>
                    })
                    }
                </ul>
            </div>
        )
    }
}
