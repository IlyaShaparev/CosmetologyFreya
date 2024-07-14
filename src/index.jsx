import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store"

const basename = process.env.NODE_ENV === 'production' ? '/CosmetologyFreya/' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter basename={basename}>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

