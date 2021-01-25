import React from 'react';
import './signinbutton.style.scss';

import SignInPage from '../../pages/signinpage/signinpage.components';

class SignInButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <>
                <button onClick={this.openModal}>로그인</button>
                <SignInPage isOpen={this.setState.isModalOpen} close={this.closeModal} />
            </>
        )
    }
}

export default SignInButton;