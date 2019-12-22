import React, { Component } from 'react';
import cls from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import is from 'is_js';



export default class Auth extends Component {

    state = {
        isFormValid: false,
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

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = is.email(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangedHandler = (event, controlName) => {
        console.log(`${controlName}:`, event.target.value)

        const formControls = {...this.state.formControls};
        const control = { ...formControls[controlName] };
        console.log(control)

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return(
                <Input 
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidation={!!control.validation}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangedHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={cls.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={cls.AuthForm}>
                        
                        { this.renderInputs() }

                        <Button 
                            type='success' 
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Login
                        </Button>

                        <Button 
                            type='primary' 
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
                
            </div>
        )
    }
}
