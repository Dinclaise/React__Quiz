import React from 'react';
import cls from './FinishedQuiz.module.css';


const FinishedQuiz = props => {
    return (
        <div className={cls.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const clsForI = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        cls[props.results[quizItem.id]]
                    ]
                    return(
                        <li key={index}>
                            <strong>{index}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={clsForI.join(' ')}/>
                        </li>
                    )
                })}
                {/* <li>
                    <strong>1.</strong>
                    How are you?
                    <i className={'fas fa-error' + cls.error} />
                </li>
                <li>
                    <strong>2.</strong>
                    How are you?
                    <i className={'fas fa-check' + cls.success} />
                </li> */}
            </ul>

            <p>
                Correct 4 of 10
            </p>

            <div>
                <button>Again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
