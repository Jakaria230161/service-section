import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About';
import Banner from './Banner';
import Service from './Service';
import Work from './Work';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Work></Work>
            <p className='text-4xl text-center font-bold text-orange-600 mt-10'>About Us</p>
            <About></About>
        </div>
    );
};

export default Home;