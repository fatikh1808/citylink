import React from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

import './App.css'
import BreadcrumbsComponent from "./Breadcrumbs";
import Item from "./Item";

export default function Group() {

    let { group } = useParams();
    let { path, url } = useRouteMatch();
    return (

        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            {/*<h3>{topicId}</h3>*/}
            <div className={'content_group_name'}>
                <h1 className={'group_name_header'}>
                    { group }
                </h1>
                <div className={'table_links_group'}>
                    <li>
                        <a href={`${url}/mobile`}>
                            Смартфоны
                        </a>
                    </li>
                    <li>
                        <a href={`${url}/mobile`}>
                            Планшеты
                        </a>
                    </li>
                    <li>
                        <a href={`${url}/mobile`}>
                            Мобильные телефоны
                        </a>
                    </li>
                    <li>
                        <a href={'#'}>
                            Аксессуары для планшетов
                        </a>
                    </li>
                    <li>
                        <a href={`${url}/mobile`}>
                            Аксессуары для смартфонов
                        </a>
                    </li>
                </div>
            </div>
            <div className={'content_groups'}>
                <div className={'content_groups_section'}>
                    <h2>
                        <a href={'#'} className={'group_name'}>
                            First
                        </a>
                    </h2>
                    <div className={'group_section_item'}>
                        <div className={'section_item'}>
                            first
                        </div>
                        <div className={'section_item'}>
                            second
                        </div>
                        <div className={'section_item'}>
                            third
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}