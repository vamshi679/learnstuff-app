import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Coursecard from './coursecard';
import '../App.css';
import dataArray from '../localData/cardData.json';

const Section1 = () => {

   return (
      <div>
         <Container>
            <Grid container spacing={2}>
               {
                  dataArray.map(dataObj => {
                     return (
                        <Grid key={dataObj.id} item md={3} sm={4} xs={6}>
                           <Link to={dataObj.route} style={{ textDecoration: 'none' }}>
                              <Coursecard key={dataObj.id} cardData={dataObj} />
                           </Link>
                        </Grid>
                     )
                  })
               }
            </Grid>
         </Container>
      </div>
   );
}

export default Section1;
