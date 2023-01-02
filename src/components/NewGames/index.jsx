import React, { Component } from 'react'

import GameCard from '../GameCard'

import gamerCardBg1 from '../../assets/images/gamer-profile/gamer-card-bg1.png'
import gamerCardInnerImg1 from '../../assets/images/gamer-profile/gamer-card-inner-img1.png'
import gamerCardGameName1 from '../../assets/images/gamer-profile/gamer-card-game-name1.png'

import gamerCardBg2 from '../../assets/images/gamer-profile/gamer-card-bg2.png'
import gamerCardInnerImg2 from '../../assets/images/gamer-profile/gamer-card-inner-img2.png'

import gamerCardBg3 from '../../assets/images/gamer-profile/gamer-card-bg3.png'
import gamerCardInnerImg3 from '../../assets/images/gamer-profile/gamer-card-inner-img3.png'
import gamerCardGameName3 from '../../assets/images/gamer-profile/gamer-card-game-name3.png'

import './style.css'

export default class NewGames extends Component {
  render() {
    return (
        <div className="gamer-profile-new-games">
        <h2>NEW GAMES </h2>
        <div className="gamer-profile-new-games-cards">
            <GameCard  
                bgImage={gamerCardBg1}
                innerImage={gamerCardInnerImg1}
                gameName={gamerCardGameName1}
                text='Be part of the Suicide Squad and kill the Justice League!-Amanda Waller'
            />
            <GameCard  
                bgImage={gamerCardBg2}
                innerImage={gamerCardInnerImg2}
                text='Be part of the Suicide Squad and kill the Justice League!-Amanda Waller'
            />
            <GameCard
                type='flip'
                bgImage={gamerCardBg3}
                innerImage={gamerCardInnerImg3}
                gameName={gamerCardGameName3}
                text='Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.'
            />
        </div>
      </div>
    )
  }
}
