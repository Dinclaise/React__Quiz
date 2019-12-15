import React from 'react';
import cls from './Button.module.css';

const Button = props => {
    const clsButton = [
        cls.Button,
        cls[props.type]
    ]

    return(
        <button onClick={props.onClick}
                className={clsButton.join(' ')}
                disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button