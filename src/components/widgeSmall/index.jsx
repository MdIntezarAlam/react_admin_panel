import VisibilityIcon from '@material-ui/icons/Visibility';
import './styles.css';
import top from '../../img/top.jpeg'

const WidgeSmall = () => {
    return (
        <div className='widgesm'>
            <span className="widgesmTitle">New Join Members</span>
            <ul className="wg_sm_list">
                <li className="wg_sm_Lt_It">
                    <img src={top} className="wg_sm_img"/>
                    <div className="wg_sm_user">
                        <span className="wg_username">Md Intezar Alam</span>
                        <span className="wg_username_title">Software Engineer</span>
                    </div>
                    <button className="wg_sm_btn">
                    <VisibilityIcon  className='wg_sm_icons'/>Display
                    </button>
                </li>
                <li className="wg_sm_Lt_It">
                <img src={top} className="wg_sm_img"/>
                <div className="wg_sm_user">
                    <span className="wg_username">Md Intezar Alam</span>
                    <span className="wg_username_title">Software Engineer</span>
                </div>
                <button className="wg_sm_btn">
                <VisibilityIcon  className='wg_sm_icons'/>Display
                </button>
            </li>
            <li className="wg_sm_Lt_It">
            <img src={top} className="wg_sm_img"/>
            <div className="wg_sm_user">
                <span className="wg_username">Md Intezar Alam</span>
                <span className="wg_username_title">Software Engineer</span>
            </div>
            <button className="wg_sm_btn">
            <VisibilityIcon  className='wg_sm_icons'/>Display
            </button>
        </li>
        <li className="wg_sm_Lt_It">
        <img src={top} className="wg_sm_img"/>
        <div className="wg_sm_user">
            <span className="wg_username">Md Intezar Alam</span>
            <span className="wg_username_title">Software Engineer</span>
        </div>
        <button className="wg_sm_btn">
        <VisibilityIcon  className='wg_sm_icons'/>Display
        </button>
    </li>
    <li className="wg_sm_Lt_It">
    <img src={top} className="wg_sm_img"/>
    <div className="wg_sm_user">
        <span className="wg_username">Md Intezar Alam</span>
        <span className="wg_username_title">Software Engineer</span>
    </div>
    <button className="wg_sm_btn">
    <VisibilityIcon  className='wg_sm_icons'/>Display
    </button>
</li>

            </ul>
        </div>
    )
}
export default WidgeSmall
