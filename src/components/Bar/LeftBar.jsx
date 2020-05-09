import React from "react";

import './AppBar.css'
import Categories from "./Categories";

export default function LeftBar(props) {
    const { items } = props;
    return (
        <div className={'leftBar'}>
            <div className={'logo'}>
                <a className={'logo_inner_underline'} href={'#'}>
                    <img alt={'Citylink'} src={'https://theme.s1.citilink.ru/7_1983395500.jpg'} className={'screen'}/>
                </a>
            </div>
            <div className={'menu_categories'}>
                <Categories items={ items }/>
            </div>
        </div>
    )
}