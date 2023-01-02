import React, { Component } from 'react'
import PasswordStrength from '../PasswordStrength'
import HorizentalLine from '../HorizentalLine'
import AlertMsg from '../AlertMsg'
import Swal from 'sweetalert2'
import {Link,Navigate} from 'react-router-dom'
import './style.css'

export default class RegisterForm extends Component {

  state = {
    email:'',
    password:'',
    password2:'',
    trems:false,
    passwordStrength:0,
    alert:'',
    msg:'',
    goToLogin:false,
  }

  

  onChange = (e)=>{
    let strength = 0;
    const {name,value} = e.target
    if(name === 'password'){
      if(value.length > 4){
        strength = strength+20;
      }
      if(value.length > 10){
        strength = strength+20;
      }
      if(value.match(/[a-z]/g)){
        strength = strength+20;
      }
      if(value.match(/[A-Z]/g)){
        strength = strength+20;
      }
      if(value.match(/[0-9]/g)){
        strength = strength+20;
      }
      if(value.match(/[^0-9a-zA-Z\s]/g)){
        strength = strength+20;
      }
      if(value.match(/(.)\1/g)>0){
        strength = strength-40;
      }
      this.setState({passwordStrength:strength})
    }
    this.setState({[name]:value})
  }

  onChech = ()=>{
    this.setState({trems:!this.state.trems})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.password.length < 8){
      this.setState({alert:'error',msg:'your password should be at least 8 characters'})
    }else if(this.state.password !== this.state.password2){
      this.setState({alert:'error',msg:'please make sure that passwords matched'})
    }else if(this.state.passwordStrength < 60){
      this.setState({alert:'error',msg:'your password strength should be at lease Medium strength.'})
    }else{
      Swal.fire(
        `Hello ${this.state.email.split('@')[0]}`,
        `registered successfuly!`,
        'success'
      )
      const newUser = {email:this.state.email,password:this.state.password}
      this.props.addUser(newUser);
      this.setState({email:'',password:'',password2:'',trems:false,passwordStrength:0,goToLogin:true})
    }
  }

  render() {
    if(this.state.goToLogin){
      return <Navigate to='/' />
    }
    return (
        <div className='form-section'>
        <div className='form-header'>
          <h2>Register Individual Account!</h2>
          <p>For the purpose of gamers regulation, your details are required.</p>
        </div>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className='form-input'>
            <label htmlFor="email">Email Address*</label>
            <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder='Enter email address' required/>
          </div>
          <div className='form-input'>
            <label htmlFor="password">Create password*</label>
            <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder='Password' required/>
            <PasswordStrength strength={this.state.passwordStrength}/>
          </div>
          <div className='form-input'>
            <label htmlFor="password2">Repeat password*</label>
            <input type="password" name='password2' value={this.state.password2} onChange={this.onChange} placeholder='Repeat password' required/>
          </div>
          <div className='form-checkbox'>
            <label htmlFor="trems">
            <input type="checkbox" name="trems" id="terms" onChange={this.onChech} required/>
            I agree to terms & conditions
            </label>
          </div>
          {this.state.alert === 'error' && <AlertMsg alertType={this.state.alert}>{this.state.msg}</AlertMsg>}
          <div className='form-submit'>
            <button type='submit'>Register Account</button>
          </div>
            <HorizentalLine />
        </form>
        <Link to='/' className='login-button' >login</Link>
      </div>
    )
  }
}
