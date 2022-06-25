import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                这是Home
                {
                    console.log(this.props)
                }
            </div>
        )
    }
}
