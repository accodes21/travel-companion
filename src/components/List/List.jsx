import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import PlaceInfo from "../PlaceInfo/PlaceInfo"

const List = () => {

    const [type, setType] = useState("resaurants")
    const [ratings, setRatings] = useState("")

    const places = [
        {name:"abcudol"},
        {name:"njiods"},
        {name:"enijsjoe"},
        {name:"abcudol"},
        {name:"njiods"},
        {name:"enijsjoe"},
        {name:"abcudol"},
        {name:"njiods"},
        {name:"enijsjoe"}
    ]

    return(
        <section style={{padding: '25px'}}>
            <Typography variant="h5">Resaurants, Hotels & Attractions around you</Typography>
            <FormControl sx={{margin: 1, minWidth: 120, marginBottom: '30px'}}>
                <InputLabel sx={{marginBottom:"40px"}}>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="resaurants">Resaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{margin: 1, minWidth: 120, marginBottom: '30px'}}>
                <InputLabel>Ratings</InputLabel>
                <Select value={ratings} onChange={(e) => setRatings(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} sx={{height: '75vh', overflow: 'auto'}}>
                {places?.map((place,i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceInfo place={place}/>
                    </Grid>
                ))}
            </Grid>
        </section>
    )
};

export default List;