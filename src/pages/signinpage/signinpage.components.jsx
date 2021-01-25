import React from 'react';
import './signinpage.style.scss';

import { Link } from 'react-router-dom';

class SignInPage extends React.Component {
    render() {
        const { isOpen, close } = this.props;
        return (
            <>
                {isOpen ? (
                        <div className='signin'>
                            Hi
                        </div>
                    ): null
                }
            </>
        );
    };
}

export default SignInPage;