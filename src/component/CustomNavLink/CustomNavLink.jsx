import React from 'react'
import { NavLink } from 'react-router-dom'


export default function CustomNavLink(props) {
  console.log(props)
  return (

    <div>
    <NavLink  replace className="list-group-item"  to={props.to}></NavLink>
</div>
  )
}

