import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Testimonials.css';
import { Rating } from 'react-simple-star-rating';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Spinner from '../Shared/Spinner/Spinner';



const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://hekto.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviews])

    return (
        <section>
            <Container>
                <h1 className='div-title'>Happy Client Says</h1>
                {reviews?.length === 0? <div style={{padding: '300px 0'}}> <Spinner/> </div> :
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            481: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {reviews.map(review =>

                            <SwiperSlide key={review._id}>
                                <div className='testimonial p-3 mb-5'>

                                    <div className=' text-center'>
                                        <img className='user-image img-fluid' src={review.image} alt="" />
                                        <h5 className='reviewer-name'>{review.name}</h5>
                                        <h6 className='text-secondary'>{review.jobTitle}</h6>

                                        <Rating className='rating' initialValue={parseInt(review.rating)} size='20' readonly></Rating>
                                    </div>
                                    <p className='quote'>{review.comments}</p>
                                </div>


                            </SwiperSlide>

                        )}
                    </Swiper>
                </Row >
                }
            </Container >
        </section >
    );
};

export default Testimonials;