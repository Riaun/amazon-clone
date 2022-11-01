import React, { useState, useEffect } from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer"  // Selector
import { useHistory } from 'react-router-dom'



function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();


    // const getBasketTotal = (basket) => {
    //     let tot = 0;
    //     basket.forEach(element => {
    //         tot += element.price
    //     });
    //     return tot;
    // }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
