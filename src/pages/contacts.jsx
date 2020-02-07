import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/content.scss"
import React from "react";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => (
    <>
        <Header/>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item>
                <Paper elevation={2} className='content-placeholder'>
                    <Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Мы находимся здесь</Typography>
                        </Grid>
                        <Grid item>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CKQ0JPnK" width="560" height="400"
                                    frameBorder="1" title="maps"
                                    allowFullScreen="true"/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <Footer/>
    </>
)