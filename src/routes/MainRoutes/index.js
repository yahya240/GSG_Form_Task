import React, { Component } from 'react'
import {Login,Register,GamerProfile,Error} from '../../pages'
import {Routes,Route,Navigate} from 'react-router-dom'

export default class MainRoutes extends Component {

  state = {
    currentPage:'register',
    users:[]
  }

  changePage = (pageName) => {
    this.setState({currentPage:pageName})//no need for it
  }

  addUser = (newUser) => {
    this.setState(prevState => ({users:[...prevState.users,newUser]}))
  }

  checkUser = (singleUser) =>{
    const findingUser = this.state.users.find((user)=> user.email === singleUser.email)
    if(findingUser){
      if(findingUser.password!== singleUser.password){
        return 'invalid password'
      }
      return 'valid'
    }else{
      return 'inValid'
    }
  }
  
  render() {
    return (
      <Routes>
            <Route index element={<Login changePage={this.changePage} checkUser={this.checkUser} />} />
            <Route path='register' element={<Register changePage={this.changePage} addUser={this.addUser} />} />
            <Route path='profile' element={this.state.users.length > 0? <GamerProfile user={this.state.users[0]} /> : <Navigate to='/' />} />
            <Route path='*' element={<Error />}/>
      </Routes>
    )
  }
}
