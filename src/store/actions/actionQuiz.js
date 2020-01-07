import axios from '../../axios/axios-quiz';
import { FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    QUIZ_SET_STATE, 
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY} from './actionTypes';

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('/quizes.json');
            console.log(response.data);
            const quizes = [];

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test №${index + 1}`
                })
            })

            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            console.log(e)
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())

        // console.log(this.props.match.params.id);
        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;

            dispatch(fetchQuizSuccess(quiz));
        } catch (e) {
            dispatch(fetchQuizesError(e));
        }
        // console.log('Quiz id:', this.props.match.params.id);
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}


export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState, results
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion(number) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    }
}

export function retryQuiz() {
    return {
        type: QUIZ_RETRY
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        // This function does not give a double answer to the asked question.
        const state = getState().quiz;

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'success') {
                return;
            }
        }
        console.log('AnswerId:', answerId);
        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            dispatch(quizSetState({[answerId]: 'success'}, results));

            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz());
                    console.log('Finished!');
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1));
                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[question.id] = 'error';
            dispatch(quizSetState({[answerId]: 'error'}, results));
        }
    }
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length 
}

