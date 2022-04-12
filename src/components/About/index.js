import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const handleClick = () => {
        window.open('https://www.facebook.com/tntremodelsvs')
    }

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    index={15}
                    />
                </h1>
                <p>
                I'm a very ambitious Software Engineer looking for a role in
                a well established company and to provide me the opportunity to work with the latest
                technologies on challenging and diverse projects.
                </p>

                <p>
                I've always enjoyed finishing large puzzles or building custom vehicles using Legos, 
                but I left it all behind when I started high school. 
                Working under a <button onClick={handleClick}>General Contractor</button> for a couple years reminded me of how much I enjoyed building something from the ground up, <em>literally</em>.
                </p>

                <p>Finding solutions to a problem, making personal connections with people, 
                and really thinking outside the box are qualities I've attained and strive to improve.
                </p>

                <p>
                If I had to define myself with a word, I'd pick dedication.  
                I always bring my <strong>A</strong> game and I never quit.
                </p>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;