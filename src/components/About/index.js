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
                Working under a <button onClick={handleClick}>General Contractor</button> within the 
                last few years made me realize how much I truly enjoy planning and building out ideas from the ground up, <em>literally</em>.
                </p>

                <p>
                Finding solutions to a problem, making personal connections with people, 
                and really thinking outside the box are all qualities I've kept and continuously strive to improve.
                </p>

                <p>
                I'm a new Software Engineer searching for a position in
                a well established company that will provide me with ample opportunity
                to learn more, and assist in building diverse projects using the latest technologies.
                </p>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;