import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import bannerSofa from './../../../Images/sofa promotional header.png';
import bannerLight from './../../../Images/banner-light.png';
import './Banner.css';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <Row className='banner-style'>
                <Col className='d-flex align-items-center' xs={12} md={6}>

                    <Col className='align-self-start' xs={0} md={4}>
                        <Image className='img-fluid ' src={bannerLight} alt='' />
                    </Col>
                    <Col xs={12} md={8} className='py-5'>
                        <span className='banner-content-container'>
                            <h6>Best Furniture For Your Castle....</h6>
                            <h1>New Furniture Collection</h1>
                            <h1>Trends in 2022</h1>
                            <p>Create the home of fashion with upbeat &amp; pulsating designs of furniture.</p>
                            <br />
                            <NavLink to="/products"><Button className='button'>Shop Now</Button></NavLink>
                        </span>
                    </Col>

                </Col>
                <Col className='align-self-center' xs={12} md={6}>
                    <Image className='img-fluid py-5' src={bannerSofa} alt='' />
                </Col>
            </Row>
        </>
    );
};

export default Banner;