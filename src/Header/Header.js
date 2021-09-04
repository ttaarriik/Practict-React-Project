import React, { Fragment, useState } from 'react'
import styles from './Header.module.css';
import Cart from "./Cart/Cart";


const Header = (props) => {

    return(
        <React.Fragment>
            <header>
                <div className={styles.Header}>
                    <h2 className={styles.h2}>ReactMeals</h2>
                <Cart/>
                </div>
                <div className={styles.image}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"></img>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;