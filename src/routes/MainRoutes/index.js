import React, { Component } from 'react'
import {Login,Register,GamerProfile,Error} from '../../pages'
import {Routes,Route,Navigate} from 'react-router-dom'

export default class MainRoutes extends Component {

  state = {
    users:[],
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
            <Route index element={<Login checkUser={this.checkUser} />} />
            <Route path='register' element={<Register addUser={this.addUser} />} />
            <Route path='profile/:id' element={this.state.users.length > 0? <GamerProfile /> : <Navigate to='/' />} />
            <Route path='*' element={<Error />}/>
      </Routes>
    )
  }
}
