import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LeatestProductCard from '../LeatestProductCard/LeatestProductCard';
import useProducts from '../../../Hooks/useProducts';
import './LeatestProducts.css';

const LeatestProducts = () => {
    const [products] = useProducts();
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
            <Row>
                {
                    products.filter(nAvl => nAvl.subCategory === "New Arrival").map(nAvl =>
                        <LeatestProductCard
                            key={nAvl._id}
                            nAvl={nAvl}
                        ></LeatestProductCard>
                    )
                }
            </Row>
        </Container>
    );
};
export default LeatestProducts;