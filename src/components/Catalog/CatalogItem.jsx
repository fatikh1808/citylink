import React from "react";
import Icons from "../Icons";
import {Link} from "react-router-dom";

const CatalogItem = (props) => {

    const {
        item,
        index,
        groups,
        url
    } = props;

    return (
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
                    {groups.filter(thing => thing.parent_id === item.id).map((group) => (
                        <Link to={`${url}/${group.id}`} key={group.id}
                              className={'category_catalog_list_name_header'}>
                            {group.name}
                        </Link>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default CatalogItem;