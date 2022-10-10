import React from 'react';

const Home = () => {
    return (
        <section>
            <div className='container-fluid ms-auto mt-5 mb-5 w-75 text-center border border-rounded'>
                <p>A quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
            </div>
            <div className='row col-9 row-cols-8 row-cols-lg-3 g-4'>
                <div className="card-group">
                    <div className="card">
                        <img src='' className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <p className="card-text text-muted">{ }</p>
                            <p className="card-text"><small>For Age : { } year</small></p>
                            <p className="card-text"><small>Time required : { }m</small></p>
                            <p className="btn btn-primary">Add to menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;