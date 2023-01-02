import React, { Component } from 'react'
import { GamerSidebar,GamerProfileContainer,ProfileHeader,NewGames,LastPlayed,MostRecent,GamerFriends } from '../../components'


import './style.css'

export default class GamerProfile extends Component {
  render() {
    return (
      <GamerProfileContainer>
        <GamerSidebar />
        <section className="gamer-profile-main">
          <ProfileHeader user={this.props.user} />
          <NewGames />
          <section className='gamer-profile-footer-section'>
            <LastPlayed />
            <MostRecent />
            <GamerFriends />
          </section>
        </section>
      </GamerProfileContainer>
    )
  }
}
