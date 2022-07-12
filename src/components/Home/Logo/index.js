import codelogo from '../../../image/dp-3.png'
import './index.scss'

const Logo = ()=>{
     return (
        <div className='logo-container'>
            <img src={codelogo} className='solid-logo' />
        </div>
     )
}

export default Logo