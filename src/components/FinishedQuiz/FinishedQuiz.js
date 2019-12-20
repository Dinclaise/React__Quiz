import React from 'react';
import cls from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';


const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total;
    }, 0)

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
            </ul>

            <p>
                Correct {successCount} of {props.quiz.length}
            </p>

            <div>
                <Button onClick={props.onRetry} type="primary" >Try Again</Button>
                <Link to="/">
                    <Button type="success" >Go to the list of texts</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz
