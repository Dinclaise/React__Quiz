import React, { Component } from 'react';
import cls from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';


export default class QuizCreator extends Component {

    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }


    render() {
        return (
            <div className={cls.QuizCreator}>
                <div>
                    <h1>Create Test</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type="text" /> 
                        <hr/>
                        <input type="text" /> 
                        <input type="text" /> 
                        <input type="text" /> 
                        <input type="text" /> 


                        <select></select>

                        <Button 
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Add Question
                        </Button>

                        <Button 
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Create Test
                        </Button>
                    </form>

                    

                    
                </div>
                
            </div>
        )
    }
}
