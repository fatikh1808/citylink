import React from 'react';

export default class FirstCart extends React.Component {

    render() {
        return (
            <div>
                <div className={'cart_amount_bar'}>
                    <div className={'cart_amount_bar_checkbox'}>
                        <input type={'checkbox'}/>
                    </div>
                    <div className={'cart_amount_bar_amount'}>
                        1 шт.
                    </div>
                    <div className={'cart_amount_bar_price'}>
                        66 р.
                    </div>
                    <div className={'cart_amount_bar_delete'}>
                        <button> x </button>
                    </div>
                </div>
                <div className={'cart_product_content'}>
                    <div className={'check_control'}>
                        <input type={'checkbox'}/>
                    </div>
                    <div className={'product_info'}>
                        <div className={'product_info_img'}>
                            <img src="https://items.s1.citilink.ru/1366926_v01_s.jpg" alt=""/>
                        </div>
                        <div className={'product_info_id'}>
                            1366926
                        </div>
                        <div className={'product_info_name'}>
                            Макароны PASTA ZARA
                        </div>
                    </div>
                    <div className={'product_amount'}>
                        1 шт.
                    </div>
                    <div className={'product_price'}>
                        66 р
                    </div>
                    <div className={'product_delete_button'}>
                        <button> x </button>
                    </div>
                </div>
            </div>
        );
    }
}