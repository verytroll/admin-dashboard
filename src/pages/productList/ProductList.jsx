
import {useState} from "react";
import {Link} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import {productRows} from "../../dummyData";
import "./productList.css";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    let handleDelete = (id) => {
        let deletedIndex = -1;
        for(let i = 0; i < data.length; ++i) {
            if(data[i].id === id) {
                deletedIndex = i;
                break;
            }
        }

        if(deletedIndex > -1) {
            console.log(deletedIndex);
            let arr = [...data];
            arr.splice(deletedIndex, 1);
            setData(arr);
        }
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImage" src={params.row.image} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEditButton">Edit</button>
                        </Link>
                        <svg
                            className="productListDeleteButton"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="red"
                            onClick={() => {handleDelete(params.row.id)}}
                        >
                            <path d="M20.25 4.6875H3.75C3.60082 4.6875 3.45774 4.74676 3.35225 4.85225C3.24676 4.95774 3.1875 5.10082 3.1875 5.25C3.1875 5.39918 3.24676 5.54226 3.35225 5.64775C3.45774 5.75324 3.60082 5.8125 3.75 5.8125H4.6875V19.5C4.6875 19.8481 4.82578 20.1819 5.07192 20.4281C5.31806 20.6742 5.6519 20.8125 6 20.8125H18C18.3481 20.8125 18.6819 20.6742 18.9281 20.4281C19.1742 20.1819 19.3125 19.8481 19.3125 19.5V5.8125H20.25C20.3992 5.8125 20.5423 5.75324 20.6477 5.64775C20.7532 5.54226 20.8125 5.39918 20.8125 5.25C20.8125 5.10082 20.7532 4.95774 20.6477 4.85225C20.5423 4.74676 20.3992 4.6875 20.25 4.6875ZM18.1875 19.5C18.1875 19.5497 18.1677 19.5974 18.1326 19.6326C18.0974 19.6677 18.0497 19.6875 18 19.6875H6C5.95027 19.6875 5.90258 19.6677 5.86742 19.6326C5.83225 19.5974 5.8125 19.5497 5.8125 19.5V5.8125H18.1875V19.5ZM7.6875 2.25C7.6875 2.10082 7.74676 1.95774 7.85225 1.85225C7.95774 1.74676 8.10082 1.6875 8.25 1.6875H15.75C15.8992 1.6875 16.0423 1.74676 16.1477 1.85225C16.2532 1.95774 16.3125 2.10082 16.3125 2.25C16.3125 2.39918 16.2532 2.54226 16.1477 2.64775C16.0423 2.75324 15.8992 2.8125 15.75 2.8125H8.25C8.10082 2.8125 7.95774 2.75324 7.85225 2.64775C7.74676 2.54226 7.6875 2.39918 7.6875 2.25Z"/>
                        </svg>
                    </>
                );
            },
        },
    ];
    
    return(
        <div className="productList">
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableRowSelectionOnClick />
        </div>
    );
}
