import React from "react";

import './AppBar.css';

import LeftBar from "./LeftBar";
import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";

export default function Bar(props) {
    const { items } = props;
    return (
        <div>
            <LeftBar items={ items }/>
            <header>
                <div className={'mainBar'}>
                    <FirstBar/>
                    <SecondBar/>
                </div>
            </header>
        </div>
    )
}

