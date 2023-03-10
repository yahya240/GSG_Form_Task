import React, { Component } from 'react'
import profileImage from "../../assets/images/gamer-profile/profile-image.png"
import { Link } from 'react-router-dom'
import './style.css'

export default class ProfileHeader extends Component {

  state = {
    username:''
  }

  componentDidMount(){
    const username = localStorage.getItem('username')
    this.setState({username:username})
  }

  render() {
    return (
      <div className='gamer-profile-header'>
      <div className="gamer-profile-header-container">
        <div className={`gamer-profile-header-content ${this.props.theme === 'dark' ? 'header-dark-theme' : ''}`}>
          <h2>Welcome back,</h2>
          <h2><span className='gamer-profile-header-logout' onClick={()=>this.props.logout()}>Logout</span> <Link to='/profile'>{this.state.username}</Link> </h2>
        </div>
        <img src={profileImage} alt="profileImage" />
      </div>
    </div>
    )
  }
}
