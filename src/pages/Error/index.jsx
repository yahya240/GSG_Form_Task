import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'
import './style.css'


export default class Error extends Component {

  state ={
    backHome:false,
  }

  render() {
    if(this.state.backHome){
      return <Navigate to='/' />
    }

    return (
      <div className='error-page'>
        <h2>404</h2>
        <h4>Page Not Found!</h4>
        <p>looks like you may have taken the wrong turn. there is no page with this direction</p>
        <button onClick={()=>this.setState({backHome:true})}>go back to the home page</button>
      </div>
    )
  }
}