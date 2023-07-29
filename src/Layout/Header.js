 
import './Header.css'; 
import Cart from '../Cart/Cart';
const Header=()=>{
    return (
        <div className='header'>
           <div className='header-item'>  
                <h1>ReactEats</h1>
                <Cart className='cart'/>
           </div>
             <img className='banner' src='banner.png' alt='banner'></img>
           
        </div>
    )
}

export default Header;