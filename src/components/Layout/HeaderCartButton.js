import { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{
   
   const cartCtx=useContext(CartContext);
   let quantity=0;
   cartCtx.items.forEach(item=>{
      quantity=quantity+Number(item.quantity);
   })

   return(
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
         <img src='cart.png'></img>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
   )
}

export default HeaderCartButton;