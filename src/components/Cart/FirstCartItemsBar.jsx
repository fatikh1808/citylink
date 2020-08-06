import React from "react";

const FirstCartItemsBar = (props) => {

    const {
        generalAmount,
        generalDelete,
        generalPrice,
        onChangeCheckbox
    } = props;

    return (
        <div className={'cart_amount_bar'}>
            <div className={'cart_amount_bar_checkbox'}>
                <input
                    type={'checkbox'}
                    className={'cart_checkbox'}
                    name={'generalCheckbox'}
                    onClick={(event) => onChangeCheckbox(event)}
                />
            </div>
            <div className={'cart_amount_bar_amount'}>
                {generalAmount} шт.
            </div>
            <div className={'cart_amount_bar_price'}>
                {generalPrice} р.
            </div>
            <div className={'cart_amount_bar_delete'}>
                <button
                    className={'cart_amount_bar_delete_button'}
                    onClick={generalDelete}
                > x
                </button>
            </div>
        </div>

    )
}

export default FirstCartItemsBar;