import React from 'react';
import './header.css';

const Header = ({ title, children, className }) => {
    return (
        <header className={className}>
            <h1>{title}</h1>
            {children}
        </header>
    );
};

export default Header;
