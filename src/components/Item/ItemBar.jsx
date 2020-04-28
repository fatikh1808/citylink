import React from 'react';

import './Item.css'

export default function ItemBar() {
    return(
        <div className={'item_bar_content'}>
            <div className={'item_bar_content_first_line'}>
                <span className={'bonus_line'}>
                    +89 bonus
                </span>
            </div>
            <div className={'item_bar_content_second_line'}>
                <div className={'item_price_box'}>
                    <div className={'price_break'}>
                        <ins className={'num'}>
                            8888
                        </ins>
                        <ins className={'rub'}>
                            руб.
                        </ins>
                    </div>
                    <div className={'club_price'}>
                        <ins className={'club_num'}>
                            8888
                        </ins>
                        <ins className={'club_rub'}>
                            р
                        </ins>
                    </div>
                </div>
                <div className={'item_button_box'}>
                    <button className={'add_to_cart'}>
                        В корзину
                    </button>
                    <div className={'item_credit_box'}>
                        <div className={'item_credit_box_first'}>
                            7984658456
                        </div>
                        <div className={'item_credit_box_second'}>
                            79846589465
                        </div>
                    </div>
                </div>
            </div>
            <div className={'item_bar_content_third_line'}>
                <div className={'item_bar_wishlist_button'}>
                    <button className={'item_bar_button'}>
                        В желания
                    </button>
                </div>
                <div className={'item_bar_compare_button'}>
                    <button className={'item_bar_button'}>
                        К сравнению
                    </button>
                </div>
            </div>
        </div>
    )
}