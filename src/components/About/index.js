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
                Working as a contractor for the 
                last few years, I realized how much I enjoy planning and building out ideas from the ground up.
                </p>

                <p>
                Finding solutions to a problem, making personal connections with people, 
                and delivering on my commitments are all qualities I've developed, though I continuously 
                strive to improve.
                </p>

                <p>
                I'm a Software Engineer searching for my next project to build, while always looking to learn more!
                </p>
            </div>
        </div>
        {/* <Loader type='pacman'/> */}
        </>
    )
}

export default About;