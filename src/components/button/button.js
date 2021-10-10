import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.css';
import { SIZES, VIEWS, PINS } from './constants';

const cx = classNames.bind(styles);

const Button = ({ children, text, iconLeft, icon, disabled = false, onClick, size, view, pin, className }) => {
    const classNames = cx(className, 'Button', {
        'Button_pin_circle-circle': pin === PINS.CIRCLE_CIRCLE,
        'Button_pin_round-round': pin === PINS.ROUND_ROUND,
        Button_size_s: size === SIZES.S,
        Button_size_m: size === SIZES.M,
        Button_view_action: view === VIEWS.ACTION,
        Button_view_default: view === VIEWS.DEFAULT,
        Button_view_pseudo: view === VIEWS.PSEUDO,
        Button_view_icon: iconLeft || icon,
    });

    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>
            {iconLeft && <span className="Button-Icon Button-Icon_side_left">{iconLeft}</span>}
            {icon && <span className="Button-Icon">{icon}</span>}
            {text && <span className="Button-Text">{text}</span>}
            {children}
        </button>
    );
};

export default Button;
