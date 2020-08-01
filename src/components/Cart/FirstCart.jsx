import React from 'react';

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
            {boughtItems.map((item, index) => (
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
            ))}
        </div>
    );
}