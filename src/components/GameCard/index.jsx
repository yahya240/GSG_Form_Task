import React, { Component } from 'react'
import './style.css'

export default class GameCard extends Component {
  render() {
    if(this.props.type === 'flip'){
        return(
        <div className="gamer-profile-card">
            <img className='gamer-profile-card-bg-img' src={this.props.bgImage} alt="gamerCardBg" />
            <img className='gamer-profile-card-inner-img-flip' src={this.props.innerImage} alt="gamerCardInnerImg" />
            <img className='gamer-profile-card-game-name-flip' src={this.props.gameName} alt="gamerCardGameName" />
            <h3 className='gamer-profile-card-text-flip'>{this.props.text}</h3>
        </div>
        )
    }else{
        return (
            <div className="gamer-profile-card">
                <img className='gamer-profile-card-bg-img' src={this.props.bgImage} alt="gamerCardBg" />
                <img className='gamer-profile-card-inner-img card-img-border' src={this.props.innerImage} alt="gamerCardInnerImg" />
                {this.props.gameName && <img className='gamer-profile-card-game-name' src={this.props.gameName} alt="gamerCardGameName" />}
                <h3 className='gamer-profile-card-text'>{this.props.text}</h3>
            </div>
        )
    }
  }
}
