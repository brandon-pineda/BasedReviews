import React from 'react';
import { Link, Match } from 'react-router';
import Review from './Review';
import ReviewScale from './ReviewScale';
import evilredflame from '../../assets/images/evilredflame.jpg'

const ReviewList = ({ pathname }) => (
    <div>

        <Match pattern={`${pathname}/review-scale`} component={ReviewScale} />
        <Match pattern={`${pathname}/evil-red-flame`} component={Review} />

        <Match pattern={pathname} exactly render={() => (
            <div className="review-list-container">
                <h2 className="title">Latest Reviews</h2>
                <Link to={`${pathname}/review-scale`}
                    className='review-scale-link'>
                        Review Scale
                    </Link>

                <Link to={`${pathname}/evil-red-flame`}
                    className='review'>
                    <img src={evilredflame} alt='evil red flame cover art'/>
                    Evil Red Flame
                </Link>
            </div>
        )}/>

    </div>
)

export default ReviewList;
