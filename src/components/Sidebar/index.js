import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import dlogo from '../../image/logo.png'

import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faCss3, faReact, faJsSquare, faPhp, faHtml5, faWordpress } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => 
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={dlogo} alt='N'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='#'
                >
                    <FontAwesomeIcon icon={faReact} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='#'
                >
                    <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='#'
                >
                    <FontAwesomeIcon icon={faPhp} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='#'
                >
                    <FontAwesomeIcon icon={faWordpress} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>


export default Sidebar