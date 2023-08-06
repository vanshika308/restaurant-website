import React from 'react'; 
import classes from './Header.module.css';
import Summary from '../Meals/Summary';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
    return (
    <React.Fragment>  
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img  src='banner.png' alt='banner'></img>
      </div>
      <Summary></Summary>
        </React.Fragment>
    )
}

export default Header;