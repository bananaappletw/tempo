import React, { useEffect } from 'react';
import { Box, CssBaseline, makeStyles } from '@material-ui/core';
import { SettingPage, HomePage } from '../pages';
import { Header } from '.';
import { Route,Switch } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  header: {
    backgroundColor: theme.palette.secondary.main
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.app}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.content}>
        <Switch>
          <Route path="/settings">
            <SettingPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
