import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='row container-fluid text-center'>

            <button className='border border-o'> <Link to='/' aria-current="page"> <img className='col-8 m-auto w=50 img-fluid' src={`https://cdn.dribbble.com/users/1053076/screenshots/4219377/404_error_animation.gif`} alt="" /></Link></button>
        </div>
    );
};

export default Errorpage;