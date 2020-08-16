import React from "react";

const BarButton = (props) => {

    const {
        firstCart,
        stepperGo,
        stepperBar
    } = props;

    if (firstCart) {
        return (
            <button
                className={'cart_bar_button'}
                onClick={() => stepperGo(stepperBar())}
            >
                Оформить заказ
            </button>
        );
    } else {
        return null
    }
}
export default BarButton;