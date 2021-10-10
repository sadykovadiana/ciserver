import React from 'react';
import classNames from 'classnames/bind';
import styles from './icon-with-label.css';
import { VIEWS } from './constants';

const cx = classNames.bind(styles);

const IconWithLabel = ({ iconName, label, scndLabel, className }) => {
    const classNames = cx(className, 'IconWithLabel', {
        'Icon-with-label_view_user': iconName === VIEWS.USER,
        'Icon-with-label_view_calendar': iconName === VIEWS.CALENDAR,
        'Icon-with-label_view_timer': iconName === VIEWS.TIMER,
        'Icon-with-label_view_branch': iconName === VIEWS.BRANCH,
    });

    return (
        <>
            <span className={classNames}>
                {label}
                {scndLabel && <span className="Icon-with-label_view_secondary">{scndLabel}</span>}
            </span>
        </>
    );
};

export default IconWithLabel;
