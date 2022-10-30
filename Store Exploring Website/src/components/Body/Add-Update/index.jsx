import React, { useState } from "react";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, } from "@mui/material";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { add, update } from "../../../features/storesSlice";
import { useDispatch } from "react-redux";
import { createNotification } from "../../../Notification";
import "./addstore.css";

const AddUpdateStore = (props) => {
    const element = props.item;

    const dispatch = useDispatch();
    //todays date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    //states
    const [name, setName] = useState(element === undefined ? "" : element.name);
    const [category, setCategory] = useState(element === undefined ? "" : element.category);
    const [area, setArea] = useState(element === undefined ? "" : element.area);
    const [openDate, setOpenDate] = useState(element === undefined ? today : element.openDate);
    const [closeDate, setCloseDate] = useState(element === undefined ? today : element.closeDate);
    const [notarea, setNotarea] = useState(false);
    const [notcat, setNotcat] = useState(false);
    const [notname, setNotname] = useState(false);
    const [notdate, setNotdate] = useState(false);





    function handleUpdate() {

        const data = { name, area, category, openDate, closeDate };
        const complete = { id: element.id, data: data };
        dispatch(update(complete));
        createNotification("Store Updated Successfully", "success", 3000);
        clearAll();
    }
    function handleAdd() {
        const data = { name, area, category, openDate, closeDate };
        dispatch(add(data));
        createNotification("Store Added Successfully", "success", 3000);
        clearAll();
    }

    function handleAction() {
        if (element === undefined)
            handleAdd();
        else
            handleUpdate();


    }
    function clearAll() {
        setName(element === undefined ? "" : name);
        setCategory(element === undefined ? "" : category);
        setArea(element === undefined ? "" : area);
        setOpenDate(element === undefined ? today : openDate);
        setCloseDate(element === undefined ? today : closeDate);
        setNotdate(false);
        setNotname(false);
        setNotarea(false);
        setNotcat(false);
    }

    //validators
    function validation() {

        // name validation
        if (name === "" || !/^[A-Za-z\s]*$/.test(name)) {
            setNotname(true);
            return;
        }
        //category validation
        if (category === "") {
            setNotcat(true);
            return;
        }
        if (area === "") {
            setNotarea(true);
            return;
        }
        // alert(openDate);
        // alert(closeDate);
        if (closeDate < openDate) {
            setNotdate(true);
            return;
        }

        handleAction();
    }

    function nameSetter(e) {
        const val = e.target.value;
        setName(val);
        if (!/^[A-Za-z\s]*$/.test(val)) {
            setNotname(true);
        }
        else {
            setNotname(false);
        }
    }
    function areaSetter(e) {
        const val = e.target.value;
        setArea(val);
        if (val !== "") { setNotarea(false) }
        else {
            setNotarea(true);
        }
    }
    function catSetter(e) {
        const val = e.target.value;
        setCategory(val);
        if (val !== "") { setNotcat(false) }
        else {
            setNotcat(true);
        }
    }
    function closeDateSetter(e) {
        const val = e.target.value;
        // alert(val);
        setCloseDate(val);
        if (val >= openDate) {
            setNotdate(false);
        }
        else {
            setNotdate(true);
        }

    }

    const categoryData = ["grocery", "butcher", "baker", "chemist", "stationery"];
    const areas = ["pune", "thane", "mumbai suburban", "nashik", "nagpur", "ahmednagar"];
    return (

        <div className="add-store-container">
            <img src="./images/addstore.png" className="add-store-icon" alt="add icon"></img>
            <p className="add-store-header">{props.name}</p>
            <div className="add-store-inputs">
                <Grid container spacing={1} className="add-store-input-container">
                    <Grid item xs={12} className="add-store-alpha-inputs">
                        <TextField id="" label="Store Name*" variant="outlined" fullWidth
                            value={name} onChange={(e) => { nameSetter(e) }} error={notname} helperText={notname ? "required, only alphabets" : ""} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
                        <FormControl fullWidth className="drawer-dropdown-content" error={notcat} >
                            <InputLabel id="demo-simple-select-label">Category*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category"
                                value={category}
                                onChange={(e) => { catSetter(e) }}
                            >
                                {categoryData.map((item, index) => (
                                    <MenuItem
                                        value={item}
                                        style={{ textTransform: "capitalize" }}
                                        key={index}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                            {notcat && <FormHelperText>select category</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
                        <FormControl fullWidth className="drawer-dropdown-content" error={notarea} >
                            <InputLabel id="demo-simple-select-label">Area*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Area"
                                value={area}
                                onChange={(e) => { areaSetter(e) }}
                            >
                                {areas.map((item, index) => (
                                    <MenuItem
                                        value={item}
                                        style={{ textTransform: "capitalize" }}
                                        key={index}


                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                            {notarea && <FormHelperText>select area</FormHelperText>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
                        <TextField
                            id="date"
                            label="Open Date"
                            type="date"
                            value={openDate}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { setOpenDate(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
                        <TextField
                            id="date"
                            label="Close Date"
                            type="date"
                            error={notdate}
                            helperText={notdate ? "cannot be before opening date" : ""}
                            value={closeDate}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => { closeDateSetter(e) }}
                        />
                    </Grid>
                </Grid>
                <div className="add-store-button-new-page">
                    <Button variant="contained" size="large" color="secondary" endIcon={<AddBusinessIcon />} onClick={validation}>
                        {props.name}
                    </Button>
                </div>

            </div>

        </div>

    );
};

export default AddUpdateStore;
