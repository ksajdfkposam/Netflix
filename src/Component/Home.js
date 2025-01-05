import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <div className="home-banner ">
        <div className="our-story row">
            
          <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
          <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
          <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Email Address" />
             <Link to="/login"  className="text-white-50 fw-bold"><button className="input-group-button btn-danger text-white">Get Started</button>
             </Link>
             </div>
          
        </div>
        <div className="shadow"></div>
       
      </div>
      </div>
    );
};

export default Home;