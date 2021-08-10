import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import cloudsBackground from './images/Cloud-background.png';
import Search from './Search';
import selectImage from './selectImage';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "25%",
        height: "100vh",
        backgroundColor: "#1E213A",
        animation: "$slide 1s",
        [sizes.down("xl")]: {
            width: "30%",
        },
        [sizes.down("md")]: {
            width: "100%",
            height: "fit-content",
        },
    },
    containerTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem"
    },
    search: {
        backgroundColor: "#6E707A",
        fontSize: "16px",
        padding: "0.5rem 1rem",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.03)"
        }
    },
    locationIcon: {
        backgroundColor: "#6E707A",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.08)"
        }
    },
    images: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        left: "0",
        marginTop: "2rem"
    },
    backgroundImage: {
        position: "relative",
        top: "0",
        left: "0",
        width: "100%",
        opacity: "5%"
    },
    weatherImage: {
        position: "absolute",
        bottom: "auto",
        width: "150px"
    },
    weatherTemp: {
        margin: "2rem auto",
        fontSize: "120px",
        "& span": {
            fontSize: "40px",
            color: "#A09FB1"
        }
    },
    weatherText: {
        margin: "1rem auto",
        fontSize: "32px",
        color: "#A09FB1"
    },
    date: {
        width: "100%",
        display: "flex",
        color: "#A09FB1",
        fontSize: "18px",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem auto"
    },
    location: {
        backgroundColor: "none",
        display: "flex",
        alignItems: "center",
        color: "#A09FB1",
        fontSize: "18px",
        margin: "0rem auto 2rem auto"
    },
    "@keyframes slide": {
        "0%": {
            opacity: 0,
            transform: "translateX(-200%)"
        },
        "100%":{
            opacity: 1,
            transform: "translateX(0)" 
        }
    },
}

const TodayWeather = (props) => {

    const { classes, data, searchLocations, setSearchLocations, loading, handleCurrentLocationClick, handleSearchClick, handleChangeWoeid } = props;
    const currentDate = data && new Date(data.consolidated_weather[0].applicable_date)

    const [showSearch, setShowSearch] = useState(false);

    const handleShowSearchClick = () => {
        setShowSearch(!showSearch);
    }

    return (
        <Fragment>
            {data &&
                <Fragment>
                    {showSearch ?
                        <Search
                            loading={loading}
                            searchLocations={searchLocations}
                            setSearchLocations={setSearchLocations}
                            handleShowSearchClick={handleShowSearchClick}
                            handleSearchClick={handleSearchClick}
                            handleChangeWoeid={handleChangeWoeid}
                        /> :
                        <div className={classes.container}>
                            <div className={classes.containerTop}>
                                <div className={classes.search} onClick={handleShowSearchClick}>Search for places</div>
                                <Avatar className={classes.locationIcon} onClick={handleCurrentLocationClick}><MyLocationIcon /></Avatar>
                            </div>
                            <div className={classes.images}>
                                <img src={cloudsBackground} className={classes.backgroundImage} alt="clouds-background" />
                                <img src={selectImage(data.consolidated_weather[0].weather_state_name)} className={classes.weatherImage} alt="weather" />
                            </div>
                            <div className={classes.weatherTemp}>{Math.floor(data.consolidated_weather[0].the_temp)}<span>°C</span></div>
                            <div className={classes.weatherText}>{data.consolidated_weather[0].weather_state_name}</div>
                            <div className={classes.date}>
                                <div>Today</div>
                                <div style={{ padding: "0 0.8rem" }}>•</div>
                                <div>{currentDate.toUTCString().slice(0, 11)}</div>
                            </div>
                            <div className={classes.location}>
                                <div style={{ paddingRight: "0.5rem" }} className={classes.currentLocationIcon}><LocationOnIcon /></div>
                                <div className={classes.locationText}>{data.title}</div>
                            </div>
                        </div>
                    }
                </Fragment>
            }
        </Fragment>
    );
};

export default withStyles(styles)(TodayWeather);