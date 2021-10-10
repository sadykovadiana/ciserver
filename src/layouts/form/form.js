import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './form.css';

const Form = ({ children }) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="Form">
            {children}
        </form>
    );
};

export default Form;
