import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '@fontsource/roboto/700.css';
import './SearchBox.css';
import { useAutocomplete } from '@mui/material';
import { useState } from 'react';

function SearchBox({weatherFunc}){
    let [city, setCity] = useState();
   let apiURL = "https://api.openweathermap.org/data/2.5/weather";
   let apiKey = "3ce45f16d03cf19d7d51325c84a644ec";
   
   let handlOnChange = (event) =>{
    setCity(event.target.value)
   }

   let handlApi = async () =>{
       let response = await fetch(`${apiURL}?q=${city}&appid=${apiKey}&units=matric`);
       let jsonResponse = await response.json();
       let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like
       }
       return result;
   }

    let handlOnSubmitForm = async (event) =>{
     event.preventDefault();
     setCity('');
     let newInfo = await handlApi();
     weatherFunc(newInfo);
    }
return(
    <div className='SearchBar'>
    <form onSubmit={handlOnSubmitForm}>
    <TextField id="City" label="City" variant="outlined" value={city} onChange={handlOnChange} required/>
    <br />
    <br />
    <Button variant="contained" type='submit'>Search</Button>
    </form>
    </div>
)
}
export default SearchBox;