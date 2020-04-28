import React from "react";

import './AppBar.css'

export default function FirstBar() {
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
                <div className={'header_inner_holiday_time'}>
                    <a className={'.pretty_button_of_new'} href={'#'}>
                        Казань Натана Рахлина
                    </a>
                </div>
            </div>
            <div className={'header_inner'}>
            <div className={'header_inner_section_list'}>
                <a className={'header_inner_section'} href={'#'}>
                    Арсенал
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Акции
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Информация
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Ситилинк.Бизнес
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Доставка
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Адреса магазинов
                </a>
                <a className={'header_inner_section'} href={'#'}>
                    Обратная связь
                </a>
            </div>
            </div>
        </div>
    )
}