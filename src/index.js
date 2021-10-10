import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/main-page';
import SettingsFormPage from './pages/settings-form-page';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    const [settings, setSettings] = useState(false);
    const saveSettings = () => setSettings(true);

    return (
        <Router>
            <Route path="/" render={() => <MainPage settings={settings} />} exact={true} />
            <Route path="/settings" render={() => <SettingsFormPage onSave={saveSettings} />} />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
