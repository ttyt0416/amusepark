import React from 'react';
import './sidemenu.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAmusemenuSections } from '../../redux/amusemenu/amusemenu.selector';
import { selectCommunimenuSections } from '../../redux/communimenu/communimenu.selector';
import { selectInfomenuSections } from '../../redux/infomenu/infomenu.selector';
import { selectSocialmenuSections } from '../../redux/socialmenu/socialmenu.selector';

import { useParams } from 'react-router-dom';

import MenuItem from '../menuitem/menuitem.components';

const SideMenu = ({ amusemenu }) => {
    const url = useParams();

    return (
        <div className='sidemenu'>
            {amusemenu.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    amusemenu: selectAmusemenuSections
});

export default connect(mapStateToProps)(SideMenu);