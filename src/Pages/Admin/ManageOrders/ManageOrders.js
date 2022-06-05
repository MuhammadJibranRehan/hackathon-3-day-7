import React, { useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);

    // useEffect(() => {
    //     fetch("http://localhost:3000/orders")
    //         .then((res) => res.json())
    //         .then((data) => setBooking(data));
    // }, [orders, status]);


    // const status = "apporved";
    const handleUpdate = (id) => {
        // fetch(`http://localhost:3000/updateStatus/${id}`, {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ status }),
        // });
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'Successfully Updated.',
        //     showConfirmButton: false,
        //     timer: 2000
        // })
        // console.log(id);
    };

    // Delete Booking
    const handleDelete = id => {
        // console.log(id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "Do you really want to delete this Order",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then(result => {
        //     if (result.value) {
        //         deleteOrder(id);
        //     }
        // });
    };

    // const deleteOrder = id => {
    //     const url = `http://localhost:3000/delete_order/${id}`;
    //     fetch(url, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);


    //             if (!data?.deletedCounted) {
    //                 Swal.fire({
    //                     position: 'center',
    //                     icon: 'success',
    //                     title: 'Your tour has been delete',
    //                     showConfirmButton: false,
    //                     timer: 2000
    //                 })
    //             }
    //         });
    // };

    return (
        <>
            <div className="container">
                <h2>Orders ({orders.length})</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Product Title</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.title}</td>
                                <td><Image className='img img-fluid' src={order.image} alt="" /></td>
                                <td>{order.email}</td>

                                <td>
                                    {/* <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={order.status}
                                /> */}

                                    <select onChange={handleStatus}>
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirm">Confirm</option>
                                    </select>


                                </td>
                                <td>
                                    <button className="btn-delete px-2 py-1" onClick={() => handleDelete(order?._id)}>Delete</button>
                                    <button
                                        onClick={() => handleUpdate(order._id)}
                                        className="btn-update ms-3 px-2 py-1"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </>
    );
};

export default ManageOrders;