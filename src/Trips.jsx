import React, { useRef, useEffect } from 'react';
import NavbarLite from './components/NavbarLite.jsx';
import MediaBox from './components/MediaBox.jsx';
import './Trips.css';

const Trips = () => {
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
                        <p className="sideCat">Trips</p>
                    </div>
                </div>

                <div className="mainContent" ref={mainContentRef}>
                    <MediaBox label="Germany" image="src\assets\photography\germTitle.JPG" href="/trips/germany" />
                    <MediaBox label="Amsteram" image="src\assets\photography\AmstTitle.JPG" />
                    <MediaBox label="Rome" image="src\assets\photography\romeTitle.JPG" />
                    <MediaBox label="London" image="src\assets\photography\londonTitle.JPG" />
                    <MediaBox label="Hawaii" image="src\assets\photography\HawaiiTitle.JPEG" />
                    <MediaBox label="Castaway Cay" image="src\assets\photography\CayTitle.JPEG" />
                    <MediaBox label="New York" image="src\assets\photography\NYTitle.JPEG" />
                    <MediaBox label="Vegas" image="src\assets\vegaslights.JPG" />
                </div>
            </div>
        </div>
    );
};

export default Trips;