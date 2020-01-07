import React from 'react';
import cls from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';


const ActiveQuiz = props => {
    return (
        <div className={cls.ActiveQuiz}>
            <p className={cls.question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>

                <small>{props.answerNumber} of {props.quizLength}</small>
            </p>

            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state} />
        </div>
    )
    
}

export default ActiveQuiz