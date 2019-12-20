import React, { Component } from 'react';
import cls from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter the correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter the correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={cls.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={cls.AuthForm}>
                        <Input label="Email" />
                        <Input label="Password" />

                        <Button 
                            type='success' 
                            onClick={this.loginHandler}
                        >
                            Login
                        </Button>

                        <Button 
                            type='primary' 
                            onClick={this.registerHandler}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
                
            </div>
        )
    }
}
