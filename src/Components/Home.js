import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/2314950.jpg'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl text-white font-bold">Welcome to i-Secure</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id</p>
                        <Link to='/login' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>        </div>
    );
};

export default Home;