import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublishIcon from '@material-ui/icons/Publish';
import top from '../../img/top.jpeg'
import '../../styles/user.css'
import {Link} from 'react-router-dom'

const User = () => {
  return (
    <div className='user_page'>
      <div className="user_title_container">
        <h1 className='user_title'>Edit User</h1>
        {/* Link to create new Users */}
        <Link to="/newUser">
          <button className="user_addbtn">Create</button>
        </Link>
      </div>
      <div className="user_container">
        <div className="user_show">
          <div className="user_show_top">
            <img src={top} className='user_show_img' />
            <div className="user_show_jobtitle">
              <span className="User_show_username">Md Intezar Alam</span>
              <span className="User_show_username_title">Software Engineer</span>
            </div>
          </div>

          <div className="user_show_bottom">
            <span className="user_show_title">Account Details</span>
            <div className="user_show_info">
              <PermIdentityIcon className='user_show_icon' />
              <spna className="user_show_input_title">intezar99</spna>
            </div>
            <div className="user_show_info">
              <CalendarTodayIcon className='user_show_icon' />
              <spna className="user_show_input_title">17-02-2002</spna>
            </div>
            <span className="user_show_title">Contact Details</span>
            <div className="user_show_info">
              <PhoneAndroidIcon className='user_show_icon' />
              <spna className="user_show_input_title">+916361255423</spna>
            </div>
            <div className="user_show_info">
              <MailOutlineIcon className='user_show_icon' />
              <spna className="user_show_input_title">intezar98@gmail.com</spna>
            </div>
            <div className="user_show_info">
              <LocationOnIcon className='user_show_icon' />
              <spna className="user_show_input_title">Bihar India </spna>
            </div>
          </div>
        </div>
        <div className="user_update">
          <span className="user_update_title">Edit</span>
          <form className='user_update_form'>
            <div className="user_update_left">
              <div className="user_update_item">
                <label>User Name:</label>
                <input type="text" placeholder='intezar99' className='user_update_input' />
              </div>
              <div className="user_update_item">
                <label>Full Name:</label>
                <input type="text" placeholder='Md Intezar Alam' className='user_update_input' />
              </div>
              <div className="user_update_item">
                <label>Phone:</label>
                <input type="number" placeholder='+916361255423' className='user_update_input' />
              </div>
              <div className="user_update_item">
                <label>Email:</label>
                <input type="email" placeholder='intezar98@gmail.com' className='user_update_input' />
              </div>
              <div className="user_update_item">
                <label>Address:</label>
                <input type="text" placeholder='Bihar India' className='user_update_input' />
              </div>
            </div>

            <div className="user_update_right">
              <div className="user_update_right_upload">
                <img src={top} className='user_update_right_img' />
                <label htmlFor="file">
                  <PublishIcon className='user_update_right_icon' /></label>
                <input type="file" id='file' style={{ display: "none" }} />
              </div>
              <button className='user_update_right_btn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default User
