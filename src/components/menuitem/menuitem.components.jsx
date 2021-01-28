import React from 'react';
import './menuitem.style.scss';

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, history, linkUrl, match }) => (
    <div className='menuitem' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='menuitem__content'>
            <h1 className='menuitem__title'>{title}</h1>
        </div>
    </div>
)

export default withRouter(MenuItem);