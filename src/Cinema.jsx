import React, { useRef, useEffect } from 'react';
import NavbarLite from './components/NavbarLite.jsx';
import MediaBox from './components/MediaBox.jsx';
import './Cinema.css';

const Cinema = () => {
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
                        <p className="sideCat">Cinema</p>
                    </div>
                </div>

                <div className="mainContent" ref={mainContentRef}>
                    <MediaBox label="Severance" image="src\assets\cinemaCovers\sevTitle.png" />
                    <MediaBox label="Ted Lasso" image="src\assets\cinemaCovers\lassoTitle.png" />
                    <MediaBox label="La La Land" image="src\assets\cinemaCovers\lllTitle.jpeg" />
                    <MediaBox label="Interstellar" image="src\assets\cinemaCovers\interTitle.jpg" />
                    <MediaBox label="Hometown Cha Cha Cha" image="src\assets\cinemaCovers\hometownTitle.png" />
                    <MediaBox label="Your Lie in April" image="src\assets\cinemaCovers\yliaTitle.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Cinema;