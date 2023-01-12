import React, { Component } from 'react'
import {Login,Register,GamerProfile,Error} from '../../pages'
import {Routes,Route} from 'react-router-dom'

export default class MainRoutes extends Component {

  state = {
    users:[],
    isAuthorized:true
  }

  componentDidMount(){
    const token =localStorage.getItem('token')
    if(!token){
      this.setState({isAuthorized:false})
    }
    console.log('token from index '+token);
  }

  logout =() =>{
    localStorage.clear();
    this.setState({isAuthorized:false})
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
            <Route index element={<GamerProfile isAuthorized={this.state.isAuthorized} logout={this.logout} />} />
            <Route path='register' element={<Register addUser={this.addUser} />} />
            <Route path='login' element={<Login checkUser={this.checkUser} />} />
            <Route path='*' element={<Error />}/>
      </Routes>
    )
  }
}


// render() {
//   return (
//     <Routes>
//           <Route index element={<Login checkUser={this.checkUser} />} />
//           <Route path='register' element={<Register addUser={this.addUser} />} />
//           <Route path='profile' element={<GamerProfile isAuthorized={this.state.isAuthorized} logout={this.logout} />} />
//           {/* <Route path='profile' element={this.state.isAuthorized? <GamerProfile logout={this.logout} /> : <Navigate to='/' />} /> */}
//           {/* <Route path='profile' element={this.state.users.length >= 0? <GamerProfile /> : <Navigate to='/' />} /> */}
//           <Route path='*' element={<Error />}/>
//     </Routes>
//   )
// }
// }
