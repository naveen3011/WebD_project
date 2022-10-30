import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
const Home = () => {
  return (
    <>
      <Grid container spacing={1} className="home-container">
        <Grid item sm={12} md={6} lg={6}>
          <div className='home-main-text'>
            <h1>Find and Search <span style={{ color: "#1976d2", fontWeight: "bolder" }}>any store</span></h1>
            <Link
              to="/catalogue"
              style={{ color: "white", padding: 0 }}
              className="nav-navigator"
            >
              <Button variant="contained" size="large" color="secondary" className='home-button'>
                Explore Stores
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <img src="./images/main3.png" height={'500px'} className="main-image" />
        </Grid>
      </Grid>
    </>
  );
}
export default Home;