import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

function WeatherApp(){
    let [img, setImg] = useState('');
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Hangu",
        temp: 25.5,
        temp_max: 33.3,
        temp_min: 20.2,
        humidity: 50,
        feels_like: 'good'
    })
 
    let weatherFunc = (result) =>{
        setWeatherInfo(result)
        setImg(imgURL)
    }

    return(
       <div style={{textAlign: 'center'}}>
        <h2>Check the Weather of Available City.</h2>
        <SearchBox weatherFunc={weatherFunc}/>
        <InfoBox info={weatherInfo} img={img}/>
       </div>
    )
}

export default WeatherApp;