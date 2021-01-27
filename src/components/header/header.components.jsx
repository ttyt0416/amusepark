import React from 'react';
import './header.style.scss';


import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header'>
            <div className='header-center'>
                <Link className='header-center__option' to='/'>
                    메인
                </Link>
                <Link className='header-center__option' to='/info'>
                    이용정보
                </Link>
                <Link className='header-center__option' to='/amuse'>
                    즐길거리
                </Link>
                <Link className='header-center__option' to='/social'>
                    소식함
                </Link>
                <Link className='header-center__option' to='/communicate'>
                    소통함
                </Link>
            </div>
        </div>
    );
}


export default Header;