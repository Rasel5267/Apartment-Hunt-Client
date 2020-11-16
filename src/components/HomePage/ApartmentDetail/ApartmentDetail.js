import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import './ApartmentDetail.css';
import apartmentImg from '../../../images/apartment2.png';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';

const images = [apartmentImg, apartmentImg, apartmentImg, apartmentImg];

const ApartmentDetail = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [apartmentData, setApartmentData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/apartments')
            .then(res => res.json())
            .then(data => setApartmentData(data))
    }, []);

    const { id } = useParams();
    const apartment = apartmentData.find(data => data._id === id) || {};
    console.log(apartment);
    console.log(id);

    const [bookingInfo, setBookingInfo] = useState({});
    const handleBlur = (e) => {
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[e.target.name] = e.target.value;
        newBookingInfo.status = 'Pending';
        setBookingInfo(newBookingInfo);
    };
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('name', bookingInfo.name || loggedInUser.name);
        formData.append('number', bookingInfo.number);
        formData.append('email', bookingInfo.email || loggedInUser.email);
        formData.append('message', bookingInfo.message);
        formData.append('house', apartment.title);
        formData.append('price', apartment.price);
        formData.append('status', bookingInfo.status);

        fetch('http://localhost:5500/addBooking', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="apartmentWrapper text-center">
                <div className="apartmentInner pt-5 ">
                    <h1 className="pt-5 mt-3">Apartment</h1>
                </div>
                <div className="apartmentOverlay"></div>
            </div>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        {/* <img src={`data:image/png;base64,${apartment.image.img}`} alt="" className="img-fluid" /> */}
                        <div className="pt-3">
                            <Row>
                                {
                                    images.map(image =>
                                        <Col sm={3}>
                                            <img src={image} alt="" style={{ height: "90px" }} />
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                        <Row className="mt-3">
                            <Col>
                                <h3 className="darkGreenText">{apartment.title}</h3>
                            </Col>
                            <Col>
                                <h3 className="greenText text-right">${apartment.price}</h3>
                            </Col>
                        </Row>
                        <p className="text-secondary">3000 sq-ft., {apartment.bedroom} Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        <h3 className="darkGreenText">Price Detail -</h3>
                        <p className="text-secondary">
                            Rent/Month: $550 (negotiable) <br />
                            Service Charge : 8,000/= Tk per month, subject to change <br />
                            Security Deposit : 3 month’s rent <br />
                            Flat Release Policy : 3 months earlier notice required
                        </p>
                        <h3 className="darkGreenText">Property Detail -</h3>
                        <p className="text-secondary">Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                        <p className="text-secondary">Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                        <p className="text-secondary">Flat Size : 3000 Sq Feet.</p>
                        <p className="text-secondary">Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                        <p className="text-secondary">Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                        <p className="text-secondary">Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera.</p>
                    </Col>
                    <Col md={4}>
                        <div className="p-2 px-2">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} value={loggedInUser.name} type="name" name="name" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} type="number" name="number" placeholder="Phone No." required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} value={loggedInUser.email} type="email" name="email" placeholder="Email Address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} as="textarea" name="message" rows={3} type="text" placeholder="Message" required />
                                </Form.Group>
                                <button  type="submit" className="btn greenBtn">Submit</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ApartmentDetail;