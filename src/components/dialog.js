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
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  }
});

export default function AlertDialog() {
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
          PaperProps={{
            sx: { backgroundColor: '#454545' }
          }}
          aria-labelledby="title"
          aria-describedby="description"
        >
          <DialogTitle id="title">{"Disclaimer"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="description" sx={{ color: '#fff', fontSize: '14px' }}>
              This Application provides various resources to Learn and Upgrade technical skills. The content in this application belongs to original content creators.
            </DialogContentText>
            <DialogContentText id="description" sx={{ color: '#fff', fontSize: '14px' }}>
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
