import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import "./styles.css"

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className="chart">
            <h3 className="chart_title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type="monotone" dataKey={dataKey} />
                    <Tooltip />
                  {grid &&  <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
