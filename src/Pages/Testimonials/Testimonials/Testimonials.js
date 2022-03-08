import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonal/Testimonial';

const Testimonials = () => {
    return (
        <div>
            <Container>
                <h1 className='div-title'>Happy Client Says</h1>
                <Row xs={12} md={4}>
                    <Col>
                        <Testimonial></Testimonial>
                    </Col>
                </Row >
            </Container >
        </div >
    );
};

export default Testimonials;