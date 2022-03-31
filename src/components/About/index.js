import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faJsSquare, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

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
                I'm confident in what I understand, curious to learn more, and continuously working towards
                improving my programming abilities.
                </p>
                <p>
                If I had to define myself with one word, I'd choose dedication.  
                I always bring my <strong>A+</strong> game and I never quit.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare}/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt}/>
                    </div>
                </div>

            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;