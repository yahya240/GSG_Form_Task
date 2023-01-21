import { Component } from 'react'
import { Link} from 'react-router-dom'
import './style.css'

export default class Profile extends Component {

    state ={
        username:'',
        email:'',
    }

    componentDidMount(){
        const username = localStorage.getItem('username')
        const email = localStorage.getItem('email')
        this.setState({username,email})
    }

  render() {
    return (
      <div className='user-profile-info-page'>
        <section>
            <h2>Profile Information</h2>
            <div>
              <h3>Username: {this.state.username}</h3>
              <h3>Email: {this.state.email}</h3>
            </div>
            <Link className='user-profile-info-link' to='/'>Back to Home</Link>
        </section>
      </div>
    )
  }
}