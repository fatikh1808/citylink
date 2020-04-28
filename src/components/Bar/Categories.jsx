import React from 'react';

import ListItem from '@material-ui/core/ListItem';
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
import BuildIcon from '@material-ui/icons/Build';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import './AppBar.css';
import {orange} from "@material-ui/core/colors";
import lightBlue from "@material-ui/core/colors/lightBlue";

export default function Categories() {

    return (
        <div>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LocalHospitalIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Товары первой необходимости
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <SmartphoneIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Смартфоны и гаджеты
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LaptopMacIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Ноутбуки и компютеры
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <TvIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Телевизоры, аудио, видео, Hi-Fi
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LocalLaundryServiceIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Бытовая техника для дома и кухни
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <PhotoCameraIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Фото, видео, системы безопасности
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <DriveEtaIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Автомобильная электроника
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <MicNoneIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Канцтовары, Мебель и Офисная техника
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <DirectionsBikeIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Активный отдых, спорт и хобби
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <VideogameAssetIcon style={{color: orange[500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Товары для геймеров
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <BuildIcon style={{color: lightBlue [500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Сервисы и услуги
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <MonetizationOnIcon style={{color: lightBlue [500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Уцененные товары
                </h6>
            </ListItem>
            <ListItem button>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <CardGiftcardIcon style={{color: lightBlue [500], fontSize: 35}}/>
                </ListItemIcon>
                <h6>
                    Подарочные сертификаты
                </h6>
            </ListItem>
        </div>
    );
}