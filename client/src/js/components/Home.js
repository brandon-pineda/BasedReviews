import React from 'react';

const downloadLink = 'http://datpizz.com/2016/09/28/lil-b-the-basedgod-discography/';

const Home = () => (
    <div className='home-container'>
        <h2>Home</h2>

        <p>Download all Lil B material
            <br />
            <a href={downloadLink} target='_blank'>here.</a>
        </p>
    </div>
)

export default Home;
