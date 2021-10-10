import React, { useState, useCallback } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import Main from '../layouts/main';
import Button from '../components/button';
import MainSettings from '../layouts/main-settings';
import { ReactComponent as IconSet } from '../images/icons/settings.svg';
import { ReactComponent as IconBuild } from '../images/icons/play.svg';
import { VIEWS as BUTTON_VIEWS, PINS as BUTTON_PINS } from '../components/button/constants';
import BuildHistory from '../layouts/build-history';
import BuildPopup from '../layouts/build-popup';
import { Link as RounterLink } from 'react-router-dom';

const MainPage = ({ settings }) => {
    const [showModal, setShowModal] = useState(false);

    const title = settings ? 'philip1967/my-awesome-repo' : 'School CI server';
    const className = settings ? 'Header Header_view_primary' : 'Header Header_view_secondary';

    return (
        <>
            <Header title={title} className={className}>
                {!settings ? (
                    <RounterLink to="/settings" className="Button_Router">
                        <Button text="Settings" iconLeft={<IconSet />} view={BUTTON_VIEWS.DEFAULT} pin={BUTTON_PINS.ROUND_ROUND} />
                    </RounterLink>
                ) : (
                    <>
                        <Button
                            text="Run build"
                            iconLeft={<IconBuild />}
                            view={BUTTON_VIEWS.DEFAULT}
                            pin={BUTTON_PINS.ROUND_ROUND}
                            onClick={() => setShowModal(!showModal)}
                        />
                        <RounterLink to="/settings" className="Button_Router">
                            <Button icon={<IconSet />} view={BUTTON_VIEWS.DEFAULT} pin={BUTTON_PINS.ROUND_ROUND} />
                        </RounterLink>
                    </>
                )}
            </Header>
            {!settings ? (
                <Main className=" Main Main_view_center">
                    <MainSettings />
                </Main>
            ) : (
                <Main className="Main Main_view_start">
                    <BuildHistory />
                </Main>
            )}
            {showModal && <BuildPopup onButtonClick={() => setShowModal(!showModal)} />}

            <Footer />
        </>
    );
};

export default MainPage;
