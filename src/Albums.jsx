import React, { useRef, useEffect } from 'react';
import NavbarLite from './components/NavbarLite.jsx';
import MediaBox from './components/MediaBox.jsx';
import './Albums.css';

const Albums = () => {
    const mainContentRef = useRef(null);

    useEffect(() => {
        const el = mainContentRef.current;
        const handleWheel = (e) => {
            e.preventDefault();
            el.scrollLeft += e.deltaY * 2;
        };
        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="page-container">
            <div className="content">
                <div className="sideBar">
                    <div className="sideTop">
                        <NavbarLite />
                    </div>
                    <div className="sideMiddle">
                        <a href="/" className="sideName">w/Nathan</a>
                    </div>
                    <div className="sideBottom">
                        <p className="sideCat">Albums</p>
                    </div>
                </div>

                <div className="mainContent" ref={mainContentRef}>
                    <MediaBox label="Kicking My Feet" image="src\assets\albumCovers\kmfTitle.jpg" />
                    <MediaBox label="The Art of Loving" image="src\assets\albumCovers\taolTitle.jpg" />
                    <MediaBox label="Formula of Love" image="src\assets\albumCovers\formulaTitle.jpg" />
                    <MediaBox label="Blonde" image="src\assets\albumCovers\blondeTitle.jpg" />
                    <MediaBox label="2014 Forest Hills Drive" image="src\assets\albumCovers\2014driveTitle.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Albums;