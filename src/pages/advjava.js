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
   Chip,
   Breadcrumbs,
   Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';


const Advjava = () => {
   const navigation = (
      <Breadcrumbs sx={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Link color="inherit" to="java" style={{ textDecoration: 'none' }}>
            Java
         </Link>
         <Typography color="inherit">Advanced java</Typography>
      </Breadcrumbs>
   )

   const Links = (
      javadata1.map(data => {
         return (
            <div key={data.id}>
               <Card sx={{
                  backgroundColor: '#424242',
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '10px',
                  fontSize: '14px'
               }}>
                  <CardContent className="dfjcsb" sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                     <div className="dfjcc">
                        <Icon>movie</Icon>
                        <h3 className="ml-2">{data.title}</h3>
                        <Chip 
                           sx={{ marginLeft: '5px', marginRight: '5px' }} 
                           variant="outlined" 
                           size="small" 
                           label={data.duration} 
                        />
                     </div>
                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                     </Box>
                     <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton color="primary" href={data.url}><Icon>play_arrow</Icon></IconButton>
                     </Box>
                  </CardContent>
               </Card>
            </div>
         )
      })
   )

   const AboutPage = (
      <Card sx={{
         backgroundColor: '#424242',
         color: 'white',
         marginTop: '10px',
         marginBottom: '10px',
         fontSize: '14px'
      }}>
         <CardContent>
            <h1>
               <span className="PrimaryColor">Advanced java</span>
            </h1>
            <p>Advance Java. It is a part of Java programming language. It is an advanced technology or advance version of Java specially designed to develop web-based, network-centric or enterprise applications. It includes the concepts like Servlet, JSP, JDBC, RMI, Socket programming, etc. It is a specialization in specific domain.</p>
         </CardContent>
      </Card>
   )

   return (
      <div>
         <Container>
            <h1>
               <span className="PrimaryColor">Advanced java</span> course page.
            </h1>
            {navigation}
            <Grid container spacing={3}>
               <Grid item xs={12} sm={12} md={8} sx={{ order: { xs: 2, sm: 1 } }}>
                  {Links}
               </Grid>
               <Grid item xs={12} sm={12} md={4} sx={{ order: { xs: 1, sm: 2 } }}>
                  {AboutPage}
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Advjava;