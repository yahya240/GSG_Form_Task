import React, { Component } from 'react'
import SocialMedia from '../SocialMedia'
import HorizentalLine from '../HorizentalLine'
import AlertMsg from '../AlertMsg'
import Swal from 'sweetalert2'
import axios from 'axios'
import {Link,Navigate} from 'react-router-dom'
import './style.css'

export default class LoginForm extends Component {

  state = {
    email:'',
    password:'',
    alert:'',
    msg:'',
    goToProfile:false,
    profilePath:''
  }

  onChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }

  handleSubmit = async (e) =>{
    e.preventDefault()
    if(this.state.password.length < 6){
      this.setState({alert:'error',msg:'your password should be at least 6 characters'})
    }else{
      // Swal.fire(
      //   `Welcome Back ${this.state.email.split('@')[0]}`,
      //   `Loged In successfuly!`,
      //   'success'
      // )
      try {
        const gsgRes = await axios.post('https://react-tt-api.onrender.com/api/users/login',{
          email:this.state.email,
          password:this.state.password
        }
      )
      console.log({email:this.state.email,password:this.state.password});
      console.log(gsgRes.data);
      console.log(gsgRes.data.token);
      localStorage.setItem('username',gsgRes.data.name)
      localStorage.setItem('token',gsgRes.data.token)
      Swal.fire(
        `Welcome Back ${this.state.email.split('@')[0]}`,
        `Loged In successfuly!`,
        'success'
      )
      this.setState({email:'',password:'',goToProfile:true,profilePath:`${this.state.email.split('@')[0]}`})
      // this.setState({email:'',password:'',password2:'',trems:false,passwordStrength:0,goToLogin:true})
      } catch (error) {
        this.setState({alert:'error',msg:error.response.data.message})
        console.log(error.response.data.message);
      }
      // this.setState({email:'',password:'',goToProfile:true,profilePath:`${this.state.email.split('@')[0]}`})
    }



    // else if(this.props.checkUser(this.state) === 'inValid'){
    //   this.setState({alert:'error',msg:'this user email dosent exist.'})
    // }else if(this.props.checkUser(this.state) === 'invalid password'){
    //   this.setState({alert:'error',msg:'the password is worng, try again.'})
    // }
  }

  render() {

    if(this.state.goToProfile){
      return <Navigate to='/' />
      // return <Navigate to={`/profile/${this.state.profilePath}`} />
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
        </div>
      </div>
    )
  }
}
