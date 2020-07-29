import React from 'react';
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import './App.css';
import Bar from '../containers/Bar'
import WelcomePage from "./WelcomePage/WelcomePage";
import Catalog from "../containers/Catalog";
import Item from "../containers/Item";
import Group from "../containers/Group";
import Section from "../containers/Section";
import Cart from "../containers/Cart";
import Auth from "../containers/Auth";
import Register from "../containers/Register";

function App() {

    let location = useLocation();

    let background = location.state && location.state.background;

    return (
        <div className={'main_app'}>
            <Bar/>
            <div className={'main_content'}>
                <div>
                    <Switch location={background || location}>
                        <Route exact path="/" children={<WelcomePage/>}/>
                        <Route path="/auth" children={<Auth/>}/>
                        <Route path="/register" children={<Register/>}/>
                        <Route path={'/cart'} children={<Cart/>}/>
                        <Route path="/catalog/:groupId/:sectionId/:id" children={<Item/>}/>
                        <Route path="/catalog/:groupId/:sectionId" children={<Section/>}/>
                        <Route path="/catalog/:groupId" children={<Group/>}/>
                        <Route path="/catalog" children={<Catalog/>}/>
                    </Switch>

                    {background && <Route path={'/auth'} children={<Auth/>}/>}

                </div>
            </div>
        </div>
    );
}

export default App;
