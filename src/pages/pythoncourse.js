import React from 'react';
import pythonData from '../localData/pythonUrl.json';
import {
   Card,
   CardContent,
   // CardActionArea,
   Button,
   IconButton,
   Container,
   Icon,
   Grid,
   Box,
   Hidden,
   Chip,
   Breadcrumbs,
   Typography,
   Divider,
   List,
   ListItem,
   ListItemText,
   ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../App.css';


const useStyles = makeStyles((theme) => ({
   cardStyle: {
      backgroundColor: '#424242',
      color: 'white',
      marginTop: '10px',
      marginBottom: '10px',
      fontSize: '14px',
      paddingTop: '0px',
      paddingBottom: '0px',
   },
   anchorStyle: {
      textDecoration: 'none'
   },
   contentStyle: {
      paddingBottom: '0px'
   },
   chipStyle: {
      marginLeft: '5px',
      marginRight: "5px",
   }
}))


const Pythoncourse = () => {
   const classes = useStyles();

   const navigation = (
      <Breadcrumbs style={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" href="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Typography color="inherit">Python</Typography>
      </Breadcrumbs>
   )

   const Links = (
      pythonData.map(data => {
         return (
            <div key={data.id}>
               <Card className={classes.cardStyle}>
                  <CardContent className="dfjcsb" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                     <div className="dfjcc">
                        <Icon>movie</Icon>
                        <h3 className="ml-2">{data.title}</h3>
                        <Chip className={classes.chipStyle} variant="outlined" size="small" label={data.duration} />
                     </div>
                     <Hidden xsDown>
                        <Button
                           variant="contained"
                           disableElevation
                           color="primary"
                           target="_blank"
                           size="small"
                           href={data.url}
                        >
                           <span style={{ textTransform: 'none' }}>Watch video</span>
                        </Button>
                     </Hidden>
                     <Hidden smUp>
                        <IconButton color="primary" href={data.url}><Icon>play_arrow</Icon></IconButton>
                     </Hidden>
                  </CardContent>
               </Card>
            </div>
         )
      })
   )

   const moreLinks = (
      <Grid item sm={12} md={4}>
         <Card className={classes.cardStyle}>
            <CardContent>
               <h1>
                  <span className="PrimaryColor">Python</span>
               </h1>
               <p>Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>
            </CardContent>
         </Card>
         <Hidden xsDown>
            <Card className={classes.cardStyle}>
               <CardContent>
                  <h2>Related Course</h2>
                  <Divider style={{ color: 'white' }} />
                  <List component="nav" color="inherit">
                     <Link to="django" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                           <ListItemIcon>
                              <Icon>library_books</Icon>
                           </ListItemIcon>
                           <ListItemText primary="Django" />
                        </ListItem>
                     </Link>
                  </List>
               </CardContent>
            </Card>
         </Hidden>
      </Grid>
   )

   return (
      <div>
         <Container>
            <h1>
               <span className="PrimaryColor">Python</span> course page.
            </h1>
            {navigation}
            <Grid container spacing={3}>
               <Box clone order={{ xs: 2, sm: 1 }}>
                  <Grid item sm={12} md={8}>
                     {Links}
                  </Grid>
               </Box>
               <Box clone order={{ xs: 1, sm: 2 }}>
                  {moreLinks}
               </Box>
            </Grid>
         </Container>
      </div>
   )
}

export default Pythoncourse;