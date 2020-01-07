import React from 'react';
import cls from './Input.module.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
} 

const Input = props => {
    const inputType = props.type || 'text';
    const clsInput = [cls.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        clsInput.push(cls.invalid);
    }

    return(
        <div className={clsInput.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            { 
              isInvalid(props) 
                ? <span>{props.errorMessage || 'Enter the correct value'}</span>
                : null
            }
        </div>
    )
}

export default Input