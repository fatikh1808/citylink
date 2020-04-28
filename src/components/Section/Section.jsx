import React from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

import './App.css'
import BreadcrumbsComponent from "./Breadcrumbs";
import Item from "./Item";

export default function Section() {

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
                    {group}
                </h1>
                <div className={'table_links_group'}>
                    <li>
                        <Link to={`${url}/mobile`}>
                            Смартфоны
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/mobile`}>
                            Планшеты
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/mobile`}>
                            Мобильные телефоны
                        </Link>
                    </li>
                    <li>
                        <Link to={'#'}>
                            Аксессуары для планшетов
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/mobile`}>
                            Аксессуары для смартфонов
                        </Link>
                    </li>
                </div>
            </div>
            <div className={'content_groups'}>
                <div className={'content_groups_section'}>
                    <h2>
                        <Link to={'#'} className={'group_name'}>
                            First
                        </Link>
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