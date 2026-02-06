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
   Chip,
   Breadcrumbs,
   Typography,
   Divider,
   List,
   ListItem,
   ListItemText,
   ListItemIcon
} from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';


const Pythoncourse = () => {
   const navigation = (
      <Breadcrumbs sx={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Typography color="inherit">Python</Typography>
      </Breadcrumbs>
   )

   const Links = (
      pythonData.map(data => {
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
                           target="_blank"
                           size="small"
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

   const moreLinks = (
      <>
         <Card sx={{
            backgroundColor: '#424242',
            color: 'white',
            marginTop: '10px',
            marginBottom: '10px',
            fontSize: '14px'
         }}>
            <CardContent>
               <h1>
                  <span className="PrimaryColor">Python</span>
               </h1>
               <p>Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>
            </CardContent>
         </Card>
         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Card sx={{
               backgroundColor: '#424242',
               color: 'white',
               marginTop: '10px',
               marginBottom: '10px',
               fontSize: '14px'
            }}>
               <CardContent>
                  <h2>Related Course</h2>
                  <Divider sx={{ color: 'white' }} />
                  <List component="nav" color="inherit">
                     <Link to="django" style={{ textDecoration: 'none' }}>
                        <ListItem component="div">
                           <ListItemIcon>
                              <Icon>library_books</Icon>
                           </ListItemIcon>
                           <ListItemText primary="Django" />
                        </ListItem>
                     </Link>
                  </List>
               </CardContent>
            </Card>
         </Box>
      </>
   )

   return (
      <div>
         <Container>
            <h1>
               <span className="PrimaryColor">Python</span> course page.
            </h1>
            {navigation}
            <Grid container spacing={3}>
               <Grid item xs={12} sm={12} md={8} sx={{ order: { xs: 2, sm: 1 } }}>
                  {Links}
               </Grid>
               <Grid item xs={12} sm={12} md={4} sx={{ order: { xs: 1, sm: 2 } }}>
                  {moreLinks}
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Pythoncourse;