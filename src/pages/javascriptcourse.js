import React from 'react';
// import cssData from '../localData/cssData.json';
import editorsData from '../localData/editorUrls.json';
import {
   Card,
   CardContent,
   // CardActionArea,
   Container,
   Icon,
   Box,
   Grid,
   // Hidden,
   Breadcrumbs,
   Typography,
   // Divider,
   Link,
   List,
   ListItem,
   ListItemText,
   ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
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
   }
}))

const Csscourse = () => {
   const classes = useStyles();
   // var websiteLinks = [...cssData[0]];
   // var youtubeLinks = [...cssData[1]];

   const header = (
      <h1>
         <span className="PrimaryColor">JavaScript</span> course page.
      </h1>
   )

   const navigation = (
      <Breadcrumbs style={{ marginTop: '10px' }} aria-label="breadcrumb">
         <Link color="inherit" to="/" href="/" style={{ textDecoration: 'none' }}>
            Home
         </Link>
         <Typography color="inherit">JavaScript</Typography>
      </Breadcrumbs>
   )

   const editors = (
      editorsData.map(data => {
         return (
            <List key={data.id} component="nav">
               <Link href={data.url} underline="none">
                  <ListItem button >
                     <ListItemIcon>
                        <Icon>link</Icon>
                     </ListItemIcon>
                     <ListItemText primary={data.title} />
                  </ListItem>
               </Link>
            </List>
         )
      })
   )

   // const Links = (
   //    websiteLinks.map(data => {
   //       return (
   //          <List key={data.id} component="nav">
   //             <Link href={data.url} underline="none">
   //                <ListItem button >
   //                   <ListItemIcon>
   //                      <Icon>link</Icon>
   //                   </ListItemIcon>
   //                   <ListItemText primary={data.title} />
   //                </ListItem>
   //             </Link>
   //          </List>
   //       )
   //    })
   // )
   // const yLinks = (
   //    youtubeLinks.map(data => {
   //       return (
   //          <List key={data.id} component="nav">
   //             <Link href={data.url} underline="none">
   //                <ListItem button >
   //                   <ListItemIcon>
   //                      <Icon>link</Icon>
   //                   </ListItemIcon>
   //                   <ListItemText primary={data.title} />
   //                </ListItem>
   //             </Link>
   //          </List>
   //       )
   //    })
   // )

   const mainLinks = (
      <Grid item xs={12} sm={6} md={7}>
         <h2 className="ml-2">Online Code Editors to practice JS</h2>
         <Card className={classes.cardStyle}>
            <CardContent style={{ paddingBottom: '0px', paddingTop: '0px' }}>
               {editors}
            </CardContent>
         </Card>
         {/* <h2 className="ml-2">Websites to Learn JS</h2>
         <Card className={classes.cardStyle}>
            <CardContent style={{ paddingBottom: '0px', paddingTop: '0px' }}>
               {Links}
            </CardContent>
         </Card>
         <h2 className="ml-2">Youtube Links</h2>
         <Card className={classes.cardStyle}>
            <CardContent style={{ paddingBottom: '0px', paddingTop: '0px' }}>
               {yLinks}
            </CardContent>
         </Card> */}
      </Grid>
   )

   const moreLinks = (
      <Grid item xs={12} sm={6} md={5}>
         <Card className={classes.cardStyle}>
            <CardContent>
               <h1>
                  <span className="PrimaryColor">JavaScript</span>
               </h1>
               <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
            </CardContent>
         </Card>
      </Grid>
   )

   return (
      <div>
         <Container>
            {header}
            {navigation}
            <Grid container spacing={3}>
               <Box clone order={{ xs: 2, sm: 1 }}>
                  {mainLinks}
               </Box>
               <Box clone order={{ xs: 1, sm: 2 }}>
                  {moreLinks}
               </Box>
            </Grid>
         </Container>
      </div>
   )
}

export default Csscourse;