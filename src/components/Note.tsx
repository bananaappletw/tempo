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

interface NoteProps {
  notes: any[]

}

const Note: React.FC<NoteProps> = ({ notes }) => {
  const classes = useStyles();
  const noteEl = useRef(null);

  useEffect(() => {
    const renderer = new Vex.Flow.Renderer(noteEl.current, Vex.Flow.Renderer.Backends.SVG);
    renderer.resize(100, 100);
    const context = renderer.getContext();
    const stave = new Vex.Flow.Stave(0, 0, 100);
    stave.setContext(context).draw();
    const beams = Vex.Flow.Beam.generateBeams(notes)
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach((b: any) => { b.setContext(context).draw() })
  }, [])

  return (
    <div className={classes.root} ref={noteEl}>
    </div>
  );
}

export default Note;
