import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['O', 'k', 'e', ' ', 'A', 'd', 'e', 'd', 'a', 'y', 'o']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    
    return(
        <>
       <div className='container home-page border'>
            <div className='text-zone border border'>
                <h1>
                <span className={letterClass}>H</span>
                 <span className={`${letterClass} _12`}>i</span>
                 <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                   strArray={nameArray} idx={15} />
                   <br />
                    <AnimatedLetters letterClass={letterClass} 
                   strArray={jobArray} idx={26} />
                </h1>
                <h2>
                    Graphics designer, Frontend & Backend Developer 
                </h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>
            </div>
            <Logo />
       </div>
       <Loader type='pacman' />
       </> 
    );
}

export default Home