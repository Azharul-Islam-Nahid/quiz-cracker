import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';

const Home = () => {
    const { data } = useLoaderData();
    const userDatas = data;
    return (
        <section>
            <div className='container-fluid ms-auto mt-5 mb-5 w-75 text-center border border-rounded rounded-3'>
                <p>A quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
            </div>
            <div className='m-auto row col-6 row-cols-8 row-cols-lg-2 g-4'>
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