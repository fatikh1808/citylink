import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const handleClick = (event) => {
    event.preventDefault();
}

export default function BreadcrumbsComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick} style={{fontSize: 13}}>
                    Material-UI
                </Link>
                <Link color="inherit" href="#" onClick={handleClick} style={{fontSize: 13}}>
                    Core
                </Link>
                <Typography color="textPrimary" style={{fontSize: 13}}>Breadcrumb</Typography>
            </Breadcrumbs>
        </div>
    )
}