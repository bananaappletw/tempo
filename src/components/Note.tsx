import React, { useEffect, useRef, createRef } from 'react';
import { Box, CssBaseline, makeStyles } from '@material-ui/core';

// @ts-ignore
import Vex from 'vexflow';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

const Note: React.FC = () => {
  const classes = useStyles();
  const noteEl = useRef(null);

  //const noteEl = document.getElementById("boo")
  useEffect(() => {
    if (noteEl != null) {
      const notes = [
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "8d" }),
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "8d" }),
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "8d" }),
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "8d" })
      ];
      const beams = [
        new Vex.Flow.Beam(notes)
      ]
      var renderer = new Vex.Flow.Renderer(noteEl.current, Vex.Flow.Renderer.Backends.SVG);

      renderer.resize(100, 100);
      const context = renderer.getContext();

      const stave = new Vex.Flow.Stave(0, 0, 100);

      Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
      beams.forEach(function (b) { b.setContext(context).draw() })
    }
  }, [noteEl])

  return (
    <div className={classes.root} ref={noteEl}>
    </div>
  );
}

export default Note;
