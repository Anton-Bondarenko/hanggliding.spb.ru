import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import "../css/header.scss";
import Grid from "@material-ui/core/Grid";
import BackgroundHeader from "../img/banner.jpg"

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
        textTransform: "none"
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
                    <Typography variant="subtitle1" style={{paddingLeft: "2rem", paddingRight: "5rem"}}>
                        Сокол
                    </Typography>
                    <Link underline='none' href='/' style={{color: "whitesmoke", textShadow: "none"}}>
                        Главная
                    </Link>
                    {/*<NavbarText>Дельтапланерный клуб</NavbarText>*/}
                </Toolbar>
            </AppBar>
        </Grid>
    );
}
