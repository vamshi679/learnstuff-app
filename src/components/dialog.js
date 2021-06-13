import React from 'react';
import {
  Button,
  IconButton,
  Icon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#454545'
  }
}))

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins'
  }
});

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IconButton color="inherit" aria-label="menu" onClick={handleClickOpen}>
          <Icon>help</Icon>
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          classes={{ paper: classes.paper }}
          aria-labelledby="title"
          aria-describedby="description"
        >
          <DialogTitle id="title">{"Disclaimer"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="description" style={{ color: '#fff',fontSize:'14px' }}>
              This Application provides various resources to Learn and Upgrade technical skills. The content in this application belongs to original content creators.
            </DialogContentText>
            <DialogContentText id="description" style={{ color: '#fff',fontSize:'14px' }}>
              This is beta version of application.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
