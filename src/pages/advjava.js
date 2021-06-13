import React from 'react';
import javadata1 from '../localData/advjava.json';
import {
   Card,
   CardContent,
   // CardActionArea,
   Button,
   IconButton,
   Container,
   Icon,
   Box,
   Grid,
   Hidden,
   Chip,
   Breadcrumbs,
   Typography
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


const Advjava = () => {
   const classes = useStyles();

   const navigation = (
      <Breadcrumbs style={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" href="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Link color="inherit" to="java" href="/" style={{ textDecoration: 'none' }}>
            Java
         </Link>
         <Typography color="inherit">Advanced java</Typography>
      </Breadcrumbs>
   )

   const Links = (
      javadata1.map(data => {
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

   const AboutPage = (
      <Grid item sm={12} md={4}>
         <Card className={classes.cardStyle}>
            <CardContent>
               <h1>
                  <span className="PrimaryColor">Advanced java</span>
               </h1>
               <p>Advance Java. It is a part of Java programming language. It is an advanced technology or advance version of Java specially designed to develop web-based, network-centric or enterprise applications. It includes the concepts like Servlet, JSP, JDBC, RMI, Socket programming, etc. It is a specialization in specific domain.</p>
            </CardContent>
         </Card>
      </Grid>
   )

   return (
      <div>
         <Container>
            <h1>
               <span className="PrimaryColor">Advanced java</span> course page.
            </h1>
            {navigation}
            <Grid container spacing={3}>
               <Box clone order={{ xs: 2, sm: 1 }}>
                  <Grid item sm={12} md={8}>
                     {Links}
                  </Grid>
               </Box>
               <Box clone order={{ xs: 1, sm: 2 }}>
                  {AboutPage}
               </Box>

            </Grid>
         </Container>
      </div>
   )
}

export default Advjava;