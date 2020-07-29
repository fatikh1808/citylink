import React from "react";

import './AppBar.css'
import {Link} from "react-router-dom";

export default function FirstBar(props) {

    return (
        <div className={'first_bar'}>
            <div className={'header_inner_notifications'}>
                <div className={'header_inner_phone'}>
                   <p className={'dropdown_toogle'}>
                       +79963372941
                   </p>
                    <p className={'header_inner_coll'}>
                        Moscow
                    </p>
                </div>
            </div>
            <div className={'header_inner'}>
            <div className={'header_inner_section_list'}>
                <Link className={'header_inner_section'} to={'#'}>
                    Арсенал  #
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Акции
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Информация
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Ситилинк.Бизнес
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Доставка
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Адреса магазинов
                </Link>
                <Link className={'header_inner_section'} to={'#'}>
                    Обратная связь
                </Link>
            </div>
            </div>
        </div>
    )
}