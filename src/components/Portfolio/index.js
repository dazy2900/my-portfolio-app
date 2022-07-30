import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import pdf from '../../image/pdf-portfolio.pdf';
import pdfImage from '../../image/pdf-image.PNG';
import PortfolioData from './render-portfolio';
import PortfolioInfo from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] =useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
      <>  
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={'portfolio'.split('')}
                idx={15}
                />
            </h1>
            <div >
                <PortfolioData portfolio={PortfolioInfo.portfolio} />
            </div>
            <div className='youtube-container'>
            <h2 className='youtube-title sub-title'><AnimatedLetters 
                letterClass={letterClass}
                strArray={'Motion Graphics Portfolio'.split('')}
                idx={15}
                /></h2>
            <div className='youtube'>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O7vzgkc8uuw" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
            </div>
            </div>
            <div className='pdf-porfolio'>
                <h2 className='pdf-title sub-title'><AnimatedLetters 
                letterClass={letterClass}
                strArray={'PDF portfolio'.split('')}
                idx={15}
                /></h2>
               
                <div className='pdff-box'>
                           <img src={pdfImage} className='pdf-image' alt='pdf-image' />
                           <div className='content'>
                              <p className='title'>
                                PDF Portfolio
                              </p>
                             
                              <button className='btn' 
                              onClick={()=> window.open(pdf)}>
                                View
                              </button>
                            </div> 
                </div>    
                
            </div>
            
        </div>
        <Loader type='pacman' />
      </>
    );
}

export default Portfolio;