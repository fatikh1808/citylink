import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import './AppBar.css';
import {orange} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

export default function SecondBar(props) {

    const {isAuthenticated, handleLogout} = props;

    function authButton() {
        if (isAuthenticated) {
            return (
                <button className={'auth_icon'} onClick={handleLogout}>
                    <PermIdentityIcon style={{fontSize: 30, color: orange[500]}}/>
                </button>
            )
        } else {
            return (
                <Link className={'header_inner_section_auth'} to={'/auth'}>
                    Вход | Регистрация
                </Link>
            )
        }
    }

    return (
        <div className={'second_bar'}>
            <div className={'search_header'}>
                <div className={'search_icon'}>
                    <SearchIcon style={{fontSize: 25}}/>
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
                    <div className={'cart_icon'}>
                        <ShoppingBasketIcon style={{fontSize: 30, color: orange[500]}}/>
                    </div>
                    <Link className={'header_inner_section_second'} to={'/cart'}>
                        Корзина
                    </Link>
                </div>
            </div>
            <div className={'main_links_column'}>
                <div className={'header_inner_section_list_second'}>
                    {authButton()}
                    <Link className={'header_inner_section'} to={'#'}>
                        # Список желаний
                    </Link>
                </div>
            </div>
        </div>
    )
}