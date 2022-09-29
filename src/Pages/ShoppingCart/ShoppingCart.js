import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import './ShoppingCart.css';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import itemCancel from '../../Images/delete.png';
import { Col, Container, Row } from 'react-bootstrap';
import useOrders from '../../Hooks/useOrders';



const ShoppingCart = () => {

    const [orders] = useOrders();
    console.log(orders);

    // let subTotal = 0;
    // for (const order of orders) {
    //     if (!order.quantity) {
    //         item.quantity = 1;
    //     }
    //     subTotal += parseInt(item.price) * item.quantity;

    // }
    // const shipping = subTotal ? 10 : 0;
    // const tax = (subTotal + shipping) * .10;
    // const grandTotal = subTotal + shipping + tax;









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
                {(orders?.length) < 1 && (
                    <div className="empty-cart text-center">
                        <img className='img-fluid' src="https://i.ibb.co/cNc0Kk0/empty-shopping-cart-4029586-3337625.png" alt="man-running-while-pushing" border="0"></img>
                        <h3 className='emty_cart_h text-center'>Oops! Your cart is empty!</h3>
                        <h5 className='text-center'>Looks like you haven't added <br /> anything to your cart yet.</h5>
                        <br />
                    </div>
                )}

                {(orders?.length) >= 1 && (
                    <div>
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
                                {orders?.map(order =>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <img className='cart-item-img img-fluid position-relative' src={order.thumbnail} alt="" srcset="" />

                                                    <img className='position-absulate img-fluid cancel-item' src={itemCancel} alt="cancel item" srcset="" />

                                                    {/* <img className='position-absulate img-fluid cancel-item' onClick={(e) => removeFromCart(e, product._id)} src={itemCancel} alt="cancel item" srcset="" /> */}

                                                    <span className='ms-3'>
                                                        <p className='itemName m-0'>{order.title}</p>
                                                    </span>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <p className='itemPrice me-1'>$<span>{parseInt(order.price).toFixed(2)}</span></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className='d-flex justify-content-around my-4'>

                                                <div className='quantity-box d-flex justify-content-between '>
                                                    <button className='minus-btn'>-</button>

                                                    <p id="case-number" className=' text-center'>{order.quantity}</p>

                                                    <button className='plus-btn'>+</button>


                                                </div>

                                            </div>
                                        </Col>
                                        <span className='mb-3'></span>
                                        <hr />
                                    </Row>

                                )}

                            </Col>
                            {/* ---------------- Cart Totals------------------- */}

                            <Col xs={12} md={4}>
                                <div className='cartTotals'>
                                    <div className='p-4'>
                                        {/* <div className='d-flex justify-content-between'>
                                            <h5>Subtotal:</h5>
                                            <h5><span>$</span>{subTotal.toFixed(2)}</h5>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <h5>Shipping:</h5>
                                            <h5><span>$</span>{shipping.toFixed(2)}</h5>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <h5>Tax:</h5>
                                            <h5><span>$</span>{tax.toFixed(2)}</h5>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <h5>Total:</h5>
                                            <h5><span>$</span>{grandTotal.toFixed(2)}</h5>
                                        </div> */}
                                        <hr />
                                        <div className="d-flex">
                                            <input className=' mt-2 me-1' type="checkbox" checked='checked' name="check" value="" id='check' />
                                            <label for='check' data-content="Shipping &amp; taxes calculated at checkout">Includes shipping and tax</label>
                                        </div>
                                        <button onClick={() => alert("The checkout page has not yet been created.")} className='checkoutBtn mt-3'>Proceed To Checkout</button>
                                    </div>
                                </div>

                            </Col>

                        </Row>
                    </div>
                )}
                {/*--------------Table header------------------*/}


            </Container >
            <Footer></Footer>
        </>
    );
};

export default ShoppingCart;