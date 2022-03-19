import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import FeaturedPductCard from '../FeaturedPductCard/FeaturedPductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [products] = useProducts();

    return (
        <Container>
            <div>
                <h1 className='div-title'>Featured Products</h1>
            </div>
            <div className="row">
                {
                    products.filter(fPd => fPd.category === 'Featured').map(fPd =>
                        <FeaturedPductCard
                            key={fPd._id}
                            fPd={fPd}></FeaturedPductCard>)
                }
            </div>
        </Container>
    );
};

export default FeaturedProducts;