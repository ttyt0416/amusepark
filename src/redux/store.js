import { createStore } from 'redux';

import amuseMenu from './amusemenu/amusemenu';
import communiMenu from './communimenu/communimenu';
import infoMenu from './infomenu/infomenu';
import socialMenu from './socialmenu/socialmenu';

const AMUSE = 'AMUSE';
const COMMUNI = 'COMMUNI';
const INFO = 'INFO';
const SOCIAL = 'SOCIAL';

const callAmuse = () => {
    return {
        type: AMUSE
    };
};

const callCommuni= () => {
    return {
        type: COMMUNI
    };
};

const callInfo = () => {
    return {
        type: INFO
    };
};

const callSocial = () => {
    return {
        type: SOCIAL
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case AMUSE :
            return amuseMenu.sections;
        case COMMUNI :
            return communiMenu.sections;
        case INFO :
            return infoMenu.sections;
        case SOCIAL :
            return socialMenu.sections;
        default :
            return state;
    }
}

export const actionCreators = {
    callAmuse,
    callCommuni,
    callInfo,
    callSocial
};

const store = createStore(reducer);

export default store;