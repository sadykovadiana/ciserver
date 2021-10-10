import React from 'react';
import Button from '../../components/button';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link as RouterLink } from 'react-router-dom';

import { SIZES as BUTTON_SIZES, VIEWS as BUTTON_VIEWS, PINS as BUTTON_PINS } from '../../components/button/constants';

const MainSettings = () => {
    return (
        <>
            <div className="logo">
                <Logo />
            </div>
            <div className="Main__Text">Configure repository connection and synchronization settings</div>
            <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.ACTION} pin={BUTTON_PINS.ROUND_ROUND} className="Button_view_mobile-small">
                <RouterLink to="/settings">Open settings</RouterLink>
            </Button>
        </>
    );
};

export default MainSettings;
