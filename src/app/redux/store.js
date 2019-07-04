import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {fromJS} from 'immutable';

export const initializeStore = (initialState = {}) => {
    if (initialState && initialState.globalState) {
        initialState.globalState = fromJS(initialState.globalState);
    }

    const defaultMiddleware = applyMiddleware();
    let middleware = undefined;
    if (process.env.NODE_ENV === 'production') {
        middleware = defaultMiddleware;
    } else {
        middleware = composeWithDevTools(defaultMiddleware);
    }

    return createStore(
        reducers,
        initialState,
        middleware,
    );
};

