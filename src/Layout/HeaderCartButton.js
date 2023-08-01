
import classes from './HeaderCartButton.module.css';


const HeaderCartButton=(props)=>{
   return(
    <button className={classes.button}>
      <span className={classes.icon}>
         <img src='cart.png'></img>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
   )
}

export default HeaderCartButton;