import React, { useState } from 'react';
import { useEffect } from 'react';
import { Image, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageOrders.css';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    // console.log(status);

    useEffect(() => {
        fetch("https://gentle-taiga-66433.herokuapp.com/manage-orders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [allOrders, status]);
    const Orders =allOrders?.filter((orders) => orders?.shippingName);

    const handleUpdate = (id) => {
        fetch(`https://gentle-taiga-66433.herokuapp.com/update-order-status/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Updated.',
            showConfirmButton: false,
            timer: 5000
        })
        // console.log(id);
    };

    // Delete Order
    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this Order",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FB2E86',
            cancelButtonColor: '#19D16F',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                deleteOrder(id);
            }
        });
    };

    const deleteOrder = id => {
        const url = `https://gentle-taiga-66433.herokuapp.com/order/delete/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);


                if (!data?.deletedCounted) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order has been delete',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            });
    };

    return (
        <>
                <h2>Orders ({Orders.length})</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th>User E-mail</th>
                            <th>Delivery to</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {Orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td><Image className='img img-fluid' src={order.thumbnail} alt="" /></td>
                                <td>{order.title}</td>
                                <td>{order.email}</td>
                                <td>{order?.shippingName}</td>
                                <td>{order?.address}, {order?.apartment}, {order?.city}-{order?.postcode}, {order?.country}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.price}</td>
                                <td>{order?.quantity}</td>
                                <td>
                                    <select className='manage-order-status-select' onChange={handleStatus}>
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Pending">Processed</option>
                                        <option value="Confirm">Shipping</option>
                                        <option value="Confirm">Completed</option>
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
        </>
    );
};

export default ManageOrders;