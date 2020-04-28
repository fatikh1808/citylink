import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import './App.css'

import Group from './Group';
import BreadcrumbsComponent from "./Breadcrumbs";

import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TvIcon from '@material-ui/icons/Tv';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MicNoneIcon from '@material-ui/icons/MicNone';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {orange} from "@material-ui/core/colors";
import ListItem from "@material-ui/core/ListItem";

export default function Catalog() {

    let {path, url} = useRouteMatch();

    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            {/*    <Link to={`${url}/mobile`}>Tomato</Link>*/}
            {/*<br/>*/}
            {/*<Link to={`${url}/tv`}>Tv</Link>*/}
            <div className={'catalog_group_name_header'}>
                <h1>
                    Каталог товаров
                </h1>
            </div>
            <div className={'category_catalog'}>
                <ul className={'category_catalog_item'}>
                    <div className={'category_catalog_header'}>
                        <div className={'category_catalog_header_icon'}>
                            <LocalHospitalIcon style={{color: orange[500], fontSize: 35}}/>
                        </div>
                        <div className={'category_catalog_header_name'}>
                            <h4>
                                <Link to={`${url}/localhospital`}>
                                    Товары первой необходимости
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className={'category_catalog_list'}>
                        <Link to={`${url}/laptop`}>
                            Смартфоны
                        </Link>
                    </div>
                </ul>
                <ul className={'category_catalog_item'}>
                    <div className={'category_catalog_header'}>
                        <Link to={`${url}/mobile`}>
                            <div className={'category_catalog_header_icon'}>
                                <SmartphoneIcon style={{color: orange[500], fontSize: 35}}/>
                            </div>
                            <div className={'category_catalog_header_name'}>
                                <h4>
                                    Смартфоны и гаджеты
                                </h4>
                            </div>
                        </Link>
                    </div>
                    <div className={'category_catalog_list'}>
                        <li>
                            <Link to={`${url}/mobile/smartphone`}>
                                Смартфоны
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/mobile/pad`}>
                                Планшеты
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/mobile/phone`}>
                                Мобильные телефоны
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/mobile/pad-accessories`}>
                                Аксессуары для планшетов
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/mobile/smartphone-accessories`}>
                                Аксессуары для смартфонов
                            </Link>
                        </li>
                    </div>
                </ul>
                <ul className={'category_catalog_item'}>
                    <div className={'category_catalog_header'}>
                        <div className={'category_catalog_header_icon'}>
                            <LaptopMacIcon style={{color: orange[500], fontSize: 35}}/>
                        </div>
                        <div className={'category_catalog_header_name'}>
                            <h4>
                                <Link>
                                    Ноутбуки и компютеры
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className={'category_catalog_list'}>
                        <Link>
                            Смартфоны
                        </Link>
                    </div>
                </ul>
                <ul className={'category_catalog_item'}>
                    <div className={'category_catalog_header'}>
                        <div className={'category_catalog_header_icon'}>
                            <TvIcon style={{color: orange[500], fontSize: 35}}/>
                        </div>
                        <div className={'category_catalog_header_name'}>
                            <h4>
                                <Link>
                                    Телевизоры, аудио, видео, Hi-Fi
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className={'category_catalog_list'}>
                        <Link>
                            Смартфоны
                        </Link>
                    </div>
                </ul>
            </div>
            <div className={'category_catalog'}>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
            </div>
            <div className={'category_catalog'}>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
                <ul className={'category_catalog_item'}>

                </ul>
            </div>
        </div>
    )
}