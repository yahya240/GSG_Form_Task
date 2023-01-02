import React, { Component } from 'react'
import friendsImg from '../../assets/images/gamer-profile/FRIENDS.png'
import './style.css'

export default class GamerFriends extends Component {
  render() {
    return (
    <div>
        <img src={friendsImg} alt="friendsImg" />
    </div>
    )
  }
}
