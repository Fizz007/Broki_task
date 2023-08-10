import React from 'react'

const Cardpanel = ({item}) => {
  return (
    <div>
       <div className="card-container">
          <a href="/" className="hero-image-container">
            <img
              className="hero-image"
              src={item.img}
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
                  <p>{item.rent}</p>
                  <p>{item.sales}</p>
                  <p>{item.area}</p>
                </div>
            </div>
          </main>
          <div className="card-bttn">
            <button className="talk">Talk to us</button>
            <button className="share">Share</button>
          </div>
        </div>
    </div>
  )
}

export default Cardpanel
