import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import './Loadquiz.css';

const Loadquiz = ({ quizQuestion }) => {
    const { question, options, correctAnswer } = quizQuestion;
    const htmlDel = question;
    const refinedQ = htmlDel.replace(/(<([^>]+)>)/ig, '');


    const correct = () => toast("Correct answer");
    const wrong = () => toast("Wrong answer");
    const answer = () => toast(correctAnswer);

    const showAnswer = () => {
        answer()
    }

    const answerChecker = quizQuestion => {
        if (quizQuestion === correctAnswer) {

            correct();
        }
        else {
            wrong();
        }
    };
    return (
        <div className="container mt-sm-5 my-1">
            <button onClick={() => showAnswer()} className='eye-button m-auto'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5"><b><small></small>Q No.{refinedQ}</b> </div>
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