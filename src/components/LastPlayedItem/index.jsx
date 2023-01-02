import React, { Component } from 'react'
import './style.css'

export default class LastPlayedItem extends Component {
  render() {
    return (
    <div className="last-played-item">
        <img className="last-played-item-img" src={this.props.img} alt="playedItem" />
        <div className='last-played-item-text'>
          <h4>{this.props.text}</h4>
        </div>
    </div>
    )
  }
}
