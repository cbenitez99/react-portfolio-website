import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container project-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                        index={15}/>
                    </h1>
                    <p>
                        Creating...
                    </p>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Project;