import React from 'react';
import styles from './build-block.css';
import classNames from 'classnames/bind';
import { VIEWS } from './constants';
import { VIEWS as ICONS } from '../../components/icon-with-label/constants';
import IconWithLabel from '../../components/icon-with-label';

const cx = classNames.bind(styles);

const BuildBlock = ({ status, buildNum, title, branch, hash, author, date, duration, className }) => {
    const classNames = cx(className, 'Commit', {
        Commit_view_success: status === VIEWS.COMMIT_SUCCESS,
        Commit_view_error: status === VIEWS.COMMIT_ERROR,
        Commit_view_load: status === VIEWS.COMMIT_LOAD,
    });

    return (
        <div className={classNames}>
            <div className="Build-block_view-start">
                <p className="Commit_title">
                    <span>{buildNum}</span>
                    {title}
                </p>
                <IconWithLabel iconName={ICONS.BRANCH} label={branch} scndLabel={hash} className />
                <IconWithLabel iconName={ICONS.USER} label={author} className />
            </div>
            <div className="Build-block_view-end">
                <IconWithLabel iconName={ICONS.CALENDAR} label={date} className />
                <IconWithLabel iconName={ICONS.TIMER} label={duration} className />
            </div>
        </div>
    );
};

export default BuildBlock;
