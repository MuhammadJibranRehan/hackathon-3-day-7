import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import useProducts from '../../../Hooks/useProducts';
import FeaturedPductCard from '../FeaturedPductCard/FeaturedPductCard';
import './FeaturedProducts.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Spinner from '../../Shared/Spinner/Spinner';




const FeaturedProducts = () => {
    const [products] = useProducts();

    // console.log(products);



    return (
        <Container>
            <div>
                <h1 className='div-title'>Featured Products</h1>
            </div>
            {products.length === 0? <Spinner/> :
            <div className="row">
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
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}

                >
                    {products.filter(fPd => fPd.category === 'Featured').map(fPd =>
                        <SwiperSlide key={fPd._id}>
                            <FeaturedPductCard

                                fPd={fPd}
                            ></FeaturedPductCard>
                        </SwiperSlide>
                    )
                    }
                </Swiper>
            </div>
            }
        </Container>
    );
};

export default FeaturedProducts;