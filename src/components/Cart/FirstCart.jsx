import React from 'react';

export default function FirstCart(props) {

    let {boughtItems} = props;

    console.log(boughtItems);
    return (
        <div>
            <div className={'cart_amount_bar'}>
                <div className={'cart_amount_bar_checkbox'}>
                    <input type={'checkbox'} className={'cart_checkbox'}/>
                </div>
                <div className={'cart_amount_bar_amount'}>
                    1 шт.
                </div>
                <div className={'cart_amount_bar_price'}>
                    66 р.
                </div>
                <div className={'cart_amount_bar_delete'}>
                    <button
                        className={'cart_amount_bar_delete_button'}
                    > x
                    </button>
                </div>
            </div>
            {boughtItems.map((item, index) => (
                <div className={'cart_product_content'} key={index}>
                    <div className={'check_control'}>
                        <input type={'checkbox'} className={'cart_checkbox'}/>
                    </div>
                    <div className={'product_info'}>
                        <div className={'product_info_img'}>
                            <img className={'product_info_img_img'} src={item.item.mainImg} alt="123456"/>
                        </div>
                        <div className={'product_info_id'}>
                            {item.item.id}
                        </div>
                        <div className={'product_info_name'}>
                            {item.item.name}
                        </div>
                    </div>
                    <div className={'product_amount'}>
                        <input className={'product_amount_input'}/>шт.
                    </div>
                    <div className={'product_price'}>
                        {item.item.price}
                    </div>
                </div>
            ))}
        </div>
    );
}