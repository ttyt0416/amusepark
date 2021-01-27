import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from'redux-persist/lib/storage';

import amuseSideReducer from './amuseside/amuseside.reducer';
import communiSideReducer from './communiside/communiside.reducer';
import infoSideReducer from './infoside/infoside.reducer';
import socialSideReducer from './socialside/socialside.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        ''
    ]

}

const rootReducer = combineReducers ({
    amuse: amuseSideReducer,
    communi: communiSideReducer,
    info: infoSideReducer,
    social: socialSideReducer
});

export default persistReducer(persistConfig, rootReducer);