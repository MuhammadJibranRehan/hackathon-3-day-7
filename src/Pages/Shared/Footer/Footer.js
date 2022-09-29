import React from 'react';
import { Col, Container, InputGroup, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerDiv'>
            <div className='footerbody'>
                <Container>
                    <Row className=''>
                        <Col xs={12} md={5}>
                            <Nav.Link as={HashLink} to="/home" className='footer-logo'>Hekto
                            </Nav.Link>
                            <br />
                            <InputGroup>
                                <input type='text'
                                    placeholder="Enter Email Address" className='px-1 signUp-input'
                                />
                                <button className='signUp-button'>
                                    Sign Up
                                </button>
                            </InputGroup>
                            <br />
                            <h6>Contact Info<br />17 Princess Road, London, Greater London NW1 8JR, UK</h6>

                        </Col>
                        <Col xs={12} md={7}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h2 className='footer-sm-div'>Catagories</h2>
                                    <h6 className='mb-4'>Laptops &amp; Coputers</h6>
                                    <h6 className='mb-4'>Cameras &amp; Photography</h6>
                                    <h6 className='mb-4'>Smart Phones &amp; Tablets</h6>
                                    <h6 className='mb-4'>Video Games &amp; Consoles</h6>
                                    <h6 className='mb-4'>Waterproof Headphones</h6>
                                </Col>
                                <Col xs={12} md={4}>
                                    <h2 className='footer-sm-div'>Customer Care</h2>
                                    <h6 className='mb-4'>My Account</h6>
                                    <h6 className='mb-4'>Discount</h6>
                                    <h6 className='mb-4'>Returns</h6>
                                    <h6 className='mb-4'>Orders History</h6>
                                    <h6 className='mb-4'>Order Tracking</h6>
                                </Col>
                                <Col xs={12} md={4}>
                                    <h2 className='footer-sm-div'>Pages</h2>
                                    <h6 className='mb-4'>Blog</h6>
                                    <h6 className='mb-4'>Browse the Shop</h6>
                                    <h6 className='mb-4'>Category</h6>
                                    <h6 className='mb-4'>Pre-Built Pages</h6>
                                    <h6 className='mb-4'>Visual Composer Elements</h6>
                                    <h6 className='mb-4'>WooCommerce Pages</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footerBottom'>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <p className='copy-right pt-3 m-0'>Copyright &#169; {new Date().getFullYear()} Developed by <span>&#10084;</span> <a className='text-decoration-none author' href='https://www.linkedin.com/in/liazul'>Liazul Islam</a> </p>
                        </Col>
                        <Col className='d-flex justify-content-center pt-3 pb-3' xs={12} md={6}>
                            <FontAwesomeIcon className='iconBG ' icon={faFacebookF} />
                            <FontAwesomeIcon className='iconBG ms-2' icon={faInstagram} />
                            <FontAwesomeIcon className='iconBG ms-2' icon={faTwitter} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;