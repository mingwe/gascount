import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'
import storeInitialState from './reducers/initialstate';

import thunk from 'redux-thunk';


const store = createStore(allReducers, {mileage: storeInitialState(),}, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
