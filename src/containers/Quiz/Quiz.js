import React, {Component} from 'react';
import cls from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        quiz: [
            {
                answers: [
                    {text: 'Question 1'},
                    {text: 'Question 2'},
                    {text: 'Question 3'},
                    {text: 'Question 4'}
                ]
            }
        ]
    }

    render() {
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}> 
                    <h1>Answer to all questions.</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz