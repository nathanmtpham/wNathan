import React from 'react';
import './Zones.css';

const Zones = ({ title, date, isReversed, image }) => {
    return (
        <div className="Zone" style={{ '--zone-image': `url(${image})` }}>
            {isReversed ? (
                <>
                    <div className="date-box">
                        {date}
                    </div>
                    <div className="zone-box">
                        {title}
                    </div>
                </>
            ) : (
                <>
                    <div className="zone-box">
                        {title}
                    </div>
                    <div className="date-box">
                        {date}
                    </div>
                </>
            )}
        </div>
    );
};

export default Zones;