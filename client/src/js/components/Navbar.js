import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
    <section className="intro-container">
        <h1>
            <Link to='/'
            style={{ color: 'white', textDecoration: 'none'}}>
                BasedReviews
            </Link>
        </h1>
        <nav>
            <ul>
                <li><Link to='/reviews'>Reviews</Link></li>
            </ul>
        </nav>
    </section>
)

export default Navbar;
