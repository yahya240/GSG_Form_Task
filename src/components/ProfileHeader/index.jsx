import React, { Component } from 'react'
import profileImage from "../../assets/images/gamer-profile/profile-image.png"
import './style.css'

export default class ProfileHeader extends Component {

  render() {
    const {email} = this.props.user;
    return (
        <div className='gamer-profile-header'>
        <div className="gamer-profile-header-container">
          <div className="gamer-profile-header-content">
            <h2>Welcome back,</h2>
            <h2>{email.split('@')[0]}</h2>
          </div>
          <img src={profileImage} alt="profileImage" />
        </div>
      </div>
    )
  }
}
