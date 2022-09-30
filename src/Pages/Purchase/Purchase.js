import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css';
import useProducts from '../../Hooks/useProducts';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Purchase = () => {

    const { user } = useAuth();

    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (quantity < 1) setQuantity(1)
    }, [quantity])

    const { id } = useParams();
    const [products] = useProducts();
    const singleItem = products?.find(product => product._id === id);


    const handleOrderNow = (data) => {
        fetch('https://hekto-ecommerce-server-side.vercel.app/orders', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your order has added to the cart',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            })
    }



    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation><hr className='m-0 p-0' />
            <section className='container my-5  pb-5'>
                <div>
                    <div className='row'>
                        <div className='col-md-6  purchase-item-pic-main' >
                            <img src={singleItem?.thumbnail} alt="" className='purchase-img' />
                        </div>
                        <div className=" col-md-6 px-4">
                            <h2 className='singleItem-title'>{singleItem?.title}</h2>
                            <h6>Product code: {singleItem?.code}</h6>
                            <span className='d-flex'>
                                <h6 className='me-1'>Ratings: {singleItem?.rating} </h6>
                                <small>(customer review 12/15)</small>
                            </span>
                            <p className='text-gray'>{singleItem?.description}</p>


                            <div className="d-flex mb-3">
                                <h4 className='text-gray me-3 price-color '>$ {singleItem?.price * quantity}</h4>
                                <div>
                                    <button onClick={() => setQuantity(quantity - 1)} className="quantity-minus"><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className="quantity">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="quantity-plus"><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <button className='order-now' onClick={() => handleOrderNow({
                                product_id: singleItem?._id,
                                title: singleItem?.title,
                                thumbnail: singleItem?.thumbnail,
                                price: singleItem?.price * quantity,
                                email: user?.email,
                                displayName: user?.displayName,
                                status: "Pending",
                                quantity: quantity,
                            })}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section >
            <Footer></Footer>
        </>
    );
};

export default Purchase;