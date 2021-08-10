import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PuffLoader from "react-spinners/PuffLoader";

import sizes from './sizes';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "calc(25% - 4rem)",
        backgroundColor: "#1E213A",
        padding: "2rem",
        height: "calc(100vh - 4rem)",
        animation: "$slide 0.5s",
        [sizes.down("xl")]: {
            width: "calc(30% - 4rem)",
        },
        [sizes.down("md")]: {
            width: "calc(100% - 4rem)",
        },
    },
    close: {
        margin: "0 0 1rem auto",
        "&:hover": {
            cursor: "pointer"
        }
    },
    searchBar: {
        display: "flex",
        justifyContent: "center"
    },
    searchInput: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "43.2px",
        width: "100%",
        border: "1px solid #E7E7EB",
        marginRight: "0.5rem",
        color: "#616475",
        "& input": {
            backgroundColor: "#1E213A",
            border: "none",
            fontSize: "16px",
            height: "40px",
            fontFamily: "inherit",
            color: "#E7E7EB",
            outline: "none",
            width: "80%",
        }
    },
    searchIcon: {
        padding: "0 0.5rem"
    },
    button: {
        backgroundColor: "#3C47E9",
        padding: "12px 20px",
        fontSize: "16px",
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#222cb6",
        }
    },
    searchResults: {
        margin: "2rem 0",
        textAlign: "left"
    },
    searchOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 1rem 1.5rem 1rem",
        marginBottom: "1rem",
        border: "1px solid #1E213A",
        "&:hover": {
            border: "1px solid #616475",
            cursor: "pointer",
            "& $arrow": {
                visibility: "visible"
            }
        }
    },
    arrow: {
        color: "#616475",
        visibility: "hidden"
    },
    spinner:{
        color: "#616475",
        display: "flex",
        alignItems: "center",
        margin: "4rem auto"
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
    "@keyframes slide-exit": {
        "0%": {
            opacity: 1,
            transform: "translateX(0)"
        },
        "100%":{
            opacity: 0,
            transform: "translateX(-200%)" 
        }
    }
}

const Search = (props) => {
    const { classes, searchLocations,setSearchLocations, loading, handleShowSearchClick, handleSearchClick, handleChangeWoeid } = props;

    const [search, setSearch] = useState('');

    const handleSearchChange = (evt) => {
        setSearch(evt.target.value);
    }

    const handleClick = () => {
        handleSearchClick(search)
    }

    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.close} onClick={handleShowSearchClick}><CloseIcon /></div>
                <div className={classes.searchBar}>
                    <div className={classes.searchInput}>
                        <SearchIcon className={classes.searchIcon} />
                        <input
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search location" />
                    </div>
                    <div onClick={handleClick} className={classes.button}>Search</div>
                </div>
                {loading ? <div className={classes.spinner}><PuffLoader color="#E7E7EB" /></div> :
                    <div className={classes.searchResults}>
                        {searchLocations && searchLocations.slice(0, 5).map((location) =>
                            <div className={classes.searchOption} key={location.title} onClick={() => {
                                handleChangeWoeid(location.woeid);
                                handleShowSearchClick();
                                setSearchLocations([])
                            }
                            }>
                                {location.title}
                                <ChevronRightIcon className={classes.arrow} />
                            </div>
                        )}
                    </div>
                }
            </div>
        </Fragment>
    );
};

export default withStyles(styles)(Search);