import React, { Component } from 'react'
import { Navigate } from 'react-router'

export default class ProtectedRoute extends Component {
  render() {
    if(!this.props.isAuthorized){
        return <Navigate to='/login' />
    }
    return this.props.children
  }
}
