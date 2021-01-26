import React from 'react';
import './signin.style.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utility';

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.components';
import FormInput from '../form-input/form-input.components';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }

        this.setState({ email: '', password: ''})
    }


    render() {
        return (
            <div className='signin'>
                <div className='signin__text'>로그인</div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="이메일" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="비밀번호" required />
                    <div className='signin__buttons'>
                        <CustomButton type="submit"> 로그인</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 구글로 로그인</CustomButton>
                    </div>                   
                </form>
            </div>
        );
    };
}

export default SignIn;