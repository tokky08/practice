import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
// import { RestoreIcon, FavoriteIcon, LocationOnIcon } from '@material-ui/icons';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SimpleBottomNavigation = () => {
    const useStyles = makeStyles({
        root: {
            width: 500,
        },
    });
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}

export default SimpleBottomNavigation