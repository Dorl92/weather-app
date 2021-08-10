import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import DayWeather from './DayWeather';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        width: "60%",
        justifyContent: "space-between",
        marginTop: "2rem",
        [sizes.down("xl")]: {
            width: "70%",
        },
        [sizes.down("md")]: {
            width: "90%",
            flexWrap: "wrap",
            justifyContent: "center",
        },
    }
}

const WeekWeather = (props) => {
    const { classes, data } = props;
    return (
        <Fragment>
            {data &&
                <div className={classes.container}>
                    <DayWeather data={data.consolidated_weather[1]} tomorrow={true} />
                    <DayWeather data={data.consolidated_weather[2]} />
                    <DayWeather data={data.consolidated_weather[3]} />
                    <DayWeather data={data.consolidated_weather[4]} />
                    <DayWeather data={data.consolidated_weather[5]} />
                </div>
            }
        </Fragment>
    );
};

export default withStyles(styles)(WeekWeather);