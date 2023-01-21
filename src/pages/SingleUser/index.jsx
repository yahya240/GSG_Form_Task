import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loading } from '../../components'
import axios from 'axios'
import './style.css'

function SingleUser() {
  const {id} = useParams()
  const [user,setUser] = useState({})
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    const token = localStorage.getItem('token')
    const fetchUser = async ()=>{
      try {
        const res = await axios.get(`https://react-tt-api.onrender.com/api/users/${id}`,{headers:{
          Authorization: `Bearer ${token}`
        }})
        setUser(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser()
  },[])

  if(isLoading){
    return <div>
      <Loading />
    </div>
  }
  return (
    <div className='single-user-profile-info-page'>
      <section>
        <h2>User Information</h2>
        <div>
          <h3>User ID: {user._id} </h3>
          <h3>Username: {user.name} </h3>
          <h3>Email: {user.email} </h3>
        </div>
        <Link className='single-user-profile-info-link' to='/userslist'>Back to users list page</Link>
      </section>
    </div>
  )
}

export default SingleUser
