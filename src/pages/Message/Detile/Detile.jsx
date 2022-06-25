import React,{useState} from 'react'
import { useLocation, useParams, useSearchParams } from "react-router-dom";
export default function Detile() {

// 实现个小需求，通过传过来的id值进行数据的显示

const [data] =useState([
  
   
      { id: "1", title: "新闻1", detile: "详细介绍新闻1" },
      { id: "2", title: "新闻2", detile: "详细介绍新闻2" },
      { id: "3", title: "新闻3", detile: "详细介绍新闻3" }
   
  
]);

 const {state}=useLocation()
 const {id}=state

const Datas = data;
const newData = Datas.find((item) => {
  //    typeof(item.id)
  return item.id === id;
});
  return (
    <div>
    <p>id:{newData.id}</p>
    <p>title:{newData.title}</p>
    <p>detile:{newData.detile}</p>
  </div>
  )
}

