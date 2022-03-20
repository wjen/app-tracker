import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPageWrapper';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            perferendis saepe quaerat, eveniet beatae error sint vitae officia
            minus laboriosam aliquam. Eius optio reprehenderit corrupti, est
            minima voluptatibus maiores tempora?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="app tracker" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
