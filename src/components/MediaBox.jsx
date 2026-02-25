import React from 'react';
import './MediaBox.css';

const MediaBox = ({ label, image, href }) => {
    return (
        <a href={href} style={{ textDecoration: 'none', display: 'block', background: 'none' }}>
            <div className="media-box">
                <img className="media-box-image" src={image} alt={label} />
                <span className="media-box-label">{label}</span>
            </div>
        </a>
    );
};

export default MediaBox;