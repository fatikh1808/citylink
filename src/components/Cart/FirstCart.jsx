import React from 'react';
import FirstCartItem from "./FirstCartItem";
import FirstCartItemsBar from "./FirstCartItemsBar";

export default function FirstCart(props) {

    let {
        boughtItems,
        generalPrice,
        generalAmount,
        onChange,
        onChangeCheckbox,
        generalDelete
    } = props;

    return (
        <div>
            <FirstCartItemsBar
                generalPrice={generalPrice}
                generalAmount={generalAmount}
                generalDelete={generalDelete}
                onChangeCheckbox={onChangeCheckbox}
            />
            {boughtItems.map((item, index) => (
                <FirstCartItem
                    item={item}
                    index={index}
                    onChangeCheckbox={onChangeCheckbox}
                    onChange={onChange}
                />
            ))}
        </div>
    );
}