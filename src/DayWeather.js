import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import selectImage from './selectImage';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "120px",
        height: "177px",
        alignItems: "center",
        marginLeft: props => props.tomorrow ? "0rem" : "1rem",
        backgroundColor: "#1E213A",
        color: "white",
        fontSize: "16px",
        [sizes.down("md")]: {
            marginTop: "1rem"
        },
    },
    title: {
        marginTop: "1rem"
    },
    image: {
        "& img": {
            width: "60%",
            marginRight: "0.9rem"
        }
    },
    temp: {
        display: "flex",
        margin: "1rem"
    },
    maxTemp: {
        paddingRight: "0.6rem"
    },
    minTemp: {
        color: "#A09FB1",
        paddingLeft: "0.6rem"
    }
}

const DayWeather = (props) => {
    const { classes, data, tomorrow } = props;
    const date = data && new Date(data.applicable_date)

    return (
        <Fragment>
            {data &&
                <div className={classes.container}>
                    <div className={classes.title}>{tomorrow ? 'Tomorrow' : date.toUTCString().slice(0, 11)}</div>
                    <div className={classes.image}><img src={selectImage(data.weather_state_name)} alt="sleet" /></div>
                    <div className={classes.temp}>
                        <div className={classes.maxTemp}>{Math.floor(data.max_temp)}<span>°C</span></div>
                        <div className={classes.minTemp}>{Math.floor(data.min_temp)}<span>°C</span></div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default withStyles(styles)(DayWeather);