import React from 'react';
import { Link } from 'react-router-dom';

const Quizzes = ({ userData }) => {
    const { id, name, logo, total } = userData;
    return (
        <div className="card-group">
            <div className="card bg-secondary text-light">
                <img src={logo} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Total Quiz : {total}</p>
                    <p className="btn btn-primary w-100">  <Link to={`/quiz/${id}`} className='text-light text-decoration-none ps-5 pe-5'>Start Quiz</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;