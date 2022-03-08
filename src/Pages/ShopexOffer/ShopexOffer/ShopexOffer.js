import React from 'react';
import { Container } from 'react-bootstrap';
import ShopexOfferCard from '../ShopexOfferCard/ShopexOfferCard';


const ShopexOffer = () => {
    return (
        <Container>
            <div>
                <h1 className='div-title'>What Shopex Offer!</h1>
            </div>
            <ShopexOfferCard></ShopexOfferCard>
        </Container>
    );
};

export default ShopexOffer;