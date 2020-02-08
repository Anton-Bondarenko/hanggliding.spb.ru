import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/content.scss"
import React from "react";
import VK, {Group} from "react-vk";

export default () => (
        <Grid
            container
            spacing={1}
            direction="row"
            alignItems="top"
            justify="center"
        >
            <Grid item>
                <Paper elevation={2} className='content-placeholder'>
                    <Grid alignItems={"center"}>
                        <Grid item alignItems={"center"}>
                            <h3 style={{textAlign: "center"}}>Дельтапланеризм в Санкт-Петербурге начинается отсюда</h3>
                        </Grid>
                        <Grid item>
                            <VK>
                                <Group groupId={81739716} options={{mode: 4, no_cover: 1, height: 1000, width: 800}}/>
                            </VK>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={2} style={{maxWidth: "20rem", top: "-0.6rem", position: "relative", opacity: "0.8", padding: "1rem"}}>
                        Санкт-Петербургский клуб дельтапланерного спорта "Сокол", это клуб увлечённых людей 18+,
                    среди которых есть опытные спортсмены, выступающие в самых серьёзных соревнованиях.
                    Пилоты готовы делиться своим опытом со всеми желающими. Для неопытных пилотов мастера читают лекции,
                    проводят практические занятия, с клубными учебными крыльями. Мы не коммерческая организация и не зарабатываем на этом денег.
                    Наборы проводятся в конце осени (октябрь-ноябрь). После преобретения начальных навыков, группа молодых пилотов
                    обычно едет в Крым, на Гору Клементьева, совершенствовать свои навыки. Опытные пилоты каждый год организовывают
                    выезды в разннообразные лётные места России и зарубежья. Пилоты из клуба летали в Крыму, на Кавказе(Пятигорск, Чегем),
                    Казахстане, Австрийских Альпах, в Италии, Словении, Финляндии, Македонии, Болгарии и даже Америке. Участвовали
                    во множестве международных соревнований всех уровней.
                </Paper>
            </Grid>
        </Grid>
)