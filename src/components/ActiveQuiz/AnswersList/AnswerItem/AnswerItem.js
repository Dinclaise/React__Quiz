import React from 'react';
import cls from './AnswerItem.module.css';


const AnswerItem = props => {
    return (
        <li className={cls.AnswerItem}>
            { props.answer.text}
        </li>
    )
}

export default AnswerItem