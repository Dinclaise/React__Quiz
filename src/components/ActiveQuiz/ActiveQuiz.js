import React from 'react';
import cls from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';


const ActiveQuiz = (props) => {
    return (
        <div className={cls.ActiveQuiz}>
            <p className={cls.question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    How are you?
                </span>

                <small>4 of 13</small>
            </p>

            <AnswersList 
                answers={props.answers} />
        </div>
    )
    
}

export default ActiveQuiz