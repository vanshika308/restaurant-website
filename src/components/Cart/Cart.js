import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const combinedItems = [];
  for (const item of cartcntx.items) {
    const existingItem = combinedItems.find((combinedItem) => combinedItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      combinedItems.push({ ...item });
    }
  }

  let totalAmount = 0;
  for (const item of combinedItems) {
    totalAmount += item.price * item.quantity;
  }

  const plusHandler = (item) => {
    cartcntx.addItem({ ...item, quantity: 1 });
  };

  const minusHandler = (item) => {
    if (item.quantity === 1) {
      cartcntx.removeItem(item.id); // Remove the item from the cart if the quantity is 1
    } else {
      cartcntx.addItem({ ...item, quantity: -1 }); // Decrease the quantity of the item in the cart by 1
    }
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {combinedItems.map((item) => (
        <li key={`${item.id}_${item.name}`}>
          <div>
              <h3>{item.name}</h3> 
          <div className={classes.values}>
            <div className={classes.amount}>
            <h4>${item.price}</h4>
            <h3>X{item.quantity}</h3>
            </div>
            <div className={classes.button}>
            <button onClick={() => plusHandler(item)}>+</button>
            <button onClick={() => minusHandler(item)}>-</button>
            </div>
            </div>
          </div>
          <hr/>
        </li>
       
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span> {/* Display the total amount */}
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
