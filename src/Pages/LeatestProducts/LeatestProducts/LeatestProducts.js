import React from 'react';
import { Container } from 'react-bootstrap';
import LeatestProductCard from '../LeatestProductCard/LeatestProductCard';
import './LeatestProducts.css';

const LeatestProducts = () => {
    return (
        <Container>
            <div className='leatest-div'>
                <h1 className='div-title'>Leatest Products</h1>
                <div className='text-center'>
                    <span className='sub-category me-5'>New Arrival</span>
                    <span className='sub-category me-5'>Best Seller</span>
                    <span className='sub-category me-5'>Featured</span>
                    <span className='sub-category me-0'>Special Offer</span>
                </div>
            </div>

            <LeatestProductCard></LeatestProductCard>
        </Container>
    );
};
export default LeatestProducts;