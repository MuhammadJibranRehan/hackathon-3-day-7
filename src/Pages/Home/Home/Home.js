import React from 'react';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts/FeaturedProducts';
import LeatestProducts from '../../LeatestProducts/LeatestProducts/LeatestProducts';
import HashSpinner from '../../Shared/HashSpinner/HashSpinner';
import HeadingBar from '../../Shared/HeadingBar/HeadingBar';
import Navigation from '../../Shared/Navigation/Navigation';
import ShopexOffer from '../../ShopexOffer/ShopexOffer/ShopexOffer';
import UniqueFeatureBanner from '../../UniqueFeatureBanner/UniqueFeatureBanner';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Testimonials from '../../Testimonials/Testimonials';




const Home = () => {

    return (
        <>
            <HeadingBar ></HeadingBar>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <LeatestProducts></LeatestProducts>
            <ShopexOffer></ShopexOffer>
            <UniqueFeatureBanner></UniqueFeatureBanner>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </>
    );
};

export default Home;