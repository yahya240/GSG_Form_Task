import { useParams } from 'react-router'
import profileImage from "../../assets/images/gamer-profile/profile-image.png"
import './style.css'

const ProfileHeader = () => {
  const {id} = useParams();
  return (
      <div className='gamer-profile-header'>
      <div className="gamer-profile-header-container">
        <div className="gamer-profile-header-content">
          <h2>Welcome back,</h2>
          <h2>{id}</h2>
        </div>
        <img src={profileImage} alt="profileImage" />
      </div>
    </div>
  )
}

export default ProfileHeader;
