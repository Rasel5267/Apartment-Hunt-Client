import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import './ApartmentDetail.css';
import apartmentImg from '../../../images/apartment2.png';

const data = {
    title: "Family Apartment Three",
    place: "Nasirabad H/S, Chattogram",
    img: apartmentImg,
    ablility: ["3 Bedroom", "3 Bathroom"],
    price: 356,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
    priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
    propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
};
const images = [apartmentImg,apartmentImg,apartmentImg,apartmentImg];

const ApartmentDetail = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="apartmentWrapper text-center">
                <div className="apartmentInner pt-5 ">
                    <h1 className="pt-5 mt-3">Apartment</h1>
                </div>
            </div>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <img src={data.img} alt="" className="img-fluid" />
                        <div className="pt-3">
                            <Row>
                                {
                                    images.map(image => 
                                        <Col sm={3}>
                                            <img src={image} alt="" style={{height:"90px"}} />
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                        <Row className="mt-3">
                            <Col>
                                <h3 className="darkGreenText">{data.title}</h3>
                            </Col>
                            <Col>
                                <h3 className="greenText text-right">${data.price}</h3>
                            </Col>
                        </Row>
                        <p className="text-secondary">{data.details}</p>
                        <h3 className="darkGreenText">Price Detail -</h3>
                        <p className="text-secondary">{data.priceDetail}</p>
                        <h3 className="darkGreenText">Property Detail -</h3>
                        <p className="text-secondary">{data.propertyDetail}</p>
                    </Col>
                    <Col md={4}>
                        <div className="p-2 px-2">
                            <Form>
                                <Form.Group>
                                    <Form.Control type="name" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="number" placeholder="Phone No." required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email Address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="textarea" rows={3} type="text" placeholder="Message" required />
                                </Form.Group>
                                <button className="btn greenBtn" type="submit">Submit</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ApartmentDetail;