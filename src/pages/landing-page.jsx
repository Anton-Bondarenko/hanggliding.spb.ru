import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/content.scss"
import VK, {Group} from "react-vk";
import "../css/var.scss"
import React from "react";
import PageMetadata from "../components/PageMetadata"
import Header from "../components/Header";
import Footer from "../components/Footer";
import YM from "../components/ym"

class LandingPage extends React.Component {

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
        let vkWidth = 800;
        if (this.state.width < (vkWidth - 20)) {
            vkWidth = this.state.width - 20;
        }
        return (
            <>
                <YM/>
                <PageMetadata/>
                <Header/>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="top"
                    justify="center">
                    <Grid item>
                        <Paper elevation={2} className='content-placeholder'>
                            <Grid alignItems={"center"} style={{maxWidth: '30rem'}}>
                                <Grid item alignItems={"center"}>
                                    <h3 style={{textAlign: "center"}}>Дельтапланеризм в Санкт-Петербурге начинается
                                        отсюда</h3>
                                </Grid>
                                <Grid item>
                                    <VK>
                                        <Group groupId={81739716}
                                               options={{mode: 4, no_cover: 1, height: '800px', width: {vkWidth}}}/>
                                    </VK>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={2} style={{
                            maxWidth: "600px",
                            top: "-0.6rem",
                            position: "relative",
                            opacity: "0.8",
                            padding: "1rem"
                        }}>
                            Санкт-Петербургский клуб дельтапланерного спорта "Сокол"- это клуб увлечённых людей 18+,
                            среди которых есть опытные спортсмены, выступающие в самых серьёзных соревнованиях.
                            Пилоты готовы делиться своим опытом со всеми желающими. Для неопытных пилотов спортсмены
                            читают
                            лекции,
                            проводят практические занятия с клубными учебными крыльями. Мы некоммерческая
                            организация
                            и не
                            зарабатываем на этом деньги.
                            Наборы проводятся в конце осени (октябрь-ноябрь). После приобретения начальных навыков
                            группа
                            молодых пилотов
                            обычно едет в Крым на Гору Клементьева совершенствовать свои навыки. Опытные пилоты
                            каждый
                            год
                            организовывают
                            выезды в разнообразные лётные места России и зарубежья. Пилоты из клуба летали в Крыму,
                            на
                            Кавказе (Пятигорск, Чегем),
                            в Казахстане, Австрийских Альпах, в Италии, Словении, Финляндии, Македонии, Болгарии и
                            даже
                            Америке. Участвовали
                            во множестве международных соревнований всех уровней.
                        </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </>
        )
    }
}

export default LandingPage;


