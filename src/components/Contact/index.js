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
                <div className='contact-form'>
                 <form>
                   <ul>
                     <li className='half'>
                         <input type='text' name='name' placeholder='Name' required />
                     </li>
                     <li className='half'>
                         <input type='email' name='email' placeholder='Email' required />
                     </li>
                     <li className='half'>
                         <input type='text' name='name' placeholder='Name' required />
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