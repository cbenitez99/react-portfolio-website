import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C','o','n','t','a','c','t',' ', 'M','e']}
                    index={15}/>
                </h1>
                <p>
                I am interested in opportunities that will provide many project opportunities. 
                </p>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Contact;