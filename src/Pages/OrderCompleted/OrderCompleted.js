import React from 'react';
import Footer from '../Shared/Footer/Footer';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';
import clock from './../../Images/New folder/clock.png';
import checklist from './../../Images/New folder/checklist.png';
import right from './../../Images/New folder/right.png';
import brand from './../../Images/New folder/brand.png';
import './OrderCompleted.css';
import { Link } from 'react-router-dom';

const OrderCompleted = () => {
    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>
            <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container '>
                    <h2>My Account</h2>
                    <p>Home. Pages. <span>Order Completed</span></p>
                </div>
            </div>
            <section className='container order-complete-main'>
                <div className='ordercomplete d-flex justify-content-center align-items-center'>
                    <div className='completeStatus'>
                        <img className='clock-img img-fluid' src={clock} alt="clock-img" />
                        <img className='checklist-img img-fluid.' src={checklist} alt="checklist-img" />
                        <div className='dashed-container'>
                            <img className='right-img img-fluid' src={right} alt="right-img" />
                            <h3 className='text-center'>Your Order Is Completed!</h3>
                            <p className='text-center'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. <br /> You will receive an email confirmation when your order is completed.
                            </p>
                            <Link to='/products' className='text-decoration-none'><button className='btn-continue-shopping'>Continue Shopping</button></Link>
                        </div>
                    </div>
                </div>

            </section>
            <div className='container text-center'>
                <img className=' img-fluid mt' src={brand} alt="brand" />
            </div>
            <Footer></Footer>
        </>
    );
};

export default OrderCompleted;