import React,{Component} from 'react';
import blueflame from '../../assets/images/blueflame.jpg'

export default class Review extends Component {

    render() {
        return (
            <section className="review-container">
                <header className="image-title-container">
                    <h2>Blue Flame</h2>
                </header>
                <section className="image-container">
                    <figure>
                        <img src={blueflame} alt="blue flame cover art" />
                        <figcaption> Released in September 2010. </figcaption>
                    </figure>
                </section>

                <p>this is the review</p>
            </section>
        );
    }
}
