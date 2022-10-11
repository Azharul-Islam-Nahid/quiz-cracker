import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loadquiz from '../Loadquiz/Loadquiz';

const QuizTopics = () => {
    const quiz = useLoaderData();
    const quizQuestions = quiz.data.questions;
    return (
        <div>

            {
                quizQuestions.map(quizQuestion => <Loadquiz
                    key={quizQuestion.id}
                    quizQuestion={quizQuestion}
                    quiz={quiz}
                ></Loadquiz>)
            }
        </div>
    );
};

export default QuizTopics;