import React from "react";

import './AppBar.css';

import LeftBar from "./LeftBar";
import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";

export default function Bar() {
    return (
        <div>
            <LeftBar/>
            <header>
                <div className={'mainBar'}>
                    <FirstBar/>
                    <SecondBar/>
                </div>
            </header>
        </div>
    )
}

