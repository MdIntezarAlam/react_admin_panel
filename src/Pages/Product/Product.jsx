import Chart from '../../components/Chart'
import { productData } from '../../dmData'
import { Link } from 'react-router-dom'
import simg from '../../img/simg.jpg'
import '../../styles/product.css'
import { Publish } from '@material-ui/icons';

export default function Product() {
    return (
        <div className='product'>
            <div className="product_title_container">
                <h1 className='product_title'>Product</h1>
                <Link to="/newproduct">
                    <button className='product_add_btn'>Create</button>
                </Link>
            </div>
            <div className="product_top">
                <div className="product_top_left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product_top_right">
                    <div className="product__top_right_info">
                        <img src={simg} className='product_top_right_info_img' />
                        <span className="product_name">Samsung</span>
                    </div>
                    <div className="product__top_right_info_bottom">
                        <div className="product_Infoitem">
                            <span className='productinfo_key'>Id:</span>
                            <span className='productinfo_value'>232</span>
                        </div>
                        <div className="product_Infoitem">
                            <span className='productinfo_key'>Sales:</span>
                            <span className='productinfo_value'>232</span>
                        </div>
                        <div className="product_Infoitem">
                            <span className='productinfo_key'>Active:</span>
                            <span className='productinfo_value'>yes</span>
                        </div>
                        <div className="product_Infoitem">
                            <span className='productinfo_key'>Stock:</span>
                            <span className='productinfo_value'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_bottom">
                <form className='product_form'>
                    <div className="productform_left">
                        <label>Product Name</label>
                        <input type="text" placeholder='Samsung' />
                        <label>In Stock</label>
                        <select type="text" name='instock' id='idstock'>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select type="text" name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productform_right">
                        <div className="productupload">
                            <img src={simg} className="productform_right_img"/>
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="text" id='file'  style={{display:'none'}} />
                        </div>
                        <button className='productbtn'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
