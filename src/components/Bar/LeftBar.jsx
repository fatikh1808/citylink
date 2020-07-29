import React from "react";

import './AppBar.css'
import Categories from "./Categories";
import {Link} from "react-router-dom";

export default function LeftBar(props) {
    const { items } = props;
    return (
        <div className={'leftBar'}>
            <div className={'logo'}>
                <Link className={'logo_inner_underline'} to={'/'}>
                    <img alt={'Citylink'} src={'https://static.citilink.ru/media/global/logo.png?1592475178'} className={'screen'}/>
                </Link>
            </div>
            <div className={'menu_categories'}>
                <Categories items={ items }/>
            </div>
        </div>
    )
}