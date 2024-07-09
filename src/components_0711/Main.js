import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './Navbar/Navbar';
import LeftPanel from './LeftPanel/LeftPanel';
import Footer from './Footer/Footer';
import Middle from './Middle/Middle';

const Main = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar></Navbar>
        </Grid>
        <Grid item xs={2}>
          <LeftPanel></LeftPanel>
        </Grid>
        <Grid item xs={10}>
          <Middle />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
