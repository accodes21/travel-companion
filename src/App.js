import { useState, useEffect } from 'react';
import './App.css';
import { CssBaseline, Grid } from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import  getPlacesData  from './api/data';


function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude})
    })
  },[])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
      })
  }, [coordinates,bounds])
  

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:"100%"}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
