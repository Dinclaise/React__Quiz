import React from 'react';
import cls from './AnswerItem.module.css';


const AnswerItem = props => {
    const clsForLi = [cls.AnswerItem]

    if (props.state) {
        clsForLi.push(cls[props.state])
    }
    
    return (
        <li className={clsForLi.join(' ')} //Добавляем классы
            onClick={() => props.onAnswerClick(props.answer.id)}>
            { props.answer.text}
        </li>
    )
}

export default AnswerItem