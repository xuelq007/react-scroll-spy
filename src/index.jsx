import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './index.less';
import App from './App';

function renderApp() {
    let app = <App />;
    render(
        app,
        document.querySelector('#root')
    );
}

renderApp(App);
