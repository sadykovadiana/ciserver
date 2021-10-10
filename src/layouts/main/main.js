import React from 'react';
import './main.css';

const Main = ({ children, className }) => {
    return <main className={className}>{children}</main>;
};

export default Main;
