import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="centerCard col-lg-6 shadow-lg p-3 mb-5 bg-white rounded">
            <h1>We sell land in Freeport, Texas.</h1>
            <h4>For residential, commercial, and industrial use</h4>
            <Link to="/properties">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                    <i class="fas fa-search-location"/> View Properties
                </button>
            </Link>
        </div>
    );
}

export default Home;