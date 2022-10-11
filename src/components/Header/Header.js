import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary w-100">
            <div className="container-fluid">
                <p className="navbar-brand text-light">Coders Quiz <FontAwesomeIcon icon={faComment} /> </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active text-light" aria-current="page">Topics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/statistics' className="nav-link active text-light" aria-current="page">Quiz Statistics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/blog' className="nav-link active text-light" aria-current="page">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;