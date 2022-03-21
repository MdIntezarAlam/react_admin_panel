import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom'
import { userRows } from '../../dmData'
import top from '../../img/top.jpeg';
import '../../styles/userlist.css'


export default function DataTable() {
    const [data, setData] = useState(userRows);
    //when user click on delete button it will delete 
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'Username', width: 200,
            renderCell: (params) => {
                return (
                    <div className='userlist_user'>
                        <img src={top} className="userlist_img" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 160 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 190 },
        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userlist_btn'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userlist_btn_dlt'
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="userlist">
            <DataGrid rows={data} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
        </div>
    );
}
