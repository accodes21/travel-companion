import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return(
        <>
        <AppBar position="static">
            <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h5" sx={{display: 'block'}}>
                    Travel Companion
                </Typography>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
                    >
                    <Typography variant="h6" sx={{display:"block"}}>
                        Explore Places     
                    </Typography>
                    {/* <Autocomplete> */}
                        <div style={{
                            position: 'relative',
                            backgroundColor: "rgba(255,255,255,0.5)",
                            margin:"5px",
                            width: '100%',
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            height:"50px",
                            borderRadius: "10px",
                        }}>
                            <div style={{
                                color:"black",
                                display:"flex",
                                justifyContent:"center",
                                paddingLeft:"5px"
                            }}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search.." sx={{
                                padding: (1, 1, 1, 0), paddingLeft: `calc(1em + ${(4)}px)`, transition :('width'), width: '100%'
                            }}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
        </>
    )
};

export default Header;