import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from "react-router-dom";
import { IconButton, SwipeableDrawer, ToggleButtonGroup, ToggleButton, Box, InputBase, Paper, Grid, Button, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import HorizontalItem from "./StoreItem/horizontal";
import { useSelector } from "react-redux";


import './catalogue.css';


const Catalogue = () => {
  //todays date




  const { stores } = useSelector((state) => state.stores);


  //states
  const [value, setValue] = useState("")
  const [category, setCategory] = useState('all');
  const [area, setArea] = useState('all');
  const [open, setOpen] = useState(false);
  const [displayData, setDisplayData] = useState(stores);
  const [status, setStatus] = useState('all');



  //filters
  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    let data = stores;
    if (category !== 'all') {
      data = data.filter((item) => {
        return item.category === category;
      })
    }
    if (area !== 'all') {
      data = data.filter((item) => {
        return item.area === area;
      })
    }
    if (status !== 'all') {
      data = data.filter((item) => {
        if (status === 'open') return (item.openDate <= today && item.closeDate >= today);
        else return (item.openDate > today || item.closeDate < today);
      })
    }
    if (value !== "") {
      data = data.filter((item) => {
        return ((item.name.toLowerCase().includes(value.toLowerCase())) || (item.area.toLowerCase().includes(value.toLowerCase())) || (item.category.toLowerCase().includes(value.toLowerCase())));
      })
    }
    setDisplayData([...data]);
  }, [value, stores, category, area, status])


  const handleChangeCategory = (event, newCat) => {
    setCategory(newCat);
  };






  const handleChangeStatus = (event, newStatus) => {
    setStatus(newStatus);
  };



  function openDrawer() {
    setOpen(true);
  }

  function clearFilters() {
    setCategory('all');
    setStatus('all');
    setArea('all');
  }




  //menu arrays

  const categoryData = ['all', 'grocery', 'butcher', 'baker', 'chemist', 'stationery']
  const areas = ['all', 'pune', 'thane', 'mumbai suburban', 'nashik', 'nagpur', 'ahmednagar']
  return (
    <>
      {/* main container */}
      <div className="catalogue-container">
        <Grid container spacing={1}>
          {/* ***********************left filter container******************** */}
          <Grid item md={3} className="main-left">
            <div className="catalogue-filter-container">
              <Paper className="filter-button-group-elevation">
                <ToggleButtonGroup
                  value={status}
                  exclusive
                  className="toggle-button-group"
                  onChange={handleChangeStatus}

                >
                  <ToggleButton className="toggle-button" variant="contained" value='all' color={"primary"}>All</ToggleButton>
                  <ToggleButton className="toggle-button" variant="contained" value="open" color={"success"}>Open</ToggleButton>
                  <ToggleButton className="toggle-button" variant="contained" value="close" color={"error"}>Closed</ToggleButton>

                </ToggleButtonGroup>
              </Paper>
              {/* *****category filter***** */}
              <div className="filter-store-category">
                <p className="store-category-heading">Category</p>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={category}
                  exclusive
                  onChange={handleChangeCategory}
                  className="store-category-button-group"
                >
                  {categoryData.map((item, index) => (
                    <ToggleButton className="store-category-button" value={item} aria-label="list" key={index}>
                      <p>{item}</p>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
              {/* area filter */}
              <div className="filter-store-area">
                <p className="store-category-heading">Area</p>
                <Paper elevation={2} className="area-paper">
                  <select className="filter-store-area-menu" value={area} onChange={(e) => { setArea(e.target.value) }}>
                    {
                      areas.map((item, index) => (
                        <option value={item} key={index} className="area-item">{item}</option>
                      ))
                    }
                  </select>
                </Paper>
              </div>
              <div className="clear-filters-button">
                <Button variant="contained" size="medium" color="error"
                  onClick={clearFilters}

                >
                  Clear All
                </Button>
              </div>
            </div>
          </Grid>

          {/* ******************************** items main right container********************** */}
          <Grid item xs={12} md={9}>
            <div className="catalogue-items-container">

              <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
                  {/* search bar */}
                  <div className="catalogue-search-bar">
                    <Paper
                      component="form"
                      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                      className="search-bar-paper"
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Stores"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <IconButton sx={{ p: '10px' }} aria-label="search" disabled>
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </Grid>
                {/* add store and filters buttons */}
                <Grid item md={3}>
                  <div className="catalogue-add-store-container">
                    <Link to="/addstore" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" size="large" endIcon={<AddBusinessIcon />} className="add-store-button" >
                        Add Store
                      </Button>
                    </Link>
                  </div>
                </Grid>
                <div className="small-screen-add-store-container">
                  <Button variant="contained" size="medium" color="secondary" endIcon={<FilterAltIcon />} className="add-store-button filter-button" onClick={openDrawer}>
                    Filters
                  </Button>
                  <Link to="/addstore" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="medium" endIcon={<AddBusinessIcon />} className="add-store-button" >
                      Add Store
                    </Button>
                  </Link>


                </div>
              </Grid>

              {/*******all stores*********/}
              <div className="catalogue-item-list">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={{ xs: 2, md: 2 }}>
                    {displayData.map((item, index) => (
                      <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                        <HorizontalItem item={item} />
                      </Grid>
                    ))}
                  </Grid>

                </Box>
              </div>
              {displayData.length === 0 && <img src="https://media4.giphy.com/media/9fAh7MfgrslSjg1Jk4/giphy.gif?cid=ecf05e471fyzg9b1qa5t4qx2txzcao80f9yt0a5fa0mu6z8j&rid=giphy.gif&ct=s" alt="empty icon" className="empty-icon" />}
            </div>
          </Grid>

        </Grid >
      </div >
      {/************************* drawer *******************************************/}
      <SwipeableDrawer anchor="bottom" open={open} onClose={() => setOpen(false)} className="drawer-menu" onOpen={() => setOpen(true)}>
        <div className="drawer-store-status">
          <Paper className="filter-button-group-elevation">
            <ToggleButtonGroup
              value={status}
              exclusive
              className="toggle-button-group"
              onChange={handleChangeStatus}
            >
              <ToggleButton className="toggle-button" variant="contained" value='all' color={"primary"}>All</ToggleButton>
              <ToggleButton className="toggle-button" variant="contained" value="open" color={"success"}>Open</ToggleButton>
              <ToggleButton className="toggle-button" variant="contained" value="close" color={"error"}>Closed</ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </div>
        <div className="drawer-dropdowns">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="drawer-dropdown-indv">

                <FormControl fullWidth className="drawer-dropdown-content">

                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }}
                    label="Category"

                  >
                    {categoryData.map((item, index) => (
                      <MenuItem value={item} style={{ textTransform: "capitalize" }} key={index}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="drawer-dropdown-indv">

                <FormControl fullWidth className="drawer-dropdown-content">
                  <InputLabel id="demo-simple-select-label">Area</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={area}
                    onChange={(e) => { setArea(e.target.value) }}
                    label="Area"

                  >
                    {areas.map((item, index) => (
                      <MenuItem value={item} style={{ textTransform: "capitalize" }} key={index}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <div className="clear-filters-button drawer-clear-filter-button">
            <Button variant="contained" size="medium" color="error" onClick={clearFilters}>
              Clear All
            </Button>
          </div>

        </div>
      </SwipeableDrawer>


    </>
  );
}
export default Catalogue;



