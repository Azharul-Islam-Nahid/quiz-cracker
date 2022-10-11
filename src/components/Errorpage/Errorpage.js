import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='row container-fluid text-center mt-5'>
            <img className='col-8 m-auto w=50 img-fluid' src={`https://cdn.dribbble.com/users/1053076/screenshots/4219377/404_error_animation.gif`} alt="" />
            <button className='btn btn-primary col-6 m-auto p-2'> <NavLink to='/' className="nav-link active text-light" aria-current="page">Go to quiz topics</NavLink></button>
        </div>
    );
};

export default Errorpage;