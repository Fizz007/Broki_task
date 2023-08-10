import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="cont">
                <div className="row-one">
                    <div className="footer-col">
                        <h4>Fast Search</h4>
                        <ul>
                            <li><a href="#">Cloud Kitchen on Rent</a></li>
                            <li><a href="#">Cloud Kitchen in New Delhi</a></li>
                            <li><a href="#">Cloud Kitchen in Noida</a></li>
                            <li><a href="#">Cloud Kitchen in Gaziabad</a></li>
                            <li><a href="#">Cloud Kitchen in Greater Noida</a></li>
                            <li><a href="#">Restaurent for sale in Noida</a></li>
                            <li><a href="#">Restaurent for sale in Gurugram</a></li>
                            <li><a href="#">Restaurent for sale in Faridabad</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer