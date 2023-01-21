import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import './style.css'

export default class Form extends Component {
  render() {
    if(this.props.type === 'register'){
        return (
          <RegisterForm />
        )
      }else{
        return (
          <LoginForm login={this.props.login} />
        )
      }
    }
   
}
