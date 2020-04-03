import React, { MouseEvent } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <Button component={Link} to="/" startIcon={<MusicNoteIcon />}>
              Tempo
            </Button>
          </Grid>

          <Grid item>
            <Button component={Link} to="/settings">
              <SettingsIcon />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
