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
  let totalQuantity = 0;
  for (const item of combinedItems) {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {combinedItems.map((item) => (
        <li key={`${item.id}_${item.name}`}>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span> {/* Display the total amount */}
      </div>
      <div className={classes.total}>
        <span>Total Quantity</span>
        <span>{totalQuantity}</span> {/* Display the total quantity */}
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
