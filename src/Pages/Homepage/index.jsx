import FeatureInfo from '../../components/featuresInfo';
import Chart from '../../components/Chart'
import { userData } from '../../dmData'
import WidgeSmall from '../../components/widgeSmall';
import WidgeLarge from '../../components/widgeSmall';
import '../../styles/home.css'
const Homepage = () => {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidge">
                <WidgeSmall />
                <WidgeLarge />
            </div>
        </div>
    )
}

export default Homepage