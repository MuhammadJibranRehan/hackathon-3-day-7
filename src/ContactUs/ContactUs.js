import React from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import HeadingBar from '../Pages/Shared/HeadingBar/HeadingBar';
import Navigation from '../Pages/Shared/Navigation/Navigation';
import contactUs from './../Images/New folder/contact-us.png';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>
            <div className='contactHeader d-flex align-items-center mb-3'>
                <div className='container '>
                    <h3>Contact Us</h3>
                    <p>Home. Pages. <span>Contact Us</span></p>
                </div>
            </div>
            <section className='container'>
                <div className="row">
                    <div className="three-dot col-md-6">
                        <h2>Information About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <span></span><span></span><span></span>


                    </div>
                    <div className="contactWay-main col-md-6">
                        <h2>Contact Way</h2>
                        <div className='row my-3'>
                            <div className='d-flex col-md-6'>
                                <span className='contact-way-info'></span>
                                <div>
                                    <p className='fs-6 my-0'>Tel: 877-67-88-99</p>
                                    <p className='fs-6 my-0'>E-Mail: shop@hekto.com</p>
                                </div>
                            </div>
                            <div className='d-flex col-md-6'>
                                <span className='contact-way-info2'></span>
                                <div>
                                    <p className='fs-6 my-0'>Support Forum</p>
                                    <p className='fs-6 my-0'>For over 24hr.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row my-3'>
                            <div className='d-flex col-md-6'>
                                <span className='contact-way-info3'></span>
                                <div>
                                    <p className='fs-6 my-0'>20 Margaret st, London</p>
                                    <p className='fs-6 my-0'>Great britain, 3NM98-LK.</p>
                                </div>
                            </div>
                            <div className='d-flex col-md-6'>
                                <span className='contact-way-info4'></span>
                                <div>
                                    <p className='fs-6 my-0'>Free standard shipping</p>
                                    <p className='fs-6 my-0'>on all orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='container mb-5'>
                <div className='row'>
                    <div className="get-in-touch-main col-md-6">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <form action="">
                            <div className='row'>
                                <div className='col-md-6'><input type="text" name="name" id="" placeholder='Your Name*' required /></div>
                                <div className="col-md-6">
                                    <input type="email" name="email" id="" placeholder='Your E-mail*' required />
                                </div>
                            </div>
                            <input className='' type="text" name="subject" id="" placeholder='Subject*' required /><br />
                            <textarea rows='6' name='messege' placeholder='Type Your Messege*' required />
                        </form>
                        <button type="submit">Send Mail</button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={contactUs} alt="contact us" />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;