import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import newArrival from '../../../Images/NewArrival/newArrival-1.png';
import cartIcon from '../../../Images/NewArrival/fluent_cart-24-regular.svg';
import heartIcon from '../../../Images/NewArrival/uil_heart-alt.svg';
import searchIcon from '../../../Images/NewArrival/uil_search-plus.svg';
import './LeatestProductCard.css';

const LeatestProductCard = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <div className='pd'>
                        <div className=' pdbody position-relative d-flex justify-content-center align-items-center '>
                            <div className='l-icon position-absolute'>
                                <Image className='img-fluid' src={cartIcon} alt='' />
                                <Image className='img-fluid' src={heartIcon} alt='' />
                                <Image className='img-fluid' src={searchIcon} alt='' />
                            </div>
                            <Image className='img-fluid ' src={newArrival} alt='' />


                        </div>
                        <div className='d-flex justify-content-between align-items-center pdfooter'>
                            <h6 className='pdname'>Comfort Handy Craft</h6>
                            <div className='d-flex align-items-center mt-2'>
                                <p className='spPrice pe-2'>$<span>42.00</span></p>
                                <p className='rePrice'><s>$<span>65.00</span></s></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LeatestProductCard;