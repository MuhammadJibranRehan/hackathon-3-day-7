
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './OrderCard.css';




const cancelOrder = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to delete this product",
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
const deleteOrder = (id) => {
    // console.log('clicked >>> ', id);
    const url = `https://gentle-taiga-66433.herokuapp.com/order/delete/${id}`;
    fetch(url, {
        method: 'DELETE',
    }).then(res => res.json())
        .then(data => {
            if (!data?.deletedCounted) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Products has been delete',
                    showConfirmButton: false,
                    timer: 5000
                })
            }
        });
};

const OrderCard = (props) => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;
    useEffect(() => {
        fetch(`https://gentle-taiga-66433.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders, email])
    const { _id, thumbnail, title, quantity, price } = props.order;

    return (
        <div className="d-flex flex-row bg-white my-3 p-2 rounded">
            <div className="col-8 d-flex align-items-center">
                <img className="order-card-img " src={thumbnail} alt="" />
                <span>
                    <h5 className="">{title}</h5>
                    <h6 className="">${price.toFixed(2)}</h6>
                </span>
            </div>

            <div className="col-4 d-flex align-items-center justify-content-around">
                <h6 className="mt-2">{quantity} items</h6>
                <FontAwesomeIcon onClick={() => cancelOrder(_id)} className='fs-3 order-delete' icon={faXmark} />
            </div>
        </div>
    )
}


export default OrderCard;