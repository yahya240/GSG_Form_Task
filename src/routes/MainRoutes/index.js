import React, { Component } from 'react'
import {Login,Register,GamerProfile,Profile,UsersList,SingleUser,Error} from '../../pages'
import {Routes,Route} from 'react-router-dom'
import { ProtectedRoute, ProtectedAdminRoute } from '../../components'

export default class MainRoutes extends Component {

  state = {
    users:[],
    isAuthorized:true,
    isAdmin:false,
  }

  componentDidMount(){
    const token =localStorage.getItem('token')
    const isAdmin =localStorage.getItem('isAdmin')
    if(!token){
      this.setState({isAuthorized:false})
    }
    if(Boolean(isAdmin)){
      this.setState({isAdmin:true})
    }
  }

  login =(type)=>{
    this.setState({isAuthorized:true,isAdmin:type})
  }

  logout =() =>{
    localStorage.clear();
    this.setState({isAuthorized:false})
  }

  
  render() {
    return (
      <Routes>
            <Route index element={<GamerProfile isAuthorized={this.state.isAuthorized} logout={this.logout} />} />
            <Route path='profile' element={<ProtectedRoute isAuthorized={this.state.isAuthorized}><Profile /></ProtectedRoute>} />
            <Route path='userslist' element={<ProtectedAdminRoute isAdmin={this.state.isAdmin}><UsersList /></ProtectedAdminRoute> } />
            <Route path='userslist/user/:id' element={<ProtectedAdminRoute isAdmin={this.state.isAdmin}><SingleUser /></ProtectedAdminRoute> } />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login login={this.login} />} />
            <Route path='*' element={<Error />}/>
      </Routes>
    )
  }
}
