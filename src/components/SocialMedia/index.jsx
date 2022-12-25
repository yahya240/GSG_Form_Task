import linkedin from '../../assets/images/linkedin.png'
import google from '../../assets/images/google.png'
import github from '../../assets/images/github.png'
import twitter from '../../assets/images/twitter.png'

import React, { Component } from 'react'

export default class SocialMedia extends Component {
  render() {
    return (
    <div className='social-media-icons'>
        <div><img src={google} alt="google" /></div>
        <div><img src={twitter} alt="twitter" /></div>
        <div><img src={linkedin} alt="linkedin" /></div>
        <div><img src={github} alt="github" /></div>
    </div>
    )
  }
}
