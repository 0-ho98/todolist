import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    left:0,
    position: "fixed",
    background: "white",
    zIndex: 100
  },
});

const Navigation = () => {
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
      <BottomNavigationAction label="My Calendar" icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="Add Calendar" icon={<AddIcon />} />
      <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
