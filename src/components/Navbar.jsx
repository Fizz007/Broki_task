import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import '../Style/Style.css';
import '../Style/Responsive.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate()

    function handleSignout(){
        localStorage.removeItem("user")
        toast.success("You have been Logged out");
        navigate('/')
    }
    return (
        <div className='navbar'>
            <div className="headerr" >
                <div className="logo-container">
                    <h2>Broki</h2>
                </div>
                <div className="logo-nav">
                    <div className={click ? "nav-options active" : "nav-options"}>
                        <div className="option-three">
                            <ul>
                                <li>Home</li>
                                <li>Listings</li>
                                <li>Online ordering management</li>
                                <li>Inquiry form</li>
                                <li>Blog</li>
                                <li>Contact Us</li>                                
                            </ul>
                        </div>
                            <button className='custom-btn' onClick={handleSignout}>Sign Out</button>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div style={{ marginTop: '8px' }} onClick={handleClick}>
                        {click ? (
                            <RxCross2 />
                        ) : (
                            <HiOutlineBars3BottomRight />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar