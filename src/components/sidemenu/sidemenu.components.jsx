import React from 'react';
import './sidemenu.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAmusemenuSections } from '../../redux/amusemenu/amusemenu.selector';
import { selectCommunimenuSections } from '../../redux/communimenu/communimenu.selector';
import { selectInfomenuSections } from '../../redux/infomenu/infomenu.selector';
import { selectSocialmenuSections } from '../../redux/socialmenu/socialmenu.selector';

import { useHistory } from 'react-router-dom';

import MenuItem from '../menuitem/menuitem.components';

const SideMenu = ({ amusemenu, communimenu, infomenu, socialmenu, state }) => {
    const his = useHistory();
    const url = his.location.pathname;
    //console.log(typeof(url));

    switch (url) {
        case "/amuse" :
            return(
                <div className='sidemenu'>
                    {amusemenu.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            )
        case "/communicate" :
            return(
                <div className='sidemenu'>
                    {communimenu.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            )
        case "/info" :
            return(
                <div className='sidemenu'>
                    {infomenu.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            )
        case "/social" :
            return(
                <div className='sidemenu'>
                    {socialmenu.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            )
        default :
            return(
                state
            )
    }

}

const mapStateToProps = createStructuredSelector({
    amusemenu: selectAmusemenuSections,
    communimenu: selectCommunimenuSections,
    infomenu: selectInfomenuSections,
    socialmenu: selectSocialmenuSections
});

export default connect(mapStateToProps)(SideMenu);