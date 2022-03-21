import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './styles.css';

function FeatureInfo() {
    return (
        <div className='feature'>
            <div className="feature_items">
                <span className="feature_title">Revanue</span>
                <div className="featuremoney_container">
                    <span className="feature_money">$12, 432</span>
                    <span className="feature_rate">-12.4 <ArrowDownwardIcon className='feature_icon  negative'/></span>
                </div>
                <span className='featureSub'>Compared to last Month</span>
            </div>
            <div className="feature_items">
                <span className="feature_titl">Sales</span>
                <div className="featuremoney_container">
                    <span className="feature_money">$12, 432</span>
                    <span className="feature_rate">-12.4 <ArrowDownwardIcon className='feature_icon  negative' /></span>
                </div>
                <span className='featureSub'>Compared to last Month</span>
            </div>
            <div className="feature_items">
                <span className="feature_titl">Cost</span>
                <div className="featuremoney_container">
                    <span className="feature_money">$1, 132</span>
                    <span className="feature_rate">+2 <ArrowUpwardIcon  className='feature_icon  '/></span>
                </div>
                <span className='featureSub'>Compared to last Month</span>
            </div>
        </div>
    )
}

export default FeatureInfo