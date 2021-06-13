import React from 'react';
import javaData from '../localData/javaUrls.json';
import {
   Card,
   CardContent,
   // CardActionArea,
   Button,
   Container,
   Icon,
   Box,
   Grid,
   Hidden,
   Chip,
   Breadcrumbs,
   Typography,
   Divider,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   IconButton
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


const Javacourse = () => {
   const classes = useStyles();

   const navigation = (
      <Breadcrumbs style={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" href="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Typography color="inherit">java</Typography>
      </Breadcrumbs>
   )

   const Links = (
      javaData.map(data => {
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
                           size="small"
                           target="_blank"
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
                  <span className="PrimaryColor">java</span>
               </h1>
               <p>Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. Java applets, which are less common than standalone Java applications, were commonly run in secure, sandboxed environments to provide many features of native applications through being embedded in HTML pages. Writing in the Java programming language is the primary way to produce code that will be deployed as byte code in a Java virtual machine; byte code compilers are also available for other languages, including Ada, JavaScript, Python, and Ruby. In addition, several languages have been designed to run natively on the JVM, including Clojure, Groovy, and Scala.</p>
            </CardContent>
         </Card>
         <Hidden xsDown>
            <Card className={classes.cardStyle}>
               <CardContent>
                  <h2>Related Course</h2>
                  <Divider style={{ color: 'white' }} />
                  <List component="nav" color="inherit">
                     <Link to="advjava" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                           <ListItemIcon>
                              <Icon>library_books</Icon>
                           </ListItemIcon>
                           <ListItemText primary="Advanced Java" />
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
               <span className="PrimaryColor">java</span> course page.
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

export default Javacourse;