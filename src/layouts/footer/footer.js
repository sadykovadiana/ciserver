import React from 'react';
import Link from '../../components/link';
import './footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <Link url="#" text="Support" />
            <Link url="#" text="Learning" />
            <Link url="#" text="Русская версия" />
            <span>&copy; 2020 Your Name</span>
        </footer>
    );
};

export default Footer;
