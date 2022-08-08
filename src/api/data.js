import axios from "axios"


const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

  
const getPlacesData = async (sw,ne) => {
    try{
        const {data : {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng ,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'a6283d188amsh9b94b5c5ead046cp1962d7jsn0dedbb3a322b',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data);
        return data
    }
    catch (error){
        console.log("error");
    }
}

export default getPlacesData;