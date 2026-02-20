import React from 'react';
import './MediaBox.css';

const MediaBox = ({ label, image }) => {
    return (
        <div className="media-box">
            <img className="media-box-image" src={image} alt={label} />
            <span className="media-box-label">{label}</span>
        </div>
    );
};

export default MediaBox;