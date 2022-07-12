import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

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
        </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact