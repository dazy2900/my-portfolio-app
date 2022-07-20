import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin, faWhatsapp, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                 <AnimatedLetters 
                 strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                 letterClass={letterClass} idx={15} />
                </h1>
                <p>
                    You can contact me for freelance projects. However, if 
                    you have request or question, don't hesitate to contact me 
                    by sending an Email using the form below or conatct me via 
                    my personal line.
                </p>
                <div className='contact-form'>
                 <form>
                   <ul>
                     <li className='half'>
                         <input type='text' name='name' placeholder='Name' required />
                     </li>
                     <li className='half'>
                         <input type='email' name='email' placeholder='Email' required />
                     </li>
                     <li>
                         <input type='text' name='subject' placeholder='Subject' required />
                     </li>
                     <li>
                         <textarea placeholder='Message' name='message'  required> </textarea>
                     </li>
                     <li>
                         <input type='submit' className='flat-button' value='SEND' />
                     </li>
                   </ul>
                 </form>   
                </div>
            </div>
            <div className='contact-icons'>
                <div className='contact-div'>
                    <FontAwesomeIcon icon={faPhone} color='white' /> 
                    <span className='contact-span'>+2348167044991</span>
                </div>
                <div className='contact-div'>
                    <FontAwesomeIcon icon={faEnvelope} color='white' /> 
                    <span className='contact-span'>adedayooke29@gmail.com</span>
                </div>
                <div className='contact-div'>
                    <FontAwesomeIcon icon={faGithub} color='white' /> 
                    <span className='contact-span'>Github.com/dazy2900</span>
                </div>
                
                <div className='social-icons'>
                    <div className='topic'>
                        Connect with me
                    </div>
                    <div className='s-icon instagram'>
                    <FontAwesomeIcon icon={faInstagram} color='white' /> 
                    </div>
                    <div className='s-icon facebook'>
                    <FontAwesomeIcon icon={faFacebook} color='white' /> 
                    </div>
                    <div className='s-icon whatsapp'>
                    <FontAwesomeIcon icon={faWhatsapp} color='white' /> 
                    </div>
                    <div className='s-icon twitter'>
                    <FontAwesomeIcon icon={faTwitter} color='white' /> 
                    </div>
                </div>
            </div>
        </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact