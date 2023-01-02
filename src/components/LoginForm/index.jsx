import React, { Component } from 'react'
import SocialMedia from '../SocialMedia'
import HorizentalLine from '../HorizentalLine'
import AlertMsg from '../AlertMsg'
import Swal from 'sweetalert2'
import {Link,Navigate} from 'react-router-dom'
import './style.css'

export default class LoginForm extends Component {

  state = {
    email:'',
    password:'',
    alert:'',
    msg:'',
    goToProfile:false,
  }

  onChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.password.length < 8){
      this.setState({alert:'error',msg:'your password should be at least 8 characters'})
    }else if(this.props.checkUser(this.state) === 'inValid'){
      this.setState({alert:'error',msg:'this user email dosent exist.'})
    }else if(this.props.checkUser(this.state) === 'invalid password'){
      this.setState({alert:'error',msg:'the password is worng, try again.'})
    }else{
      // this.setState({alert:'success',msg:`logged in succsessfuly, welcome again ${this.state.email.split('@')[0]}`})
      Swal.fire(
        `Welcome Back ${this.state.email.split('@')[0]}`,
        `Loged In successfuly!`,
        'success'
      )
      this.setState({email:'',password:'',goToProfile:true})
    }
  }

  render() {

    if(this.state.goToProfile){
      return <Navigate to='/profile' />
    }

    return (
      <div className='form-section login-form-section'>
        <div className='form-header form-login-header'>
          <h2>Join the game!</h2>
          <p>Go inside the best gamers social network!</p>
        </div>
        <SocialMedia />
        <HorizentalLine />
        <form onSubmit={this.handleSubmit}>
        {this.state.alert === 'success' && <AlertMsg alertType={this.state.alert}>{this.state.msg}</AlertMsg>}
          <div className='form-input'>
              <label htmlFor="email">Your email</label>
              <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder='Enter email address' required/>
          </div>
          <div className='form-input'>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder='Password' required/>
          </div>
          {this.state.alert === 'error' && <AlertMsg alertType={this.state.alert}>{this.state.msg}</AlertMsg>}
          <div className='form-submit'>
              <button type='submit'>Login</button>
          </div>
        </form>
        <div className='form-login-footer'>
            <h4>Dont have an account? </h4>
            <Link className='form-login-footer-btn' to='/register'>Register</Link>
            {/* <button onClick={()=> this.props.changePage('register')}>Register</button> */}
        </div>
      </div>
    )
  }
}
