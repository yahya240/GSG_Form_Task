import React, { Component } from 'react'
import { GamerSidebar,GamerProfileContainer,ProfileHeader,NewGames,LastPlayed,MostRecent,GamerFriends } from '../../components'
import './style.css'

export default class GamerProfile extends Component {
  
  state ={
    theme: 'light'
  }

  toggleTheme = () =>{
    this.setState({theme:this.state.theme === 'light'? 'dark' : 'light'})
  }
  
  render() {
    return (
      <GamerProfileContainer theme={this.state.theme}>
        <GamerSidebar theme={this.state.theme} toggleTheme={this.toggleTheme} />
        <section className="gamer-profile-main">
          <ProfileHeader theme={this.state.theme} />
          <NewGames theme={this.state.theme} />
          <section className='gamer-profile-footer-section'>
            <LastPlayed theme={this.state.theme} />
            <MostRecent theme={this.state.theme} />
            <GamerFriends theme={this.state.theme} />
          </section>
        </section>
      </GamerProfileContainer>
    )
  }
}
