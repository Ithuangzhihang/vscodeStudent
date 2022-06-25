
//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//引入组件
import App from './App'


// 渲染组件,这都是写死的
ReactDOM.render( <BrowserRouter> <App/> </BrowserRouter>
,document.getElementById('root'))

// indexe.js是入口文件