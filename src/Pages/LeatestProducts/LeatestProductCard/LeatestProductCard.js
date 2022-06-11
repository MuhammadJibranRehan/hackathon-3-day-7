import React from 'react';
import { Image } from 'react-bootstrap';
import { useCartContext } from '../../../Contexts/CartContext/CartContext';
import cartIcon from '../../../Images/NewArrival/fluent_cart-24-regular.svg';
import heartIcon from '../../../Images/NewArrival/uil_heart-alt.svg';
import searchIcon from '../../../Images/NewArrival/uil_search-plus.svg';
import './LeatestProductCard.css';

const LeatestProductCard = (props) => {
    const { title, thumbnail, price, regulerPrice } = props.nAvl;

    const {
        // state: {  },
        dispatch,
    } = useCartContext();

    return (


        // <Col xs={12} md={6} lg={4} className='g-4'>
        <div className='pd'>
            <div className=' pdbody position-relative d-flex justify-content-center align-items-left '>
                <div className='l-icon position-absolute'>
                    <Image className='img-fluid' onClick={() =>
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: props.nAvl,
                        })
                    } src={cartIcon} alt='' />
                    <Image className='img-fluid' src={heartIcon} alt='' />
                    <Image className='img-fluid' src={searchIcon} alt='' />
                </div>
                <Image className='img-fluid ' src={thumbnail} alt='' />


            </div>
            <div className='d-flex justify-content-between align-items-center pdfooter'>
                <h6 className='pdname'>{title}</h6>
                <div className='d-flex align-items-center mt-2'>
                    <p className='spPrice pe-2'>$<span>{parseInt(price).toFixed(2)}</span></p>
                    <p className='rePrice'><s>$<span>{parseInt(regulerPrice).toFixed(2)}</span></s></p>
                </div>
            </div>
        </div>
        // </Col>

    );
};

export default LeatestProductCard;