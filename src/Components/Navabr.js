import { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
    const [menuOpen, setMenuopen] = useState();
    const [menuClose, setMenuClose] = useState();
    return (
            <nav>
                <div>
                    <span>bloggings</span>
                </div>
                <div className="navigation-div hideOnMobile">
                    <ul>
                        <li>home</li>
                        <li>contact</li>
                        <li>about</li>
                        <li>blogs</li>
                        <li>register</li>
                    </ul>
                </div>
                <div className="side-navbar">
                    <button type='button' className='close-btn'>Close</button>
                    <ul>
                        <li>home</li>
                        <li>contact</li>
                        <li>about</li>
                        <li>blogs</li>
                        <li>register</li>
                    </ul>
                </div>
                <button type="button" className="menu-btn hidden">menu</button>
            </nav>
    );
}

export default Navbar;