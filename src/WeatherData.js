import React from 'react';
import { withStyles } from '@material-ui/styles';
import WeekWeather from './WeekWeather';
import MoreInfo from './MoreInfo';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        [sizes.down("md")]: {
            width: "100%",
        },
    }
}

const WeatherData = (props) => {
    const { classes, data } = props;
    return (
        <div className={classes.container}>
            <WeekWeather data={data} />
            <MoreInfo data={data} />
        </div>
    );
};

export default withStyles(styles)(WeatherData);