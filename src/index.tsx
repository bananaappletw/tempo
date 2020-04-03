import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Box } from '@material-ui/core';
import AppContext from './contexts'

const context = {
    bpm: 120
}
ReactDOM.render(
    <AppContext.Provider value={context}>
        <BrowserRouter>
            <CssBaseline />
            <App />
        </BrowserRouter>
    </AppContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
