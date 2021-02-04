import { combineReducers } from 'redux';

import amusemenuReducer from './amusemenu/amusemenu.reducer';
import communimenuReducer from './communimenu/communimenu.reducer';
import infomenuReducer from './infomenu/infomenu.reducer';
import socialmenuReducer from './socialmenu/socialmenu.reducer';

export default combineReducers({
    amuse: amusemenuReducer,
    communi: communimenuReducer,
    info: infomenuReducer,
    social: socialmenuReducer
});