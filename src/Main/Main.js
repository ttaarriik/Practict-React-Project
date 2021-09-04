import React, {useState, useRef, useReducer} from "react";
import styles from "./Main.module.css";
import Card from "../UI/Card"
import CartList from '../Store/cart-list';


const Main = (props) => {
    
    const [mealList, setMealList] = useState([]);


    const updateMealList = (meal) => {

        setMealList((prevList) => {
            return [...prevList, mealState];
        });
        console.log("mealList", mealList);

    }

    const mealReducer = (state, action) => {
        if(action.type === 'quantity'){
            return {id: state.id, name: state.name, price: state.price, quantity: action.quantity}
        }
        if(action.type === 'id'){
            return {id: action.id, name: state.name, price: state.price, quantity: state.quantity}
        }
        if(action.type === 'name'){
            return {id: state.id, name: action.name, price: state.price, quantity: state.quantity}
        }
        if(action.type === 'price'){
            return {id: state.id, name: state.name, price: action.price, quantity: state.quantity}
        }

        return {id: null, name: null, price: null, quantity: null};

    }

    const amountChangeHandler = (event) => {
        dispatch({type: 'quantity', quantity: event.target.value});
    }

    const updateValues = (meal) => {
        dispatch({type: 'id', id: meal.id});
        dispatch({type: 'name', name: meal.name});
        dispatch({type: 'price', price: meal.price});
    }


    const [mealState, dispatch] = useReducer(mealReducer, {id: null, name: null, price: null, quantity: null});

    return(
        <CartList.Provider value={
            mealList
        }>
            <div className={styles.Main}></div>
            <Card className={styles.banner}>
            <div>
                <h2>Decious Food, Delivered To You </h2>
                <p>Choose your favorite food from our broad collecion meals and enjoy delicious <br/>lunch 
                    or dinner at home
                </p>
                <p>
                    All our meals are cooked with high quality ingridients, just in-time and of course <br/>
                    by experienced chief!
                </p>
            </div>
            </Card>
            <Card className={styles.listWrapper}>
            {props.meals.map((meal) => (
                    <div className={styles.listItem} key={meal.id}>
                        <ul>
                            <li className={styles.name}>{meal.name}</li>
                            <li className={styles.description}>{meal.description}</li>
                            <li className={styles.price}>${meal.price}</li>
                        </ul>
                        <div className={styles.amount}>
                            <div className={styles.amountInput}>
                                <label htmlFor="amount">Amount</label>
                                <input onChange={amountChangeHandler} className={styles.inputNumber} id="amount" type="number"></input>
                            </div>
                            <button type="submit"className={styles.button} onFocus={() => updateValues(meal)} onClick={() => updateMealList(meal)}>+Add</button>
                        </div>
                    </div>
            ))}
            </Card>
        </CartList.Provider>
    )
}

export default Main;