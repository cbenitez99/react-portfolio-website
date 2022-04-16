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
                    strArray={['M','y',' ','C','o','d','e']}//,'e','c','t','s'
                    index={15}/>
                </h1>
                <p>
                    Here is a mixed stack of code I wrote: 
                </p>
            </div>
            <img/>
            <img/>
            <img/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Project;