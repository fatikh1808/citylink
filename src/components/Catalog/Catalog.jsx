import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

import '../App.css'

import BreadcrumbsComponent from "../Breadcrumbs";
import Icons from "../Icons";

export default function Catalog(props) {

    let {url} = useRouteMatch();

    const { items } = props;

    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            <div className={'catalog_group_name_header'}>
                <h1>
                    Каталог товаров
                </h1>
            </div>
            {items.map((item, index) => (
                <div className={'category_catalog'} key={item.id}>
                    <ul className={'category_catalog_item'}>
                        <div className={'category_catalog_header'}>
                            <div className={'category_catalog_header_icon'}>
                                {Icons[index]}
                            </div>
                            <div className={'category_catalog_header_name'}>
                                <h4>
                                    <Link to={`${url}/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className={'category_catalog_list'}>
                            {item.categories.map((category) => (
                                <Link to={`${url}/${category.id}`} key={category.id}
                                      className={'category_catalog_list_name_header'}>
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </ul>
                </div>
            ))}
        </div>
    )
}