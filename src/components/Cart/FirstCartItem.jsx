import React from "react";

const FirstCartItem = (props) => {

    const {
        item,
        index,
        onChangeCheckbox,
        onChange
    } = props;

    return (
        <div className={'cart_product_content'} key={index}>
            <div className={'check_control'}>
                <input
                    type={'checkbox'}
                    name={'itemCheckbox'}
                    className={'cart_checkbox'}
                    id={`${item.id}`}
                    onChange={(event => onChangeCheckbox(event))}
                />
            </div>
            <div className={'product_info'}>
                <div className={'product_info_img'}>
                    <img
                        className={'product_info_img_img'}
                        src={item.item.mainImg}
                        alt="123456"
                    />
                </div>
                <div className={'product_info_id'}>
                    {item.item.id}
                </div>
                <div className={'product_info_name'}>
                    {item.item.name}
                </div>
            </div>
            <div className={'product_amount'}>
                <input
                    className={'product_amount_input'}
                    value={item.countItem}
                    onChange={(event) => onChange(event, item)}
                />шт.
            </div>
            <div className={'product_price'}>
                {item.item.price * item.countItem} р.
            </div>
        </div>
    )
}

export default FirstCartItem;