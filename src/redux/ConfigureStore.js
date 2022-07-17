import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DataReducer from './reducers/DataReducer';
import SecureLS from 'secure-ls';

const secureLs = new SecureLS();

export const getStateFromStorage = () => {
    const datahubStore = secureLs.get('datahub-app-store');

    if(datahubStore){
        return datahubStore;
    }
    return getDefaultState();
}

const updateStateInStorage = newState => {
    secureLs.set('datahub-app-store', newState);
}

export const getDefaultState = () => {
    let defaultState = {
        loggedIn: false,
        userCredentials:{
            token: undefined
        },
        activeCollection: "",
        collections: [],
        tableHeaders: [],
        tableBody: [],
        editModeRowId: ""
    }

    return defaultState;
};

export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const stateFromStorage = getStateFromStorage();
    const store = createStore(DataReducer, stateFromStorage, composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        updateStateInStorage(store.getState());
    });

    return store;
};

