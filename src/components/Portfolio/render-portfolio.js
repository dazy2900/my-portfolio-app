import './index.scss'



const PortfolioData = ({portfolio}) => {
    return(
        <div className='image-container'>
            {
                portfolio.map((port, idx)=> {
                    return(
                        <div className='image-box' key={idx} >
                           <img src={port.cover} className='portfolio-image' alt='portfolio-image' />
                           <div className='content'>
                              <p className='title'>
                                {port.title}
                              </p>
                              <h4 className='description'>
                                {port.description}
                              </h4>
                              <button className='btn' 
                              onClick={()=> window.open(port.url)}>
                                View
                              </button>
                            </div> 
                        </div>    
                    )
                }) 

            }
        </div>
    );
}

export default PortfolioData;