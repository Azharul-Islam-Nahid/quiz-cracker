import React from 'react';
import './Loadquiz.css';

const Loadquiz = ({ quizQuestion }) => {
    // console.log(quizQuestion);
    const { question, options, correctAnswer } = quizQuestion;

    const answerChecker = quizQuestion => {
        if (quizQuestion === correctAnswer) {
            alert('Your ans is correct')
        }
        else {
            alert('wrong answer')
        }
    };
    return (
        <div className="container mt-sm-5 my-1">
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5"><b>Q No.{question}</b></div>
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    <label onClick={() => answerChecker(quizQuestion.options[0])} className="options"> {options[0]}
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <label onClick={() => answerChecker(quizQuestion.options[1])} className="options">{options[1]}
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <label onClick={() => answerChecker(quizQuestion.options[2])} className="options">{options[2]}
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <label onClick={() => answerChecker(quizQuestion.options[3])} className="options">{options[3]}
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Loadquiz;