import React from "react";
import { BsSearch, BsFillArrowUpCircleFill } from "react-icons/bs";
import { PiScalesDuotone } from "react-icons/pi";
import { FaRegFile, FaUserAlt, FaCameraRetro } from "react-icons/fa";
import "../Style/Style.css";
import "../Style/Responsive.css";

const Section = () => {
  return (
    <div>
      <div className="third">
        <div className="center">
          <h2>Our services</h2>
          <p style={{width:'80vw'}}>
            We offer the full spectrum of services to help individuals choose
            the right food business at the right price. Everything from
            connecting sellers to the final transaction with the landlord in a
            transparent and professional manner.
          </p>
        </div>

        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <BsSearch size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <FaRegFile size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <FaUserAlt size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <FaCameraRetro size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <PiScalesDuotone size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="bannericon">
            <div className="set">
              <BsFillArrowUpCircleFill size={50} />
            </div>
          </div>
          <div className="bannertext">
            <h3>Finalcial consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eveniet iure corrupti minus laboriosam tempora laborum modi
              tempore tenetur nulla.
            </p>
          </div>
        </div>
      </div>

      <div className="help">
        <div className="help_detail">
          <h1>Need Help? Talk to our experts.</h1>
          <button className="btn1">Contact Us</button>
          <button className="btn2">FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
