import React, { Component } from 'react'
import mostRecentImg from '../../assets/images/gamer-profile/most-recent.png'
import trophy from '../../assets/images/gamer-profile/trophy.png'
import './style.css'

export default class MostRecent extends Component {
  render() {
    return (
    <div className='gamer-profile-footer-most-recent'>
        <h2 className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>most recent trophy</h2>

        <div className='gamer-profile-footer-most-recent-content'>
          <img src={mostRecentImg} alt="mostRecentImg" />
          <div className="gamer-profile-footer-most-recent-content-title">
            <h4 className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>perfect KILL streak</h4>
            <p className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>You are in the 0.5%</p>
          </div>
          <div className="gamer-profile-footer-most-recent-content-description-background">
          </div>
          <div className="gamer-profile-footer-most-recent-content-description">
            <h4 className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>assassin's creed odyssey</h4>
            <p className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>last played: 34 hours ago</p>
          </div>
          <div className="gamer-profile-footer-most-recent-content-trophy">
            <img src={trophy} alt="trophy" />
          </div>
        </div>

    </div>
    )
  }
}
