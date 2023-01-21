import React, { Component } from 'react'
import { Navigate } from 'react-router'

export default class ProtectedAdminRoute extends Component {
  render() {
    if(!this.props.isAdmin){
        return <Navigate to='/' />
    }
    return this.props.children
  }
}
