import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/content.scss"
import React from "react";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageMetadata from "../components/PageMetadata";

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        let yandexWidth = 800;
        if (this.state.width < (yandexWidth - 20)) {
            yandexWidth = this.state.width - 20;
        }
        return (
            <>
                <PageMetadata/>
                <Header/>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="top"
                    justify="center"
                >
                    <Grid item>
                        <Paper elevation={2} className='content-placeholder' style={{maxWidth: "800px", padding: "1rem"}}>
                            Мы находимся в здании бывшего завода Степана Разина недалеко от Обводного канала, в районе
                            м. Балтийская.
                            Клубный день-пятница. Перед посещением, свяжитесь с кем-нибудь из нас, он поможет найти наше
                            помещение.
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={2} className='content-placeholder'>
                            <Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">Мы находимся здесь</Typography>
                                </Grid>
                                <Grid item>
                                    <iframe src="https://yandex.ru/map-widget/v1/-/CKQ0JPnK" width={yandexWidth} height="400"
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
    }
}
export default Contacts;