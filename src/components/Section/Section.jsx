import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";

import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";

export default function Section(props) {

    function findId(data, idToLookFor) {
        let categoryArray = data;
        for (let i = 0; i < categoryArray.length; i++) {
            let j = 0;
            while (j < categoryArray[i].categories.length) {
                if (categoryArray[i].categories[j].id === idToLookFor) {
                    return categoryArray[i].categories[j]
                }
                if (categoryArray[i].categories[j] === []) break;
                j++;
            }
        }
    }


    const {items} = props;
    let {section} = useParams();
    let {url} = useRouteMatch();
    let item = findId(items, section);
    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            <div className={'content_group_name'}>
                <h1 className={'group_name_header'}>
                    {item.name}
                </h1>
            </div>
            <div className={'content_groups'}>
                {item.items.map((item) => (
                    <div className={'content_groups_section'} key={item.id}>
                        <h2>
                            {item.name}
                        </h2>
                        <div className={'group_section_item'}>
                            {item.items.map((item, index) => (
                                <div className={'section_item'} key={index}>
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
    )
}