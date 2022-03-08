import React from 'react';
import freeDelivery from '../../../Images/shopping-offer/free-delivery.png';
import cashBack from '../../../Images/shopping-offer/cashback.png';
import preQuality from '../../../Images/shopping-offer/premium-quality.png';
import support247 from '../../../Images/shopping-offer/24-hours-support.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './ShopexOfferCard.css';

const ShopexOfferCard = () => {
    return (
        <Container>
            <Row>
                <Col className='shopex-offer-card  ms-4' xs={12} md={4}>
                    <Image className='img-fluid mb-4' src={freeDelivery} alt='' />
                    <h3>Free Delivery</h3>
                    <br />
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h6>
                </Col>
                <Col className='shopex-offer-card ms-4' xs={12} md={4}>
                    <Image className='img-fluid mb-4 ' src={cashBack} alt='' />
                    <h3>100% Cash Back</h3>
                    <br />
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h6>
                </Col>
                <Col className='shopex-offer-card ms-4' xs={12} md={4}>
                    <Image className='img-fluid mb-4' src={preQuality} alt='' />
                    <h3>Quality Product</h3>
                    <br />
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h6>
                </Col>
                <Col className='shopex-offer-card mx-4' xs={12} md={4}>
                    <Image className='img-fluid mb-4' src={support247} alt='' />
                    <h3>24/7 Support</h3>
                    <br />
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopexOfferCard;