import React from 'react';
import logo from './logo.svg';
import './App.scss';
function App() {
  return (
    <section>
      <div className="header">
        <div className="background">
          <img className="headerimg" src="images/header.svg"></img>
          <div className="shipping">
            <h1 className="shipping">Free Shipping over $2000</h1>
            <div className="percent">
              <span className="discount">30% OFF WINDOWS </span>
            </div>
            <div className="preloader">
              <div className="prelaoderImage"></div>
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
