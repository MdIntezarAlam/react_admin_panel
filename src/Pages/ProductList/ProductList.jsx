import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom'
import { productRows } from '../../dmData'
import simg from '../../img/simg.jpg'
import '../../styles/productlist.css';

export default function ProductList() {
    const [pruductdata, setproductData] = useState(productRows)

    const handleDelete = (id) => {
        setproductData(pruductdata.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 210,
            renderCell: (params) => {
                return (
                    <div className='productlist_item'>
                        <img src={simg} className="productlist_img" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 210 },
        { field: 'status', headerName: 'Status', width: 190 },
        { field: 'price', headerName: 'Price', width: 180 },
        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className='productlist_btn'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='productlist_btn_dlt'
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productlist'>
            <DataGrid
                rows={productRows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
