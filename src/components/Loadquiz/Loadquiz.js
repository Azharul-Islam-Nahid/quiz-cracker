import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import Options from '../Option/Options';
import './Loadquiz.css';

const Loadquiz = ({ quizQuestion }) => {
    const { question, options, correctAnswer } = quizQuestion;
    const htmlDel = question;
    const refinedQ = htmlDel.replace(/(<([^>]+)>)/ig, '');

    const answer = () => toast.info(correctAnswer, { position: 'top-center', theme: 'colored' });

    const showAnswer = () => {
        answer()
    }

    return (
        <div className="container mt-sm-5 my-1">
            <button onClick={() => showAnswer()} className='eye-button m-auto'><FontAwesomeIcon className='text-primary text-xl h3' icon={faEye}></FontAwesomeIcon></button>
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5"><b><small></small>Q No.{refinedQ}</b> </div>
                {
                    options.map(option => <Options
                        key={option}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Options>)
                }
            </div>
        </div>

    );
};

export default Loadquiz;