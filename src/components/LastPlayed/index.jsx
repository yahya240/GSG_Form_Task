import React, { Component } from 'react'
import LastPlayedItem from '../LastPlayedItem'
import playedItem1 from '../../assets/images/gamer-profile/Ellipse 2.png'
import playedItem2 from '../../assets/images/gamer-profile/Ellipse 3.png'
import playedItem3 from '../../assets/images/gamer-profile/Ellipse 4.png'
import playedItem4 from '../../assets/images/gamer-profile/Ellipse 5.png'
import './style.css'

export default class LastPlayed extends Component {
  render() {
    return (
    <div className='gamer-profile-footer-last-played'>
        <h2 className={` ${this.props.theme === 'dark' ? 'dark-theme-text' : ''} `}>last played</h2>
        <div className="last-played-items">
          <LastPlayedItem theme={this.props.theme} img={playedItem1} text='Hogwarts Legacy 50%'/>
          <LastPlayedItem theme={this.props.theme} img={playedItem2} text='God Of War: Ragnarök 72.5%'/>
          <LastPlayedItem theme={this.props.theme} img={playedItem3} text='Crash Bandicoot N. Sane Trilogy 34%'/>
          <LastPlayedItem theme={this.props.theme} img={playedItem4} text='Dying Light 2 Stay Human 100%'/>
        </div>
    </div>
    )
  }
}
