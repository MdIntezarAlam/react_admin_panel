import './styles.css';
import top from '../../img/top.jpeg'

const WidgeLarge = () => {

  //btn components
  const Button = ({ type }) => {
    return <button className={"wg_lg_btn " + type}>{type}</button>
  }


  return (
    <div className='widgelg'>
      <h3 className='wg_lg_title'>Lates Transactions</h3>
      <table className="wg_lg_table">
        <tr className='wg_lg_tr'>
          <th className="wg_lg_th">Customer</th>
          <th className="wg_lg_th">Date</th>
          <th className="wg_lg_th">Amount</th>
          <th className="wg_lg_th">Status</th>
        </tr>
        <tr className="wg_lg_tr">
          <td className='wg_lg_user'>
            <img src={top} className='wg_lg_img' />
            <span className="wg_lg_name">Md Intezar Alam</span>
          </td>
          <td className='wg_lg_data'>1 jan 2021</td>
          <td className='wg_lg_amount'>$12.00</td>
          <td className='wg_lg_status'>
            <Button type='Approved' />
          </td>
        </tr>

        <tr className="wg_lg_tr">
          <td className='wg_lg_user'>
           <img src={top} className='wg_lg_img' />
            <span className="wg_lg_name">Md Intezar Alam</span>
          </td>
          <td className='wg_lg_data'>1 jan 2021</td>
          <td className='wg_lg_amount'>$12.00</td>
          <td className='wg_lg_status'>
            <Button type='Decilined' />
          </td>
        </tr>
        <tr className="wg_lg_tr">
          <td className='wg_lg_user'>
           <img src={top} className='wg_lg_img' />
            <span className="wg_lg_name">Md Intezar Alam</span>
          </td>
          <td className='wg_lg_data'>1 jan 2021</td>
          <td className='wg_lg_amount'>$12.00</td>
          <td className='wg_lg_status'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className="wg_lg_tr">
          <td className='wg_lg_user'>
           <img src={top} className='wg_lg_img' />
            <span className="wg_lg_name">Md Intezar Alam</span>
          </td>
          <td className='wg_lg_data'>1 jan 2021</td>
          <td className='wg_lg_amount'>$12.00</td>
          <td className='wg_lg_status'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  )
}
export default WidgeLarge
