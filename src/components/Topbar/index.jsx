import   NotificationsIcon  from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import top from '../../img/top.jpeg'
import './styles.css'
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <span className="logo">Md Intezar Alam</span>
                </div>
                <div className="topRight">
                    <div className="topbar_icons_container">
                        <NotificationsIcon />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbar_icons_container">
                        <LanguageIcon />
                    </div>
                    <div className="topbar_icons_container">
                        <SettingsIcon />
                    </div>
                    {/* image */}
                    <div className="topImg">
                        <img src={top} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar