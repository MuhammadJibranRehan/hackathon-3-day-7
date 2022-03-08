import React from 'react';
import { Container } from 'react-bootstrap';
import FeaturedPductCard from '../FeaturedPductCard/FeaturedPductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <Container>
            <div>
                <h1 className='div-title'>Featured Products</h1>
            </div>
            <FeaturedPductCard></FeaturedPductCard>
        </Container>
    );
};

export default FeaturedProducts;