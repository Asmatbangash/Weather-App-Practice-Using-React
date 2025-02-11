import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'

function InfoBox({info}){
  let Cold_URL = 'https://images.unsplash.com/photo-1612798288033-46ba71debc75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXIlMjBwaWN8ZW58MHx8MHx8fDA%3D';
  let Hot_URL = 'https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG90JTIwd2VhdGhlciUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D';
  let Rain_URL = 'https://images.unsplash.com/photo-1706931647497-e7b674718078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW4lMjB3ZWF0aGVyJTIwcGljfGVufDB8fDB8fHww';

    return (
        <div className="cardInfo">
        {info.city == "" ? <p>This City is not available in API.</p> :
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={info.humidity > 80 ? Rain_URL : (info.temp > 20 ? Hot_URL : Cold_URL)}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temprature : {info.temp}&deg;C</p>
              <p>Max-Temprature : {info.temp_max}&deg;C</p>
              <p>Min-Temprature : {info.temp_min}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>feels-like : {info.feels_like}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> }
      </div>
    )
}

export default InfoBox;