import React from "react";

const Cardpanel = ({ item }) => {
  const { id, img, rent, sales, area } = item;
  return (
    <div key={id}>
      <div className="card-container">
        <a href="/" className="hero-image-container">
          <img className="hero-image" src={img} alt="kitchen pic" />
        </a>
        <main className="main-content">
          <p>Base kitchen space available for lease in Dwarks sector 3</p>

          <div className="rent">        

            <div className="flex_detail">
              <p>Monthly Rent</p>
              <h5>{rent}</h5>
            </div>
            <div className="flex_detail">
              <p>Monthly Sales</p>
              <h5>{sales}</h5>
            </div>
            <div className="flex_detail">
              <p>Area</p>
              <h5>{area}</h5>
            </div>
          </div>
        </main>
        <div className="card-bttn">
          <button className="talk">Talk to us</button>
          <button className="share">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Cardpanel;
