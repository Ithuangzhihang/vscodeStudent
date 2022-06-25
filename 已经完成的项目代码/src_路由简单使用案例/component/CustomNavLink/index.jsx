import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class CustomNavLink extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink  className="list-group-item " to='/home' {...this.props}>{this.props.children}</NavLink>
            </div>
        )
    }
}
