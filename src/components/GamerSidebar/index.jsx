import React, { Component } from 'react'
import gamePad from '../../assets/images/gamer-profile/game-pad.png'
import like from '../../assets/images/gamer-profile/like.png'
import puzzle from '../../assets/images/gamer-profile/puzzle.png'
import setting from '../../assets/images/gamer-profile/setting.png'
import lightTheme from '../../assets/images/gamer-profile/light-theme.png'
import darkTheme from '../../assets/images/gamer-profile/dark-theme.png'
import './style.css'

export default class GamerSidebar extends Component {
  render() {
    return (
    <aside className="gamer-profile-sidebar">
        <div className="gamer-profile-sidebar-nav">
          <img className='gamer-profile-gampad' src={gamePad} alt="gamePad" />
          <div className='gamer-profile-mid-icons'>
            <img src={like} alt="like" />
            <img src={setting} alt="setting" />
            <img src={puzzle} alt="puzzle" />
          </div>
          <img className='gamer-profile-light-theme' src={this.props.theme === 'dark'? darkTheme : lightTheme} alt="lightTheme" onClick={()=>this.props.toggleTheme()} />
        </div>
        <div className={`gamer-profile-sidebar-vertical-line ${this.props.theme === 'dark'? 'dark-theme-vertical-line' : ''}`}></div>
    </aside>
    )
  }
}
