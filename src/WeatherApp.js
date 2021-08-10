import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/styles';

import TodayWeather from './TodayWeather';
import WeatherData from './WeatherData';

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        height: "100vh",
        [sizes.down("md")]: {
            flexDirection: "column",
        },
    }
}

const WeatherApp = (props) => {

    const { classes } = props;
    const [woeid, setWoeid] = useState();
    const [searchLocations, setSearchLocations] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_APIKEY}`)
            .then(res => getWoeid(res.data.location.lat, res.data.location.lng))
            .catch(error => console.log(error))
    }, [])

    

    useEffect(() => {
        if (woeid) {
            axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}/`)
                .then(res => {
                    let data = JSON.stringify(res.data)
                    setData(JSON.parse(data))
                })
                .catch(error => console.log(error))
        }
    }, [woeid])

    const handleSearchClick = async (text) => {
        console.log(text)
        setLoading(true)
        await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${text}`)
            .then(res => setSearchLocations(res.data))
            .catch(error => console.log(error))
        setLoading(false)
    }

    const handleCurrentLocationClick = async () => {
        await axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_APIKEY}`)
            .then(res => getWoeid(res.data.location.lat, res.data.location.lng))
            .catch(error => console.log(error))
    }

    const getWoeid = async (lat, lon) => {
        await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`)
            .then(res => setWoeid(res.data[0].woeid))
            .catch(error => console.log(error))
    }

    const handleChangeWoeid = (woeid) => {
        setWoeid(woeid);
    }

    return (
        <div className={classes.container}>
            <TodayWeather
                data={data}
                loading={loading}
                searchLocations={searchLocations}
                setSearchLocations={setSearchLocations}
                handleCurrentLocationClick={handleCurrentLocationClick}
                handleSearchClick={handleSearchClick}
                handleChangeWoeid={handleChangeWoeid} />
            <WeatherData data={data} />
        </div>
    );
};

export default withStyles(styles)(WeatherApp);


