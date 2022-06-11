import React, { useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [allBooking, setAllBooking] = useState([]);

    // useEffect(() => {
    //     fetch(`https://glacial-garden-93428.herokuapp.com/tour_booking/${email}`)
    //         .then(res => res.json())
    //         .then(data => setAllBooking(data))
    // }, [allBooking, email]);

    // const handleDelete = id => {
    //     // console.log(id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "Do you really want to delete this Booking",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then(result => {
    //         if (result.value) {
    //             deleteTour(id);
    //         }
    //     });
    // };
    // const deleteTour = id => {
    //     const url = `https://glacial-garden-93428.herokuapp.com/delete_booking/${id}`;
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
            <div className='mytour'>
                <h1 className='text-center my-5'>My Orders</h1>

                {allBooking.length === 0 ? (
                    <h1 className="text-center mt-5">You not yet ordered anything.</h1>
                ) : (
                    <Table className='container' striped bordered hover>
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Address</th>
                                <th>Travellers</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* {allBooking.map((booking, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td><Image className='booking-image img-fluid' src={booking?.image} /></td>
                                <td>{booking?.title}</td>
                                <td>{booking?.name}</td>
                                <td>{booking?.email}</td>
                                <td>{booking?.address}</td>
                                <td>{booking?.travellers}</td>
                                <td>{booking?.price * parseInt(booking?.travellers)}</td>
                                <td>{booking?.status}</td>
                                {booking.status === 'Pending' ? (
                                    <td><button className='btn-delete px-2 py-1' onClick={() => handleDelete(booking?._id)}>Delete</button></td>) : (
                                    <td><button disabled className='btn-delete px-2 py-1' onClick={() => handleDelete(booking?._id)}>Delete</button></td>)}
                            </tr>
                        </tbody>
                    ))} */}
                    </Table>
                )}
            </div>
        </>
    );
};

export default MyOrders;