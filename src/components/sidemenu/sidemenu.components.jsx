import React from 'react';
import './sidemenu.style.scss';

import actionCreators from '../../redux/store';

import { useParams } from 'react-router-dom';

import MenuItem from '../menuitem/menuitem.components';

const sideMenu = ({ state, callAmuse, callCommuni, callInfo, callSocial }) => {
    const url = useParams();
    switch (url) {
        case 'amuse': callAmuse;
        case 'communi': callCommuni;
        case 'info': callInfo;
        case 'social': callSocial;
        default: state;
    };

    return (
        state.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))
    )
    
}

const mapStateToProps = () => {
    return { state: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        callAmuse: dispatch(actionCreators.callAmuse),
        callCommuni: dispatch(actionCreators.callCommuni),
        callInfo: dispatch(actionCreators.callInfo),
        callSocial: dispatch(actionCreators.callSocial)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu);