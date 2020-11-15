import React from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="headerWrapper">
            <Container>
                <div className="headerInnner  pt-5 ">
                    <h1 className="mt-5 pt-5">FIND YOUR HOUSE RENT</h1>
                    <InputGroup size="lg" className="mb-3 mt-4">
                        <FormControl placeholder="Search..." />
                        <InputGroup.Append>
                            <button className="btn greenBtn" >Search</button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Container>
        </div>
    );
};

export default Header;