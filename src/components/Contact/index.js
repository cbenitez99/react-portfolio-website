import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_kvmywv7', refForm.current, 'MENY6kZsA5Tqydch3')
        .then(() => {
            alert("Email Sent!");
            window.location.reload(false)
        }, (error) => {
          alert("Something went wrong, please try again.");
        });
    };
    
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
                I am interested in both full time employment or contract freelancing. I'm always looking
                for opportunities that help me improve my current skillset.
                If you have any questions, please don't hesitate to contact me using the form below! 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>

                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="Subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
};

export default Contact;