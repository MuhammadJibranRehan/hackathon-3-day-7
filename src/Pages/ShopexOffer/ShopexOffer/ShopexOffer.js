import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ShopexOfferCard from '../ShopexOfferCard/ShopexOfferCard';


const ShopexOffer = () => {
    const [shopOffer, setShopOffer] = useState([]);
    useEffect(() => {
        fetch('./ShopexData.json')
            .then(res => res.json())
            .then(data => setShopOffer(data))
    }, []);
    return (
        <Container>
            <div>
                <h1 className='div-title'>What Shopex Offer!</h1>
            </div>
            <div className='row'>
                {
                    shopOffer.map(offer =>
                        <ShopexOfferCard
                            key={offer._id}
                            offer={offer}
                        ></ShopexOfferCard>
                    )}
            </div>

        </Container>
    );
};

export default ShopexOffer;