import React, { Component } from 'react'
import './style.css'

export default class GamerProfileContainer extends Component {
  render() {
    return (
        <section className={`gamer-profile-container ${this.props.theme === 'dark' ? 'bg-dark' : ''}`}>
            {this.props.children}
        </section>
    )
  }
}
