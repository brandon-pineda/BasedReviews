import React from 'react';
import { Link, Match } from 'react-router';
import Review from './Review';
import evilredflame from '../../assets/images/evilredflame.jpg'

const ReviewList = ({ pathname }) => (
    <div>

        <Match pattern={`${pathname}/blue-flame`} component={Review} />
        <Match pattern={pathname} exactly render={() => (
            <div className="review-list-container">
                <h2
                    className="title">Latest Reviews</h2>
                <Link to={`${pathname}/blue-flame`}
                    className='review'>
                    <img src={evilredflame} alt='evil red flame cover art'/>
                    Blue Flame
                </Link>
            </div>
        )}/>

    </div>
)

export default ReviewList;
