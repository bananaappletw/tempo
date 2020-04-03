import React, { useState, useEffect } from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import { useParams, useHistory, Route, Switch, Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  navigationContent: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
const SettingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box m={4} p={4}>
        settings
      </Box>
    </Box>
  );
};

export default SettingPage;
