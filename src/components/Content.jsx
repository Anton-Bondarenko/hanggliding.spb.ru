import React from "react";
import "../css/content.scss"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: "no content"};
    }

    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item>
                    <Paper elevation={2} className='content-placeholder'>
                        Content Hello world
                    </Paper>
                </Grid>

            </Grid>
        );
    }
}

export default Content;