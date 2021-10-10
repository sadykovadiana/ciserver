import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app';

const Container = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Container />, document.getElementById('root'));
