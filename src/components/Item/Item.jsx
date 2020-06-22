import React from "react";

import './Item.css'
import BreadcrumbsComponent from "../Breadcrumbs";
import ItemBar from "./ItemBar";
import {useParams} from "react-router-dom";

export default function Item(props) {

    let {id} = useParams();
    const {items} = props;

    return (
        <div>
        {
            items.filter(item => item.id === id).map((item) => (
                <div>
                    <div className={'item_content'}>
                        <div className={'breadcrumbs_item'}>
                            <BreadcrumbsComponent/>
                        </div>
                        <div className={'product_details'}>
                            <div className={'product_id'}>
                                {item.id}
                            </div>
                            <div className={'product_sales_indicator'}>
                                Скидки 99%
                            </div>
                        </div>
                        <div className={'product_header'}>
                            <h1>
                                {item.name}
                                {item.color}
                                {item.memory}
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
                            <img src={`${item.mainImg}`}
                                 alt="Смартфон SAMSUNG Galaxy A10 32Gb,  SM-A105F,  черный"/>
                        </div>
                        <div className={'overview_container'}>
                            {
                                item.imgs.map((item) => (
                                    <div className={'photo_carousel_link'}>
                                        <img src={`${item.img}`}
                                             alt={`${item.alt}`}
                                             className="photo_carousel_link_photo"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h2>
                                Основные характеристики
                            </h2>
                            <div className={'short_description'}>
                                {item.info}
                            </div>
                        </div>
                    </div>
                    <div className={'item_bar'}>
                        <ItemBar item={item}/>
                    </div>
                </div>
            ))
        }
        </div>
    )
}