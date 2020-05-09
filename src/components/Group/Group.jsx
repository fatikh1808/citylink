import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";

export default function Group(props) {

    function findId(data, idToLookFor) {
        let categoryArray = data;
        for (let i = 0; i < categoryArray.length; i++) {
            if (categoryArray[i].id === idToLookFor) {
                return (categoryArray[i]);
            }
        }
    }


    const {items} = props;
    let {groupId} = useParams();
    let {url} = useRouteMatch();
    let item = findId(items, groupId);
    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            <div className={'content_group_name'}>
                <h1 className={'group_name_header'}>
                    {item.name}
                </h1>
                <div className={'table_links_group'}>
                    {
                        item.categories.map((item, index) => (
                            <li key={item.id}>
                                <Link to={`${url}/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div className={'content_groups'}>
                {item.categories.map((item,) => (
                    <div className={'content_groups_section'} key={item.id}>
                        <h2>
                            <Link to={`${url}/${item.id}`} className={'group_name'}>
                                {item.name}
                            </Link>
                        </h2>
                        <div className={'group_section_item'}>
                            {
                                item.items.map((item) => (
                                    <div className={'section_item'} key={item.id}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}