import React from 'react';
import './Apartments.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import apartmentData from '../../../fakeData/apartmentData';

const Apartments = () => {
    const datas = apartmentData;
    return (
        <Container>
            <h5 className="greenText text-center mt-5">House Rent</h5>
            <h1 className="darkGreenText text-center">Discover the largest Rent <br /> available today</h1>
            <Row className="mt-5">
                {
                    datas.map(data =>
                        <Col key={data.id} sm={4}>
                            <Card className="bg-white mb-4 card-style">
                                <Card.Img src={data.img} alt="image" />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.place}</Card.Text>
                                    <Row>
                                        <Col>
                                            <Card.Text>{data.ablility[0]}</Card.Text>
                                        </Col>
                                        <Col className="text-right">
                                            <Card.Text>{data.ablility[1]}</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>${data.price}</h5>
                                        </Col>
                                        <Col className="text-right">
                                            <button className="btn greenBtn">View Details</button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Apartments;