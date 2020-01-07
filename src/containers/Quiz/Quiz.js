import React, {Component} from 'react';
import cls from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/actionQuiz';


class Quiz extends Component {
    // when you click on a function, the question will change
    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id);
    }
    
    componentWillUnmount() {
        this.props.retryQuiz()
    }
    render() {
        console.log(this.props)
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}> 
                    <h1>Answer to all questions.</h1>
                    
                    {
                        this.props.loading || !this.props.quiz 
                        ? <Loader />
                        : this.props.isFinished 
                            ? <FinishedQuiz 
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}
                                />
                            : <ActiveQuiz 
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                onAnswerClick={this.props.quizAnswerClick}
                                quizLength={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1} // выводим не индекс = 0, а 1
                                state={this.props.answerState}
                                />
                    }
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results, // { [id]: 'success' / 'error' } - for all questions
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState, // { [id]: 'success' / 'error' }
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)