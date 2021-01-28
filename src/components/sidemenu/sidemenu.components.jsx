import React from 'react';
import './sidemenu.style.scss';

import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAmuseSideSections } from '../../redux/amuseside/amuseside.selectors';
import { selectCommuniSideSections } from '../../redux/communiside/communiside.selectors';
import { selectInfoSideSections } from '../../redux/infoside/infoside.selectors';
import { selectSocialSideSections } from '../../redux/socialside/socialside.selectors';

import MenuItem from '../menuitem/menuitem.components';


const SideMenu = ({ amuse, communi, info, social, match }) => {

    const changer = _.defaultTo(match.params, '');
    const sideChanger = (changer) => {
        switch(changer){
            case 'amuse': return (
                amuse.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            )
            case 'communi': return (
                communi.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            )
            case 'info': return (
                info.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            )
            case 'social': return (
                social.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            )
            default: return null
        }
    }

    return (
        <div className='sidemenu'>
            {sideChanger(changer)}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    amuse: selectAmuseSideSections,
    communi: selectCommuniSideSections,
    info: selectInfoSideSections,
    social: selectSocialSideSections
})

export default connect(mapStateToProps)(SideMenu);