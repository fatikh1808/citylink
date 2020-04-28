import React from "react";

import CartStepper from "./Stepper";
import CartBar from "./CartBar";

class Cart extends React.Component {

    render() {
        return (
            <div>
                <div className={'cart_content'}>
                    <div className={'cart_name_header'}>
                        <h1>
                            Корзина
                        </h1>
                    </div>
                    <div className={'cart_stepper_content'}>
                        <CartStepper/>
                    </div>
                    <div className={'cart_content'}>

                    </div>
                </div>
                <div>
                    <CartBar/>
                </div>
            </div>
        );
    }
}

export default Cart;