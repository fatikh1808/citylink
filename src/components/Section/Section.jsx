import React from "react";
import {useParams, useRouteMatch} from "react-router-dom";

import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";
import SectionItem from "./SectionItem";

const Section = (props) => {

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
            {groups.filter(group => group.id === sectionId).map((group) => (
                <SectionItem
                    group={group}
                    items={items}
                    section={section}
                    url={url}
                />
            ))}
        </div>
    )
}
export default Section;