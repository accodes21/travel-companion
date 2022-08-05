import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";


const Map = () => {

    const coords = {lat:0, lng:0}

    return(
        <section style={{height: '85vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={""}
                // onChange={""}
                // onChildClick={""}
            >

            </GoogleMapReact>
        </section>
    )
};

export default Map;