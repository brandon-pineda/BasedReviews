import React,{Component} from 'react';
import evilredflame from '../../assets/images/evilredflame.jpg'
import {text} from '../../assets/text/evil-red-flame.js'

export default class Review extends Component {

    render() {
        return (
            <section className="review-container">
                <header className="image-title-container">
                    <h2>Evil Red Flame
                        <br/>
                        <span>8</span>
                     </h2>
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
                    {text.split('\n').map((item, index) => {
                      return <span key={index}>{item}<br/></span>})}
                </p>
            </section>
        );
    }
}
