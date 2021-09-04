import React, {useState, useContext} from "react";
import styles from "./Cart.module.css";
import Card from '../../UI/Card';
import CartList from '../../Store/cart-list';


const Cart = (props) => {
    const [cartOpen, setCartOpen] = useState(false);
    const ext = useContext(CartList);

    const closeModal = () => {
        setCartOpen(false);
        console.log(ext);
    }

    const openModal = () => {
        setCartOpen(true)
    }
    return(
        <React.Fragment>
            {cartOpen && <Card className={styles.modal}>
                            <div className={styles.item}>
                                <div>
                                    <div className={styles.name}>
                                        drggggggg
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <div className={styles.price}>
                                            $324234
                                        </div>
                                        <div className={styles.quantity}>
                                            x33
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    <button className={styles.button}>-</button>
                                    <button className={styles.button}>+</button>
                                </div>
                            </div>
                            <div className={styles.total}>
                                <div>
                                    <div className={styles.totalAmountText}>Total Amount</div>
                                    <div className={styles.totalAmount}>$53</div>
                                </div>
                                <div>
                                    <button onClick={closeModal} className={styles.closeButton}>Close</button>
                                    <button className={styles.orderButton}>Order</button>
                                </div>
                            </div>
                        </Card>}
            {cartOpen && <div onClick={closeModal} className={styles.backlog}/>}
            <div onClick={openModal} className={styles.cart}>
                <div>Your cart</div>
                <div className={styles.amount}> 0</div>
            </div>
        </React.Fragment>
    )
}

export default Cart;