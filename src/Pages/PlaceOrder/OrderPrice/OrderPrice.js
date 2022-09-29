import React from 'react';
import useOrders from '../../../Hooks/useOrders';
import './OrderPrice.css';

const OrderPrice = () => {
    const [orders] = useOrders();
    // console.log(orders);

    let sumOfTotal = 0;
    for (const order of orders) {
        sumOfTotal += order.price;

    }
    const subTotal = parseFloat(sumOfTotal.toFixed(2));
    const tax = parseFloat((sumOfTotal * .05).toFixed(2));
    const deliveryFee = parseFloat((20).toFixed(2));
    const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));

    return (
        <div className="orderPriceInfo my-4">
            <div className="d-flex align-items-center justify-content-between me-2">
                <span className="">Subtotal</span>
                <span className="">$ {subTotal}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between me-2">
                <span className="">Tax <small className='fw-normal'>(5%)</small></span>
                <span className="">$ {tax}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between me-2">
                <span className="">Delivery Fee</span>
                <span className="">$ {deliveryFee}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between me-2">
                <span className="">Total</span>
                <span className="">$ {total}</span>
            </div>
        </div>
    )
}

export default OrderPrice;