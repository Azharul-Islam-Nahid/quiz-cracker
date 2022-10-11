import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loadquiz from '../Loadquiz/Loadquiz';

const QuizTopics = () => {
    const quiz = useLoaderData();
    const quizQuestions = quiz.data.questions;
    return (
        <div className='container-fluid mt-5'>
            <div className="card-group">
                <div className="card text-center">
                    <img src={quiz.data.logo} className="card-img-top bg-secondary img-fluid w-25 m-auto" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">Quiz of {quiz.data.name}</h3>
                        <p className="card-text text-muted">{ }</p>
                        <h4 className="card-text">Total quiz : {quiz.data.total}</h4>
                    </div>
                </div>
            </div>

            {
                quizQuestions.map(quizQuestion => <Loadquiz
                    key={quizQuestion.id}
                    quizQuestion={quizQuestion}
                ></Loadquiz>)
            }
        </div>
    );
};

export default QuizTopics;