import React from 'react';
import { Link } from 'react-router';

const basedGold = { color: '#FFD700'}

const Navbar = () => (
    <section className="intro-container">
        <h1>
            <Link to='/'>
                BasedReviews
            </Link>
        </h1>
        <nav>
            <ul>
                <li><Link to='/reviews'
                activeStyle={basedGold}
                    >Reviews</Link></li>
            </ul>
        </nav>
    </section>
)

export default Navbar;
