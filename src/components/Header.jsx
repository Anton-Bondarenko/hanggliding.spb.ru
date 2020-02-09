import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import "../css/header.scss";
import Grid from "@material-ui/core/Grid";
import BackgroundHeader from "../../static/img/banner.jpg"
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));


export default function Header() {
    const classes = useStyles();

    const BackgroundHead = {
        backgroundImage: 'url('+ BackgroundHeader+')',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "300px",
        textTransform: "none",
        justifyContent: "center",
        alignItems: "flex-start"
    }
    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
            style={BackgroundHead}
        >
            <AppBar position="static" className='navbar'>
                <Toolbar>
                    <Typography variant="subtitle1" className={'brandName'} style={{paddingLeft: "0rem", paddingRight: "4rem"}}>
                        Сокол
                    </Typography>
                    <Link underline='none' href='/' style={{color: "whitesmoke", textShadow: "none", paddingRight: "2rem"}}>
                        <HomeIcon style={{fontSize: "1.1em", padding: "0"}}/>
                        Главная
                    </Link>
                    <Link underline='none' href='/contacts' style={{color: "whitesmoke", textShadow: "none", paddingRight: "2rem"}}>
                        Как нас найти
                    </Link>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}
