import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import ProgressBar from "@ramonak/react-progress-bar";
import ExploreIcon from '@material-ui/icons/Explore';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        color: "#E7E7EB",
        margin: "2rem 0 1rem 0",
        [sizes.down("xl")]: {
            width: "70%",
        },
        [sizes.down("md")]: {
            width: "90%",
        },
    },
    title: {
        fontWeight: "700",
        fontSize: "24px",
        textAlign: "left",
        marginBottom: "2rem"
    },
    grid: {
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(2, 48%)",
        gridGap: "2rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        },
    },
    section: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        backgroundColor: "#1E213A",
        paddingBottom: "2rem"
    },
    subtitle: {
        fontSize: "16px",
        paddingTop: "1.5rem"
    },
    data: {
        fontSize: "60px",
        fontWeight: "700",
        "& span": {
            fontSize: "32px",
            fontWeight: "500",
        }
    },
    bar: {
        paddingTop: "1.5rem"
    },
    wind: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1rem"
    }
}

const MoreInfo = (props) => {
    const { classes, data } = props;
    return (
        <Fragment>
            {data &&
                <div className={classes.container}>
                    <div className={classes.title}>Today's Highlights</div>
                    <div className={classes.grid}>
                        <div className={classes.section}>
                            <div className={classes.subtitle}>Wind status</div>
                            <div className={classes.data}>{Math.floor(data.consolidated_weather[0].wind_speed)} <span>mph</span></div>
                            <div className={classes.wind}><ExploreIcon style={{color: "#616475", paddingRight: "0.5rem"}} />{data.consolidated_weather[0].wind_direction_compass}</div>
                        </div>
                        <div className={classes.section}>
                            <div className={classes.subtitle}>Humidity</div>
                            <div className={classes.data}>{data.consolidated_weather[0].humidity}<span>%</span></div>
                            <div className={classes.bar}>
                                <ProgressBar
                                    completed={data.consolidated_weather[0].humidity}
                                    margin="0 auto"
                                    width="70%"
                                    height="10px"
                                    bgColor="#FFEC65"
                                    baseBgColor="#E7E7EB"
                                    isLabelVisible={false}
                                />
                            </div>

                        </div>
                        <div className={classes.section}>
                            <div className={classes.subtitle}>Visibility</div>
                            <div className={classes.data}>{Math.floor(data.consolidated_weather[0].visibility)} <span>miles</span></div>

                        </div>
                        <div className={classes.section}>
                            <div className={classes.subtitle}>Air Pressure</div>
                            <div className={classes.data}>{Math.floor(data.consolidated_weather[0].air_pressure)} <span>mb</span></div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default withStyles(styles)(MoreInfo);