import React from 'react';
import './signup.style.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utility';

import CustomButton from '../custom-button/custom-button.components';
import FormInput from '../form-input/form-input.components';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='signup'>
            <div className='signup__text'>회원가입</div>
            <form classname='signup__form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='회원명'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='이메일'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='비밀번호'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='비밀번호 확인'
                required
                />
                <CustomButton type='submit'>가입</CustomButton>
            </form>
            </div>
        )
    }
}

export default SignUp;