import React from 'react';
import './signpage.style.scss';

import SignIn from '../../components/signin/signin.components';
import SignUp from '../../components/signup/signup.components';

const SignPage = () => {
    return (
        <div className='sign'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignPage;