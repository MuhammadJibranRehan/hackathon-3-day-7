import React from 'react';
import { useState } from "react";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import './ShoppingCart.css';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import cartimg from '../../Images/featured-Image/image-1.png';
import itemCancel from '../../Images/cart-Cancel-icon.svg';
import { Col, Container, Row } from 'react-bootstrap';



const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);



    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>
            <div className='shoppingCart d-flex align-items-center mb-5'>
                <div className='container '>
                    <h4>Shopping Cart</h4>
                    <p>Home. Pages. <span>Shopping Cart</span></p>
                </div>
            </div>
            <Container>
                {/*--------------Table header------------------*/}
                <Row className='mb-4'>
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h4 className='t-header'>Product</h4>
                                    </div>
                                    <div>
                                        <h4 className='t-header'>Price</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <h4 className='t-header'>Quantity</h4>
                                    </div>
                                    <div>
                                        <h4 className='t-header'>Total</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={4}><h4 className='text-center t-header'>Cart Totals</h4> </Col>
                </Row>
                {/*--------------Table  body------------------*/}
                <Row>
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <img className='cart-item-img img-fluid position-relative' src={cartimg} alt="" srcset="" />
                                        <img className='position-absulate cancel-item' src={itemCancel} alt="cancel item" srcset="" />
                                        <span className='ms-3'>
                                            <p className='itemName m-0'>Ut diam consequat</p>
                                            <p className='itemAttributes m-0'>Color: <span>Brown</span></p>
                                            <p className='itemAttributes  m-0'>Size: <span>XL</span></p>
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p className='itemPrice me-1'>$<span>32.00</span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='d-flex justify-content-around my-4'>

                                    <div className='quantity-box d-flex justify-content-between '>
                                        <button onClick={() => setQuantity(pre => pre > 1 ? pre - 1 : 1)} className='minus-btn'>-</button>
                                        <p id="case-number" className=' text-center'>{quantity}</p>
                                        <button onClick={() => setQuantity(pre => pre + 1)} className='plus-btn'>+</button>
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p className='itemPrice '>$<span>{(32.00 * quantity).toFixed(2)}</span></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                    </Col>
                    {/* ---------------- Cart Totals------------------- */}
                    <Col xs={12} md={4}>
                        <div className='cartTotals'>
                            <div className='p-4'>
                                <div className='d-flex justify-content-between'>
                                    <h5>Subtotals:</h5>
                                    <h5><span>$</span>{(32.00 * quantity).toFixed(2)}</h5>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <h5>Totals:</h5>
                                    <h5><span>$</span>{(32.00 * quantity).toFixed(2)}</h5>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <input className=' mt-2 me-1' type="checkbox" checked='checked' name="check" value="" id='check' />
                                    <label for='check' data-content="Shipping &amp; taxes calculated at checkout">Shipping &amp; taxes calculated at checkout</label>
                                </div>
                                <button className='checkoutBtn mt-3'>Proceed To Checkout</button>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default ShoppingCart;