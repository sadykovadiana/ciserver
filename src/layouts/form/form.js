import React from 'react';
import './form.css';

const Form = ({ children }) => {
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
