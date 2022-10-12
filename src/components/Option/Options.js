import React from 'react';
import { toast } from 'react-toastify';

const Options = ({ option, correctAnswer }) => {

    const answerChecker = (e) => {
        if (correctAnswer === e) {
            toast.success("Correct answer", { position: 'top-center', theme: 'light' });
        }
        else {
            toast.error("Wrong answer", { position: 'top-center', theme: 'light' });
        }
    };

    return (
        <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label className="options"> {option}
                <input onClick={() => answerChecker(option)} type="radio" name="radio" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default Options;