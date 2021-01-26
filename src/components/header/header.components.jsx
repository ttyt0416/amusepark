import React from 'react';
import './header.style.scss';

import { auth } from '../../firebase/firebase.utility';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setCurrentUser } from '../../redux/user/user.actions';

import { Link } from 'react-router-dom';



const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <div className='header-left'>
                <Link className='header-left__option' to='/'>
                    메인
                </Link>
                <Link className='header-left__option' to='/info'>
                    이용정보
                </Link>
                <Link className='header-left__option' to='/amuse'>
                    즐길거리
                </Link>
                <Link className='header-left__option' to='social'>
                    소식함
                </Link>
                <Link className='header-left__option' to='communicate'>
                    소통함
                </Link>
            </div>
            <div className='header-right'>
                {
                    currentUser ?
                    <div className='header-right__option' onClick={() => auth.signOut()}>로그아웃</div>
                    :
                    <Link className='header-right__option' to='/sign'>로그인</Link>
                }
                
            </div>
        </div>
    );
}

const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);