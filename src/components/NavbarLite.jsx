import React, { useState } from 'react';
import './NavbarLite.css';

const NavbarLite = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <nav className="navbar-lite">
            <div className="menu-box-lite">
                <button className="menu-button-lite" onClick={toggleOverlay}>
                    <div className="line-lite line1-lite"></div>
                    <div className="line-lite line2-lite"></div>
                    <div className="line-lite line3-lite"></div>
                </button>
            </div>

            {isOverlayVisible && (
                <div className="overlay-lite">
                    <button className="close-button-lite" onClick={toggleOverlay}>X</button>
                    <div className="overlay-content-lite">
                        <a href="/trips">Trips</a>
                        <a href="/albums">Albums</a>
                        <a href="/cinema">Cinema</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarLite;