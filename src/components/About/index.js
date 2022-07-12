import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faPhp, faCss3, faHtml5, faWordpress } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
   
    const [letterClass, setLetterClass] = useState('text-animate') 
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>
                    I'm a very ambitious web Developer looking to work in an established IT 
                    company with the opportunity to work with the latest technologies on 
                    challenging and diverse projects.
                </p>
                <p>
                    I am a young professional who possesses a good interpersonal communication 
                    skills, an excellent multi-tasking skills, a strong desire for innovation, 
                    an eye for creativity, a passion for learning. 
                </p>
                <p>
                    My career objective is to work in an organisation that offers me a career 
                    advancement and professional growth where I can contribute immensely to job
                    performance and also be learned on the job 
                </p>

                <div className='skills'>
                    <h2>Skills</h2>
                    <h3>  GRAPHICS DESIGN & UI/UX</h3>
                    <span>Corel Draw,       Photoshop,	Illustrator,
                        Adobe XD,	Articulate Storyline </span>    
                    <h3> MOTION GRAPHICS </h3>

                    <span>Adobe After Effect,    	Adobe Media Encoder</span> 

                    <h3>    FRONT END WEB DESIGN </h3>
                    <span>  HTML,       CSS,	       SCSS, 	Bootstrap,
                        JAVASCRIPT (JQuery, AJAX, React JS),
                        WORDPRESS	</span>  	
                    <h3>    BACK END WEB DEVELOPMENT</h3>
                    <span>    JAVASCRIPT (Node JS, Express JS),
                        PHP </span>
                    <h3> DATABASE (MYSQLI, MONGO DB)</h3>
                    
                   

                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#dd0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#5ed4f4' />
                    </div>  
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPhp} color='#efd81d' />
                    </div>  
                    <div className='face6'>
                        <FontAwesomeIcon icon={faWordpress} color='#ec4d28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About