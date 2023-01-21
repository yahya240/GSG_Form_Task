import React, { Component } from 'react'
import { Link,Navigate } from 'react-router-dom'
import { Loading } from '../../components'
import Swal from 'sweetalert2'
import axios from 'axios'
import './style.css'

export default class UsersList extends Component {

    state ={
        usersData:[],
        isLoading:false
    }

    componentDidMount(){
        this.setState({isLoading:true})
        const token = localStorage.getItem('token')
        const fetchData = async () =>{
            try {
                const res = await axios.get('https://react-tt-api.onrender.com/api/users',{headers:{
                    Authorization:`Bearer ${token}`
                }})
                this.setState({isLoading:false,usersData:res.data})
            } catch (error) {
                console.log(error.message);
                <Navigate to='/login' />
            }
        }
        fetchData();
    }

    handeRemove(id,email){
        const token = localStorage.getItem('token')
        const removeUser = async ()=>{
            try {
                const deleteRes = await axios.delete(`https://react-tt-api.onrender.com/api/users/${id}`,{headers:{
                    Authorization: `Bearer ${token}`
                }})
                Swal.fire(
                    `${deleteRes.data.message}`,
                    `user email: ${email}`,
                    'success'
                  )
            } catch (error) {
                console.log(error);
            }
        }
        removeUser()
    }

  render() {
    if(this.state.isLoading){
        return <div>
            <Loading />
        </div>
    }
    return (
      <div className='users-list-profile-info-page'>
        <section>
            <h2>Users List</h2>
            {this.state.usersData.map((item,index)=>{
                return <div key={item._id}>
                    <h3>{index+1}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.email}</h3>
                    <Link to={`user/${item._id}`}>Details</Link>
                    <button className='users-list-remove-btn' onClick={()=>this.handeRemove(item._id,item.email)}>Remove</button>
                </div>
            })}
            <Link className='users-list-profile-info-link' to='/'>Back to Home</Link>
        </section>
      </div>
    )
  }
}
