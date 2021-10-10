import React, { useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import Form from '../layouts/form';
import Input from '../components/input';
import Button from '../components/button';
import Main from '../layouts/main';
import { SIZES as BUTTON_SIZES, VIEWS as BUTTON_VIEWS, PINS as BUTTON_PINS } from '../components/button/constants';
import { SIZES as INPUT_SIZES, LABELFORMATS } from '../components/input/constants';
import { Link as RouterLink } from 'react-router-dom';
import Modal from '../components/modal';
import { useHistory } from 'react-router-dom';

const initialState = { repo: '', command: '', branch: '', interval: '', error: '' };

function reducer(state, action) {
    switch (action.type) {
        case 'repo':
            return { ...state, repo: action.payload };
        case 'command':
            return { ...state, command: action.payload };
        case 'branch':
            return { ...state, branch: action.payload };
        case 'interval':
            return { ...state, interval: action.payload };
        case 'error':
            return { ...state, error: action.payload };
        default:
            throw new Error();
    }
}

const SettingsFormPage = () => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const actionDispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
        const { value, name } = e.target;
        dispatch({ type: name, payload: value });
    };

    const handleReset = (name) => dispatch({ type: name, payload: '' });

    const saveBtnDisable = !state.repo || !state.command;

    const save = () => {
        getPromise(Math.random())
            .then((res) => {
                console.log('GET_GIT_HISTORY_SUCCEESS');
                actionDispatch({ type: 'SAVE_SETTINGS', payload: state });
                handleOnClick();
            })
            .catch((err) => {
                console.log('GET_GIT_HISTORY_ERROR');
                dispatch({ type: 'error', payload: 'An error occured during cloning git repository' });
            });
    };

    return (
        <>
            <Header title="School CI server" className="Header Header_view_secondary Header_view-no-buttons" />
            <Main className="Main Main_view_start">
                <Form>
                    <h4>Settings</h4>
                    <p>Configure repository connection and synchronization settings.</p>
                    <Input
                        name="repo"
                        label="GitHub repository"
                        placeholder="user-name/repo-name"
                        size={INPUT_SIZES.L}
                        labelformat={LABELFORMATS.UNDER}
                        required
                        value={state.repo}
                        onChange={handleChange}
                        onReset={handleReset}
                    />

                    <Input
                        name="command"
                        label="Build command"
                        placeholder="npm ci && npm run build"
                        size={INPUT_SIZES.L}
                        labelformat={LABELFORMATS.UNDER}
                        required
                        value={state.command}
                        onChange={handleChange}
                        onReset={handleReset}
                    />

                    <Input
                        name="branch"
                        label="Main branch"
                        placeholder="master |"
                        size={INPUT_SIZES.L}
                        labelformat={LABELFORMATS.UNDER}
                        value={state.branch}
                        onChange={handleChange}
                        onReset={handleReset}
                    />

                    <Input
                        name="interval"
                        label="Synchronize every"
                        type="number"
                        scndLabel="minutes"
                        size={INPUT_SIZES.XS}
                        labelformat={LABELFORMATS.FOLLOW}
                        clearable={false}
                        value={state.interval}
                        onChange={handleChange}
                        onReset={handleReset}
                    />

                    {saveBtnDisable ? (
                        <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.ACTION} pin={BUTTON_PINS.ROUND_ROUND} disabled={saveBtnDisable}>
                            Save
                        </Button>
                    ) : (
                        <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.ACTION} pin={BUTTON_PINS.ROUND_ROUND} onClick={save}>
                            Save
                        </Button>
                    )}
                    <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.DEFAULT} pin={BUTTON_PINS.ROUND_ROUND}>
                        <RouterLink to="/">Cancel</RouterLink>
                    </Button>
                </Form>
            </Main>

            {state.error && (
                <Modal>
                    <div className="Modal_size-s">
                        <h4>An error occured during cloning git repository</h4>
                        <Button size={BUTTON_SIZES.M} view={BUTTON_VIEWS.DEFAULT} pin={BUTTON_PINS.ROUND_ROUND}>
                            <RouterLink to="/">OK</RouterLink>
                        </Button>
                    </div>
                </Modal>
            )}
            <Footer />
        </>
    );
};

function getPromise(random) {
    return new Promise(function (resolve, reject) {
        function decideStatus() {
            random > 0.5 ? resolve('fulfilled') : reject('rejected');
        }
        setTimeout(decideStatus, random * 3000);
    });
}

export default SettingsFormPage;
