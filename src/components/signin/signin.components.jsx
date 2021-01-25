import React from 'react';
import './signinpage.style.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utility';

import { Link } from 'react-router-dom';

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
            <>
            </>
        );
    };
}

export default SignIn;