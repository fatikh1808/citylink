import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import { Provider } from "react-redux";
import configureStore from "../store";
import Bar from '../containers/Bar'
import WelcomePage from "./WelcomePage/WelcomePage";
import Catalog from "../containers/Catalog";
import Item from "../containers/Item";
import Group from "../containers/Group";
import Section from "../containers/Section";
import Cart from "../containers/Cart";


const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className={'main_app'}>
                    <Bar/>
                    <div className={'main_content'}>
                        <div>
                            <Switch>
                                <Route exact path="/" children={<WelcomePage/>}/>
                                <Route path={'/cart'} children={<Cart/>}/>
                                <Route path="/catalog/:groupId/:section/:id" children={<Item/>}/>
                                <Route path="/catalog/:groupId/:section" children={<Section/>}/>
                                <Route path="/catalog/:groupId" children={<Group/>}/>
                                <Route path="/catalog" children={<Catalog/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
