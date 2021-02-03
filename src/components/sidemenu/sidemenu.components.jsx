import React from 'react';
import './sidemenu.style.scss';

import actionCreators from '../../redux/store';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import MenuItem from '../menuitem/menuitem.components';

const SideMenu = ({ state, Amuse, Communi, Info, Social }) => {
    const url = useParams();
    switch (url) {
        case 'amuse': 
            return (
                Amuse.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id}{...otherSectionProps} />
                ))
            )
        case 'communi':
            return (
                Communi.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id}{...otherSectionProps} />
                ))
            )
        case 'info':
            return (
                Info.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id}{...otherSectionProps} />
                ))
            )
        case 'social':
            return (
                Social.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id}{...otherSectionProps} />
                ))
            ) 
        default: return(state);
    };
}

const mapStateToProps = (state) => {
    return { state: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        Amuse: () => dispatch(actionCreators.callAmuse),
        Communi: () => dispatch(actionCreators.callCommuni),
        Info: () => dispatch(actionCreators.callInfo),
        Social: () => dispatch(actionCreators.callSocial)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);