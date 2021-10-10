import React from 'react';
import Button from '../../components/button';
import './build-history.css';
import BuildBlock from '../build-block';
import { data } from './mockdata';
import { SIZES as BUTTON_SIZES, VIEWS as BUTTON_VIEWS, PINS as BUTTON_PINS } from '../../components/button/constants';

const listItems = data.map((build) => (
    <BuildBlock
        key={build.buildNum + build.hash}
        status={build.status}
        buildNum={build.buildNum}
        title={build.title}
        branch={build.branch}
        hash={build.hash}
        author={build.author}
        date={build.date}
        duration={build.duration}
    />
));

const BuildHistory = () => {
    return (
        <div className="Build-history">
            {listItems}
            <Button
                text="Show more"
                size={BUTTON_SIZES.S}
                view={BUTTON_VIEWS.DEFAULT}
                pin={BUTTON_PINS.ROUND_ROUND}
                className="Button_size_mobile-m"
            />
        </div>
    );
};

export default BuildHistory;
