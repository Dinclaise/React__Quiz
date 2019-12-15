import React from 'react';
import cls from './Backdrop.module.css';


const Backdrop = props => <div className={cls.Backdrop} onClick={props.onClick} />

export default Backdrop;