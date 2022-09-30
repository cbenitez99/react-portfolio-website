import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import github from '../../assets/images/Screen Shot 2022-09-22 at 8.30.09 PM.png'


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
    // const handleApiClick = () => {
    //     window.open('https://pokeapi.co/')
    // }

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
                <div className='project-zone'>
                    <p><img onClick={handleClick}alt='my-github' src={github}/></p>
                    <p><img alt='my-github' src={github}/></p>
                    <p><img alt='my-github' src={github}/></p> 
                    <p><img alt='my-github' src={github}/></p> 
                    <p><img alt='my-github' src={github}/></p> 
                    <p><img alt='my-github' src={github}/></p> 


                    {/* <img alt='my-github' src={github}></img> */}
                    {/* <p>
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
                    </p> */}
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Project;