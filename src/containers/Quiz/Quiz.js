import React, {Component} from 'react';
import cls from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';


class Quiz extends Component {

    state = {
        results: {}, // { [id]: 'success' / 'error' } - for all questions
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' / 'error' }
        quiz: [],
        loading: true
    }

    // when you click on a function, the question will change
    onAnswerClickHandler = (answerId) => {
        // This function does not give a double answer to the asked question.
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }
        console.log('AnswerId:', answerId);
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                    console.log('Finished!');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId] : 'error'},
                results: results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length 
    }   

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null, 
            isFinished: false,
            results: {}
        })
    }

    async componentDidMount() {
        console.log(this.props.match.params.id)
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;

            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
        console.log('Quiz id:', this.props.match.params.id)
    }
        
    render() {
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}> 
                    <h1>Answer to all questions.</h1>
                    
                    {
                        this.state.loading 
                        ? <Loader />

                        : this.state.isFinished 
                        ? <FinishedQuiz 
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                            />
                        : <ActiveQuiz 
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1} // выводим не индекс = 0, а 1
                            state={this.state.answerState}
                            />
                    }
                    
                </div>
            </div>
        )
    }
}

export default Quiz