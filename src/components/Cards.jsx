import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="text">
        <h5>Checkout</h5>
        <h1>Hot Deals</h1>
        <h4>Check out these amazing outlets listed with us</h4>
      </div>

      <div className="card_wrapper">
        <div className="card-container">
          <a href="/" className="hero-image-container">
            <img
              className="hero-image"
              src="https://media.architecturaldigest.com/photos/60a6b0c95c9708ff008d248e/master/w_1600%2Cc_limit/012520Kitchen2520Elevation252025.jpeg"
              alt="kitchen pic"
            />
          </a>
          <main className="main-content">
            <p>Base kitchen space available for lease in Dwarks sector 3</p>
            
            <div className="rent">
                <div className="flex-row">
                  <h5>Monthly Rent</h5>
                  <h5>Monthly Sales</h5>
                  <h5>Area</h5>
                </div>
                <div className="flex_detail">
                  <p>45000</p>
                  <p>700,000</p>
                  <p>800 Sq ft</p>
                </div>
            </div>
          </main>
          <div className="card-bttn">
            <button className="talk">Talk to us</button>
            <button className="share">Share</button>
          </div>
        </div>
        <div className="card-container">
          <a href="/" className="hero-image-container">
            <img
              className="hero-image"
              src="https://5.imimg.com/data5/XB/IX/PU/SELLER-77112425/013.jpg"
              alt="kitchen pic"
            />
          </a>
          <main className="main-content">
            <p>Base kitchen space available for lease in Dwarks sector 3</p>
            
            <div className="rent">
                <div className="flex-row">
                  <h5>Monthly Rent</h5>
                  <h5>Monthly Sales</h5>
                  <h5>Area</h5>
                </div>
                <div className="flex_detail">
                  <p>45000</p>
                  <p>700,000</p>
                  <p>800 Sq ft</p>
                </div>
            </div>
          </main>
          <div className="card-bttn">
            <button className="talk">Talk to us</button>
            <button className="share">Share</button>
          </div>
        </div>
        <div className="card-container">
        <a href="/" className="hero-image-container">
            <img
              className="hero-image"
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/325187585/UP/GE/MK/163274379/kitchen-interior-designing-services.jpg"
              alt="Kitchen pic"
            />
          </a>
          <main className="main-content">
            <p>Base kitchen space available for lease in Dwarks sector 3</p>
            
            <div className="rent">
                <div className="flex-row">
                  <h5>Monthly Rent</h5>
                  <h5>Monthly Sales</h5>
                  <h5>Area</h5>
                </div>
                <div className="flex_detail">
                  <p>45000</p>
                  <p>700,000</p>
                  <p>800 Sq ft</p>
                </div>
            </div>
          </main>
          <div className="card-bttn">
            <button className="talk">Talk to us</button>
            <button className="share">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
