import React from "react";

import './AppBar.css';

import LeftBar from "./LeftBar";
import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";

export default class Bar extends React.Component{

    componentDidMount() {
        this.props.getItem()
    }

    render() {
        const { items, isAuthenticated, handleLogout } = this.props;
        return (
            <div>
                <LeftBar items={ items }/>
                <header>
                    <div className={'mainBar'}>
                        <FirstBar/>
                        <SecondBar
                            isAuthenticated={isAuthenticated}
                            handleLogout={handleLogout}
                        />
                    </div>
                </header>
            </div>
        )
    }
}

