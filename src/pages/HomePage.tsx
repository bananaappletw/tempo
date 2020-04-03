import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Route, Switch, useRouteMatch } from "react-router-dom";

import { Box, makeStyles, Button } from "@material-ui/core";
// @ts-ignore
import * as Tone from 'tone'
// @ts-ignore
import Vex from 'vexflow';

import AppContext from "../contexts";
import { Note } from "../components";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(4)
  },
  navigationContent: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const HomePage: React.FC = () => {
  const app = useContext(AppContext)
  const classes = useStyles();
  useEffect(() => {
    // const synth = new Tone.Synth().toMaster()
    var synth = new Tone.Synth().toMaster()

    //pass in an array of events
    var part = new Tone.Part(function (time: any, event: any) {
      //the events will be given to the callback with the time they occur
      synth.triggerAttackRelease(event.note, event.dur, time)
    }, [{ time: 0, note: 'C4', dur: '4n' },
    { time: { '4n': 1, '8n': 1 }, note: 'E4', dur: '8n' },
    { time: '2n', note: 'G4', dur: '16n' },
    { time: { '2n': 1, '8t': 1 }, note: 'B4', dur: '4n' }])

    //start the part at the beginning of the Transport's timeline
    part.start(0)

    //loop the part 3 times
    part.loop = 3
    part.loopEnd = '1m'
    //synth.triggerAttackRelease("C4", "8n");
  }, [])
  const startGame = () => {
    Tone.Transport.toggle()
  }
  return (
    <Box className={classes.root}>
      {app.bpm}
      <Note/>
      <Button onClick={startGame}>
        Start Game
      </Button>
    </Box>
  );
};
export default HomePage;
