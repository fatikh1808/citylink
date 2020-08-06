import React from "react";
import {useRouteMatch} from "react-router-dom";

import '../App.css'

import BreadcrumbsComponent from "../Breadcrumbs";
import CatalogItem from "./CatalogItem";

const Catalog = (props) => {

    let {url} = useRouteMatch();
    let {catalog} = props;
    let {groups} = props;

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
            {catalog.map((item, index) => (
                <CatalogItem
                    item={item}
                    index={index}
                    groups={groups}
                    url={url}
                />
            ))}
        </div>
    )
}

export default Catalog;