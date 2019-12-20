import React, { Component } from 'react';
import cls from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

export default class Auth extends Component {

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
                        <input type='text'/>
                        <input type='text'/>

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
