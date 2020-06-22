import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";

import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";

export default function Section(props) {

    let {sectionId} = useParams();
    let {url} = useRouteMatch();

    let {section} = props;
    let {items} = props;
    let {groups} = props;

    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            {console.log(section)}
            {console.log(items)}
            {console.log(groups)}
            {groups.filter(group => group.id === sectionId).map((group) =>(
                <div className={'content_group_name'}>
                    <h1 className={'group_name_header'}>
                        {group.name}
                    </h1>
                    <div className={'content_groups'}>
                        {section.filter(section => section.parent_group_id === group.id).map((section) => (
                            <div className={'content_groups_section'} key={section.id}>
                                <h2>
                                    {section.name}
                                </h2>
                                <div className={'group_section_item'}>
                                    {items.filter(item => item.parent_section_id === section.id).map((item) => (
                                        <div className={'section_item'} key={item.id}>
                                            <Link to={`${url}/${item.id}`}>
                                                <img src={`${item.mainImg}`} alt={'phone'}
                                                     className={'section_product_info_img'}/>
                                                <div className={'section_product_info_name'}>
                                                    {item.name}
                                                </div>
                                            </Link>
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