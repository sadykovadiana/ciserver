import React from 'react';
import './modal.css';

const Modal = ({ children }) => {
  return <div className="Modal">
    {children}
  </div>
};

export default Modal;
