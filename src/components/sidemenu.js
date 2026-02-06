import React from 'react'
import {
   Drawer,
   IconButton,
   Icon,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Divider,
   Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import dataArray from '../localData/sidenavlinks.json';

const Sidenav = () => {
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
      <Box
         sx={{ 
            width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 
         }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <Box>
            <IconButton variant="contained" onClick={toggleDrawer("left", false)}>
               <Icon>close</Icon>
            </IconButton>
         </Box>
         <Divider />
         <List>
            {dataArray.map((data) => (
               <Link to={data.route} key={data.id} style={{ textDecoration: 'none' }}>
                  <ListItem component="div" key={data.id}>
                     <ListItemIcon>
                        <Icon>{data.icon}</Icon>
                     </ListItemIcon>
                     <ListItemText primary={data.title} />
                  </ListItem>
               </Link>
            ))}
         </List>
      </Box>
   );

   return (
      <div>
         <IconButton 
            edge="start" 
            sx={{ mr: 3 }} 
            onClick={toggleDrawer("left", true)} 
            color="inherit" 
            aria-label="menu"
         >
            <Icon>menu</Icon>
         </IconButton>
         <Drawer
            anchor="left"
            open={state["left"]}
            PaperProps={{
               sx: { backgroundColor: '#424242' }
            }}
            onClose={toggleDrawer("left", false)}
         >
            {list("left")}
         </Drawer>
      </div>
   );
}

export default Sidenav;
