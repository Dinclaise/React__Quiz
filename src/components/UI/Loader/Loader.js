import React from 'react'
import cls from './Loader.module.css';

const Loader = props => (
    <div className={cls.center}>
        <div className={cls.Loader}>
            <div/><div/>
        </div>
    </div>
)

export default Loader;