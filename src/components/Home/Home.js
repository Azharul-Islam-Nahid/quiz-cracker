import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';

const Home = () => {
    const { data } = useLoaderData();
    const userDatas = data;
    return (
        <section className='container-fluid'>
            <div className='d-lg-flex align-items-center  mt-5 mb-5 w-100  border border-rounded rounded-3'>
                <div>
                    <img className='w-75 img-fluid ms-4' src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_180786-81.jpg?w=2000" alt="" />
                </div>
                <div >
                    <p>A quiz is a quick and informal assessment of student knowledge.<br /> Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
                </div>
            </div>

            <h3 className='text-center mt-5 mb-5'>Quiz Topics</h3>
            <div className='m-auto mb-5 row col-10 row-cols-8 row-cols-lg-4 g-4'>
                {
                    userDatas.map(userData => <Quizzes
                        key={userData.id}
                        userData={userData}></Quizzes>)
                }
            </div>
        </section>

    );
};

export default Home;