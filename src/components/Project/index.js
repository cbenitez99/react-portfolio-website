import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import userAuth from '../../assets/images/userAuth.png'
import fullCrud from '../../assets/images/fullCRUD.png'
import restClientEx from '../../assets/images/restclientSeeds.png'
import sortFunctions from '../../assets/images/sortFunctions.png'
import validations from '../../assets/images/validations.png'
import serializers2 from '../../assets/images/serializers2.png'


const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const handleClick = () => {
        window.open('https://github.com/cbenitez99/mini-pokedex-app')
    }
    const handleApiClick = () => {
        window.open('https://pokeapi.co/')
    }

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
                <div className='image-zone'>
                <br/><br/><br/><br/><br/>
                    <p>
                        <button onClick={handleClick}>Mini Pokedex App</button> :
                        <br/> 
                        Validations/Macros
                        <img alt="validations" src={validations}/>
                        Serializers
                        <img alt="serializers2" src={serializers2}/>
                        Algorithmic Functions
                        <img alt="functions" src={sortFunctions}/>
                        User Authentication               
                        <img alt="userAuthentication" src={userAuth}/>
                        Rest Client / <button onClick={handleApiClick}>API</button> Seeding
                        <img alt='restclient' src={restClientEx}/>
                        Full C.R.U.D.
                        <img alt="crud1" src={fullCrud}/>
                    </p>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Project;