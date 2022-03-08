import React from 'react';
import { Button } from 'react-bootstrap';
import cartIcon from '../../../Images/featuredIcon/fluent_cart-24-regular.svg';
import heartIcon from '../../../Images/featuredIcon/uil_heart-alt.svg';
import searchPlusIcon from '../../../Images/featuredIcon/search-plus.svg';
import chair from '../../../Images/featured-Image/image-1.png';
import './FeaturedPductCard.css';

const FeaturedPductCard = () => {
    return (
        <div className='featuredCard'>
            <div className='fCard-header'>
                <div className='d-flex f-Icon'>
                    <img className='img-fluid f-cartIcon mt-2 ms-2' src={cartIcon} alt="" srcset="" />
                    <img className='img-fluid f-heartIcon mt-2' src={heartIcon} alt="" srcset="" />
                    <img className='img-fluid f-searchPlus mt-2' src={searchPlusIcon} alt="" srcset="" />
                </div>
                <div className='f-img-btn'>
                    <div className='text-center f-card-img'>
                        <img className='img-fluid' src={chair} alt="" srcset="" />
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                        <Button className='fpd-view-dtails mt-4'>View Details</Button>
                    </div>
                </div>
            </div>
            <div className='fCard-footer text-center mt-3'>
                <h5>Cantilever chair</h5>
                <div className='rectangleColor d-flex justify-content-center mb-2'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h6>Code - Y523201</h6>
                <h6>$42.00</h6>
            </div>
        </div>
    );
};

export default FeaturedPductCard;