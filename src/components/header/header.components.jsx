import React from 'react';
import './header.style.scss';

import { Link } from 'react-router-dom';


import SignInButton from '../signinbutton/signinbutton.components';


import SignInPage from '../../pages/signinpage/signinpage.components';
import SignUpPage from '../../pages/signuppage/signuppage.components';

const Header = () => {
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
                <div className='header-right__option'>
                    <SignInButton />
                </div>
                <div className='header-right__option'>
                    <SignInButton onClick={() => SignInPage.isOpen = true} />
                </div>
            </div>
        </div>
    );
}

export default Header;