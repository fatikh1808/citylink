import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './AppBar.css'
import {orange} from "@material-ui/core/colors";

export default function SecondBar() {
    return (
        <div className={'second_bar'}>
                <div className={'search_header'}>
                    <div className={'search_icon'}>
                        <SearchIcon style={{ fontSize: 40 }}/>
                    </div>
                    <input
                        className={'search_input'}
                        type={'search'}
                        placeholder={'Поиск по названию товара, марке или категории'}
                        autoComplete={'off'}
                        tabIndex={'1'}
                    />
                </div>
            <div className={'right_side_header'}>
                <div className={'cart_header'}>
                    <div className={'search_icon'}>
                        <ShoppingBasketIcon style={{ fontSize: 30, color: orange[500] }}/>
                    </div>
                    <a className={'header_inner_section_second'} href={'#'}>
                        Корзина
                    </a>
                </div>
            </div>
            <div className={'main_links_column'}>
                <div className={'header_inner_section_list_second'}>
                    <a className={'header_inner_section'} href={'#'}>
                        Аторизация \\ Регистрация
                    </a>
                    <a className={'header_inner_section'} href={'#'}>
                        Список желаний
                    </a>
                </div>
            </div>
        </div>
    )
}