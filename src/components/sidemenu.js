import React from 'react'
import {
   Drawer,
   IconButton,
   Icon,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Divider
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import dataArray from '../localData/sidenavlinks.json';

const useStyles = makeStyles((theme) => ({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
   paper: {
      backgroundColor: '#424242'
   }
}));

const Sidenav = () => {
   const classes = useStyles();

   const [state, setState] = React.useState({
      left: false,
   });

   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const list = (anchor) => (
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
         })}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <div>
            <IconButton variant="contained" onClick={toggleDrawer("left", false)}>
               <Icon>close</Icon>
            </IconButton>
         </div>
         <Divider />
         <List>
            {dataArray.map((data) => (
               <Link to={data.route} key={data.id} style={{ textDecoration: 'none' }}>
                  <ListItem button key={data.id}>
                     <ListItemIcon>
                        <Icon>{data.icon}</Icon>
                     </ListItemIcon>
                     <ListItemText primary={data.title} />
                  </ListItem>
               </Link>
            ))}
         </List>
      </div>
   );

   return (
      <div>
         <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer("left", true)} color="inherit" aria-label="menu">
            <Icon>menu</Icon>
         </IconButton>
         <Drawer
            anchor="left"
            open={state["left"]}
            classes={{ paper: classes.paper }}
            onClose={toggleDrawer("left", false)}>
            {list("left")}
         </Drawer>
      </div>
   );
}

export default Sidenav;
