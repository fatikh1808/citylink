import React from 'react';
import { useHistory } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icons from "../Icons";
import './AppBar.css';


export default function Categories(props) {

    const history = useHistory();
    const { items } = props;
    return (
        <div>
            {items.map((item, index) => (
                <ListItem button onClick={() => history.push(`/catalog/${item.id}`)} key={item.id}>
                    <ListItemIcon style={{minWidth: '35px'}}>
                        {Icons[index]}
                    </ListItemIcon>
                    <h6>
                        {item.name}
                    </h6>
                </ListItem>
            ))}
        </div>
    );
}