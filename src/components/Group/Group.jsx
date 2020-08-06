import React from "react";
import {useParams, useRouteMatch} from "react-router-dom";
import '../App.css'
import BreadcrumbsComponent from "../Breadcrumbs";
import GroupItem from "./GroupItem";

const Group = (props) => {

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
                <GroupItem
                group={group}
                section={section}
                groups={groups}
                url={url}
                />
            ))}
        </div>
    )
}
export default Group;