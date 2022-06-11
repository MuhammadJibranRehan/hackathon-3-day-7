import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LeatestProductCard from '../LeatestProductCard/LeatestProductCard';
import useProducts from '../../../Hooks/useProducts';
import './LeatestProducts.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


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
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    breakpoints={{
                        481: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                    }}
                    navigation={true}
                    modules={[Navigation]}

                >
                    {
                        products.filter(nAvl => nAvl.subCategory === "New Arrival").map(nAvl =>
                            <SwiperSlide>
                                <LeatestProductCard
                                    key={nAvl._id}
                                    nAvl={nAvl}
                                ></LeatestProductCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Row>
        </Container>
    );
};
export default LeatestProducts;