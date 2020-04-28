import React from "react";

import './Item.css'
import BreadcrumbsComponent from "./Breadcrumbs";
import ItemBar from "./ItemBar";
import {useParams} from "react-router-dom";

export default function Item() {

    let { id } = useParams();

    return (
        <div>
            <div className={'item_content'}>
                <div className={'breadcrumbs_item'}>
                    <BreadcrumbsComponent/>
                </div>
                <div className={'product_details'}>
                    <div className={'product_id'}>
                        123456789
                    </div>
                    <div className={'product_sales_indicator'}>
                        Скидки 99%
                    </div>
                </div>
                <div className={'product_header'}>
                    <h1>
                        Название продукта {id}
                    </h1>
                </div>
                <div className={'product_info_switcher'}>
                    <a className={'product_info_tab'}>
                        Характеристики
                    </a>
                    <a className={'product_info_tab'}>
                        Аксессуары
                    </a>
                    <a className={'product_info_tab'}>
                        Услуги
                    </a>
                    <a className={'product_info_tab'}>
                        Обзоры
                    </a>
                    <a className={'product_info_tab'}>
                        Отзывы
                    </a>
                    <a className={'product_info_tab'}>
                        Вопрос-ответ
                    </a>
                    <a className={'product_info_tab'}>
                        Сертификаты
                    </a>
                </div>
                <div className={'full_content'}>
                    <img src="https://items.s1.citilink.ru/1139317_v01_b.jpg"
                         alt="Смартфон SAMSUNG Galaxy A10 32Gb,  SM-A105F,  черный"/>
                </div>
                <div className={'overview_container'}>
                    <a className="photo_carousel_link__js" href="https://items.s1.citilink.ru/1139317_v01_b.jpg"
                       data-parent-id="item-1">
                        <img src="https://items.s1.citilink.ru/1139317_v01_s.jpg"
                             alt="Смартфон SAMSUNG Galaxy A10 32Gb,  SM-A105F,  черный вид 1" itemProp="contentUrl"
                             className="mCS_img_loaded"/>
                    </a>
                    <a className="photo_carousel_link__js" href="https://items.s1.citilink.ru/1139317_v02_b.jpg"
                       data-parent-id="item-2">
                        <img src="https://items.s1.citilink.ru/1139317_v02_s.jpg"
                             alt="Смартфон SAMSUNG Galaxy A10 32Gb,  SM-A105F,  черный вид 2"
                             className="mCS_img_loaded"/>
                    </a>
                    <a className="photo_carousel_link__js" href="https://items.s1.citilink.ru/1139317_v03_b.jpg"
                       data-parent-id="item-3">
                        <img src="https://items.s1.citilink.ru/1139317_v03_s.jpg"
                             alt="Смартфон SAMSUNG Galaxy A10 32Gb,  SM-A105F,  черный вид 3"
                             className="mCS_img_loaded"/>
                    </a>
                </div>
                <div>
                    <h2>
                        Основные характеристики
                    </h2>
                    <div className={'short_description'}>

                    </div>
                </div>
            </div>
            <div className={'item_bar'}>
                <ItemBar/>
            </div>
        </div>
    )
}