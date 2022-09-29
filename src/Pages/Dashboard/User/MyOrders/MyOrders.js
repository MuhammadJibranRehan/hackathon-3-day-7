import React from 'react';
import { Image, Table } from 'react-bootstrap';
import useOrders from '../../../../Hooks/useOrders';
import './MyOrders.css';

const MyOrders = () => {

    const [orders] = useOrders();
    const myOrders = orders?.filter((orders) => orders?.shippingName);
    
    return (
        <>
            <div className='myOrder'>
                <h1 className='text-center my-5'>My Orders ({myOrders.length})</h1>

                {myOrders.length === 0 ? (
                    <h4 className="text-center text-danger mt-5">You not yet ordered anything.</h4>
                ) : (
                    <Table className='container' striped bordered hover>
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
                            </tr>
                        </thead>
                        {myOrders.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td><Image className='order-image img-fluid' src={order?.thumbnail} /></td>
                                <td>{order?.title}</td>
                                <td>{order?.email}</td>
                                <td>{order?.shippingName}</td>
                                <td>{order?.address}, {order?.apartment}, {order?.city}-{order?.postcode}, {order?.country}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.price}</td>
                                <td>{order?.quantity}</td>
                                <td><span className='status'>{order?.status}</span> </td>
                            </tr>
                        </tbody>
                    ))}
                    </Table>
                )}
            </div>
        </>
    );
};

export default MyOrders;