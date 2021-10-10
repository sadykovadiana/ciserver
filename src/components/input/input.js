import React from 'react';
import classNames from 'classnames/bind';
import styles from './input.css';
import { SIZES, LABELFORMATS } from './constants';

const cx = classNames.bind(styles);

const Input = ({
    name,
    label,
    scndLabel,
    placeholder,
    type = 'text',
    size,
    required = false,
    labelformat,
    clearable = 'true',
    className,
    onChange,
    onReset,
    value = '',
}) => {
    const classNames = cx(className, 'Input', {
        Input_size_xs: size === SIZES.XS,
        Input_size_s: size === SIZES.S,
        Input_size_m: size === SIZES.M,
        Input_size_l: size === SIZES.L,
        Input_label_under: labelformat === LABELFORMATS.UNDER,
        Input_label_follow: labelformat === LABELFORMATS.FOLLOW,
        Input_label_required: required,
    });

    return (
        <div className={classNames}>
            <label for={name}>{label}</label>
            <div className="Input__Input-view-clear">
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    required={required}
                    placeholder={placeholder}
                    onChange={onChange && ((e) => onChange(e))}
                />

                {clearable && <button name={name} value="" alt="clear" className="Reset-icon" onClick={onReset && ((e) => onReset(e.target.name))} />}
                {scndLabel && <label for={name}>{scndLabel}</label>}
            </div>
        </div>
    );
};

export default Input;
