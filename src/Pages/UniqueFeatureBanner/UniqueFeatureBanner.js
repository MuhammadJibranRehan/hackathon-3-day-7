import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import uniqueBannerImg from '../../Images/unique-feature-banner.png';
import './UniqueFeatureBanner.css';

const UniqueFeatureBanner = () => {
    return (
        <div className='uniqueBanner'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className='img-fluid ' src={uniqueBannerImg} alt='' />
                    </Col>
                    <Col className='uniqueBnnrDetails align-self-center' xs={12} md={6}>
                        <h2 className='uniqueH2text'>Unique Features Of leatest &amp;
                            Trending Poducts</h2>
                        <br />
                        <div className='d-flex align-items-center'>
                            <div className='pinkPoint'></div><h6 className='ms-2 mt-1 pointTextColor'>All frames constructed with hardwood solids and laminates.</h6>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='bluePoint'></div>
                            <h6 className='ms-2 mt-1 pointTextColor'>Reinforced with double wood dowels, glue, screw - nails</h6>
                        </div>
                        <h6 className='ms-3 ps-1 pointTextColor'>corner blocks and machine nails.</h6>
                        <div className='d-flex align-items-center'>
                            <div className='greenPoint'></div><h6 className='ms-2 mt-1 pointTextColor'>Arms, backs and seats are structurally reinforced.</h6>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <Button className='uniqueButton'>Add To Cart</Button>
                            <span className='ms-3'>
                                <h6 className='m-0 italianSofa'>B&amp;B Italian Sofa </h6>
                                <h6 className='m-0 italianSofaPrice'>$<span>32.00</span></h6>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default UniqueFeatureBanner;