import React, { useState } from 'react';
import './build-popup.css';
import Form from '../../layouts/form';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Link as RouterLink } from 'react-router-dom';
import { SIZES as BUTTON_SIZES, VIEWS as BUTTON_VIEWS, PINS as BUTTON_PINS } from '../../components/button/constants';
import { SIZES as INPUT_SIZES, LABELFORMATS } from '../../components/input/constants';

const BuildPopup = ({ onButtonClick }) => {
    const [hash, setHash] = useState('');
    return (
        <Modal>
            <Form>
                <h4>New build</h4>
                <Input
                    name="hash"
                    label="Enter the commit hash which you want to build."
                    placeholder="Commit hash"
                    size={INPUT_SIZES.M}
                    labelformat={LABELFORMATS.UNDER}
                    required
                    value={hash}
                    onChange={(e) => setHash(e.target.value)}
                    onReset={() => setHash('')}
                />

                <Button
                    size={BUTTON_SIZES.M}
                    view={BUTTON_VIEWS.ACTION}
                    pin={BUTTON_PINS.ROUND_ROUND}
                    disabled={!hash}
                    onClick={() => onButtonClick()}
                >
                    <RouterLink to="/" exact={true}>
                        Run build
                    </RouterLink>
                </Button>
                <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.PSEUDO} pin={BUTTON_PINS.ROUND_ROUND} onClick={() => onButtonClick()}>
                    <RouterLink to="/" exact={true}>
                        Cancel
                    </RouterLink>
                </Button>
            </Form>
        </Modal>
    );
};

export default BuildPopup;
