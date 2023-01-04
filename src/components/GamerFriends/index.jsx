import React, { Component } from 'react'
import friendsImg from '../../assets/images/gamer-profile/FRIENDS.png'
import friendsDarkImg from '../../assets/images/gamer-profile/FRIENDS-dark.png'
import './style.css'

export default class GamerFriends extends Component {
  render() {
    return (
    <div>
        <img src={this.props.theme === 'dark'? friendsDarkImg : friendsImg} alt="friendsImg" />
    </div>
    )
  }
}
