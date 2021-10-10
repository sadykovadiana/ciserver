import React from 'react';
import MainPage from './pages/main-page';
import SettingsFormPage from './pages/settings-form-page';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Route path="/" render={() => <MainPage />} exact={true} />
            <Route path="/settings" render={() => <SettingsFormPage />} />
        </Router>
    );
};

export default App;
