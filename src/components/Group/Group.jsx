import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";

export default function Group(props) {

    let {groupId} = useParams();
    let {url} = useRouteMatch();
    let {groups} = props;
    let {catalog} = props;
    let {section} = props;

    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            {catalog.filter(thing => thing.id === groupId).map((group) => (
                <div className={'content_group_name'}>
                    <h1 className={'group_name_header'}>
                        {group.name}
                    </h1>
                    <div className={'table_links_group'}>
                        {groups.filter(item => item.parent_id === group.id).map((item) => (
                            <li key={item.id}>
                                <Link to={`${url}/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className={'content_groups'}>
                        {groups.filter(item => item.parent_id === group.id).map((item) => (
                            <div className={'content_groups_section'} key={item.id}>
                                <h2>
                                    <Link to={`${url}/${item.id}`} className={'group_name'}>
                                        {item.name}
                                    </Link>
                                </h2>
                                <div className={'group_section_item'}>
                                    {section.filter(section => section.parent_group_id === item.id).map((item) => (
                                        <div className={'section_item'} key={item.id}>
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}