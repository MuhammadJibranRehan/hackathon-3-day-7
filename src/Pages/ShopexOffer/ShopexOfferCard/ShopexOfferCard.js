import React from 'react';
import './ShopexOfferCard.css';

const ShopexOfferCard = (props) => {
    const { title, thumbnail, description } = props.offer;
    return (

        <div className='col-lg-3 col-md-6 md-12 g-4'>
            <div className='shopex-offer-card'>
                <img className='img-fluid mb-4' src={thumbnail} alt='' />
                <h3>{title}</h3>
                <br />
                <h6>{description}</h6>
            </div>
        </div>



    );
};

export default ShopexOfferCard;