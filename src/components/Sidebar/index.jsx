import LineStyleIcon from '@material-ui/icons/LineStyle';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactsIcon from '@material-ui/icons/Contacts';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { Link } from 'react-router-dom'
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwraper">
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Dashboard</h4>
          <ul className="sidebarList">

            <Link to="/" className='links'>
              <li className="sidebarListItems active">
                <LineStyleIcon className='sidebar_icons' />Home
              </li>
            </Link>
            <li className="sidebarListItems">
              <ShowChartIcon className='sidebar_icons' />Analytics
            </li>
            <li className="sidebarListItems">
              <TimelineIcon className='sidebar_icons' />Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Quick Menu</h4>
          <ul className="sidebarList">
            <Link to="/users" className='links'>
              <li className="sidebarListItems ">
                <PermIdentityIcon className='sidebar_icons' />Users
              </li>
            </Link>
            <Link to="/products" className='links'>
              <li className="sidebarListItems">
                <ContactsIcon className='sidebar_icons' />Products
              </li>
            </Link>
            <li className="sidebarListItems">
              <AttachMoneyIcon className='sidebar_icons' />Transaction
            </li>
            <li className="sidebarListItems">
              <AssessmentIcon className='sidebar_icons' />Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Notification</h4>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <MailOutlineIcon className='sidebar_icons' />Male
            </li>
            <li className="sidebarListItems">
              <FeedbackIcon className='sidebar_icons' />Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutlineIcon className='sidebar_icons' />Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Staff</h4>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <CardGiftcardIcon className='sidebar_icons' />Manage
            </li>
            <li className="sidebarListItems">
              <ShowChartIcon className='sidebar_icons' />Analytic
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}
export default Sidebar;