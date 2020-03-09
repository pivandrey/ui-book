import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UIBook from './uibook/UIBook';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <UIBook />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
