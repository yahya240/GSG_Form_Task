import React, { Component } from 'react'
import './style.css'

export default class AlertMsg extends Component {
  render() {
    if(this.props.alertType === 'error'){
        return (
            <div className='error-message'><h4>{this.props.children}</h4></div>
        )
    }else if(this.props.alertType === 'success'){
        return (
            <div className='success-message'><h4>{this.props.children}</h4></div>
        )
    }
  }
}
