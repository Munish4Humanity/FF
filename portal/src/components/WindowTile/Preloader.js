import React from 'react';

export function Preloader() {
  return (
    <>
      <main class="animate__animated_delay-10s">
        <section>
          <div className="header">
            <div className="background">
              <img
                alt="header"
                className="headerimg"
                src="images/header.svg"
              ></img>
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
      </main>
    </>
  );
}
