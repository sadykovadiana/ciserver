import React from 'react';
import './link.css';

const Link = ({ url, text }) => {
    return (
        <a className="Link" href={url}>
            {text}
        </a>
    );
};

export default Link;
