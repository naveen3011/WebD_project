import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { IconButton, Modal } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Tooltip from '@mui/material/Tooltip'
import { remove } from '../../../../features/storesSlice';
import AddUpdateStore from "../../Add-Update";

import { useDispatch } from "react-redux";
import "./storeitem.css"


const HorizontalItem = (props) => {
    const dispatch = useDispatch();
    const { item } = props;
    //todays date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    const [isopen, setisOpen] = useState(false);
    const handleOpen = () => setisOpen(true);
    const handleClose = () => setisOpen(false);
    function handleDelete(id) {
        dispatch(remove(id));
    }
    var open = "Open";
    if (item.closeDate < today || item.openDate > today) {
        open = "Closed";
    }
    //setting url for image based on category
    let categ = item.category;
    categ = categ.trim();
    const image = `./images/${categ}.png`;


    return (
        <>
            <Paper elevation={3} className="component-elevation">
                <div className="catalogue-vertical-component-left">
                    <Grid container>
                        <Grid item xs={7} md={7}>

                            <div className="catalogue-vertical-component">
                                <h3 className="store-name">{item.name}</h3>
                                <p className={`store-status ${open}`}>{open}</p>
                                <div className="store-type-location-container">
                                    <p className="store-data">{item.category} Shop</p>
                                    <p className="store-data">Location - {item.area}</p>
                                </div>
                                <div className="store-icon-container">
                                    <Tooltip title="Delete">
                                        <IconButton sx={{ p: '8px' }} aria-label="search" onClick={() => handleDelete(item.id)}>
                                            <DeleteIcon sx={{ fontSize: 20 }} className="delete-store-icon" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Update">
                                        <IconButton sx={{ p: '8px' }} aria-label="search" onClick={handleOpen}>
                                            <UpdateIcon sx={{ fontSize: 20 }} className="update-store-icon" />
                                        </IconButton>
                                    </Tooltip>

                                </div>

                            </div>

                        </Grid>
                        <Grid item xs={5} md={5}>
                            <div className="catalogue-vertical-component-right">
                                <img src={image} className="store-image" alt="store" />
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Paper>
            <Modal
                open={isopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <div style={{ backgroundColor: "red" }}></div> */}
                <AddUpdateStore name="Update Store" item={item} />

            </Modal>
        </>
    );
}


export default HorizontalItem;