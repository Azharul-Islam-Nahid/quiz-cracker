import React from 'react';

const Quizzes = ({ userData }) => {
    const { name, logo, total } = userData;
    return (
        <div className="card-group">
            <div className="card bg-secondary text-light">
                <img src={logo} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{ }</p>
                    <p className="card-text">Total quiz : {total}</p>
                    <p className="btn btn-primary w-100">Start Quiz</p>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;