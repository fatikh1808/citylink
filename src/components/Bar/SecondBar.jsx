import React from "react";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './AppBar.css';
import {orange} from "@material-ui/core/colors";
import {Link} from "react-router-dom";
import AuthButton from "./AuthButton";
import Search from "./Search";

const SecondBar = (props) => {

    const {isAuthenticated, handleLogout} = props;

    return (
        <div className={'second_bar'}>
            <Search/>
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
                    <AuthButton
                        isAuthenticated={isAuthenticated}
                        handleLogout={handleLogout}
                    />
                    <Link className={'header_inner_section'} to={'#'}>
                        # Список желаний
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SecondBar;