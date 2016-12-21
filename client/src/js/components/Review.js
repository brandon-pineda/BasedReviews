import React,{Component} from 'react';
import evilredflame from '../../assets/images/evilredflame.jpg'

export default class Review extends Component {

    render() {
        return (
            <section className="review-container">
                <header className="image-title-container">
                    <h2>Evil Red Flame</h2>
                </header>
                <section className="image-container">
                    <figure>
                        <img src={evilredflame} alt="evil red flame cover art" />
                        <figcaption> Released in November 2010. </figcaption>
                    </figure>
                </section>

                <p className="review-abstract">
                    Shut those unbased people when they saying The Based God can't rap by showing them this tape.
                </p>

                <p className="review-body">
                    Lil B has always been a source of contention.
                </p>
            </section>
        );
    }
}
