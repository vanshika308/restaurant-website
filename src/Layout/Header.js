 
import './Header.css'; 
import Cart from '../Cart/Cart';
import Summary from './Summary';

const Header=()=>{
    return (
        <div className='header'>
           <div className='header-item'>  
                <h1>ReactEats</h1>
                <Cart className='cart'/>
           </div>
           <div className='header-summary'>
           <img className='banner' src='banner.jpg' alt='banner'></img>
             <Summary></Summary>
           </div>
        </div>
    )
}

export default Header;