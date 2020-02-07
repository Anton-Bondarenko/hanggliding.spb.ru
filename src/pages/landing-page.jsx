import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../css/content.scss"
import React from "react";
import VK, {Group} from "react-vk";

export default () => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
    >
        <Grid item>
            <Paper elevation={2} className='content-placeholder'>
                <Grid alignItems={"center"}>
                    <Grid item>
                        <h3>Дельтапланеризм в Санкт-Петербурге начинается отсюда</h3>
                    </Grid>
                    <Grid item>
                        <VK>
                            <Group groupId={81739716} options={{mode:4, no_cover:1, height: 1000, width: 800}}/>
                        </VK>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
)