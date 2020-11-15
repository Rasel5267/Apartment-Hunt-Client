import React from 'react';
import Apartments from '../Apartments/Apartments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Apartments></Apartments>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;