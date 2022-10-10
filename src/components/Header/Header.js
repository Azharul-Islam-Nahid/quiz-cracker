import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid">
                <p class="navbar-brand text-light">Coders Quiz <FontAwesomeIcon icon={faComment} /> </p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' className="nav-link active text-light" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/topics' className="nav-link active text-light" aria-current="page">Topics</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/statistics' className="nav-link active text-light" aria-current="page">Quiz Statistics</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/blog' className="nav-link active text-light" aria-current="page">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;