import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import axios from 'axios'


function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null)
  const [minTemp, setMinTemp] = useState(null)
  const [maxTemp, setMaxTemp] = useState(null)
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=32.2766&lon=35.0803&appid=6b8db3bd3a0de7f47025a682719d80e0')
      .then(function (response) {
        // handle success
        const city = (response.data.name)
        setCity(city)
        const responseTemp = Math.round(response.data.main.temp - 272.15)
        setTemp(responseTemp)
        const minTemp = Math.round(response.data.main.temp_min - 272.15)
        setMinTemp(minTemp);
        const maxTemp = Math.round(response.data.main.temp_max - 272.15)
        setMaxTemp(maxTemp)
        const responseWeather = (response.data.weather[0].description)
        setWeather(responseWeather)
        const iconCode = response.data.weather[0].icon;
        setIcon(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])
  return (
    <>
      <Container style={{ width: "410px" }} maxWidth="sm">
        <Card style={{ borderRadius: "15px", backgroundColor: "blue", color: "white" }} sx={{ minWidth: 275 }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} dir="rtl">
              <Typography gutterBottom sx={{ fontSize: 40 }}>
                {city}
              </Typography>
              <Typography style={{ marginRight: "20px" }} gutterBottom sx={{ fontSize: 25 }}>
                {new Date().toLocaleString()}
              </Typography>
            </div>
            <hr />
            {/* degree and desc*/}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="temp" dir="rtl">
                <Typography style={{ marginRight: "20px", textAlign: "right" }} gutterBottom sx={{ fontSize: 50 }}>
                  {temp}°
                </Typography>
                <img src={icon} alt="" />
                <CloudIcon style={{ fontSize: "150px" }}></CloudIcon>
              </div>

              <Typography style={{ marginRight: '20px' }} gutterBottom sx={{ fontSize: 25, textAlign: 'right' }}>
                {weather}
              </Typography>
              {/* min and max */}
              <div style={{
                marginRight: '20px', width: "130px", display: "flex", justifyContent: "space-between",
                marginLeft: "auto"
              }}>
                <h6>الصغرى:°{minTemp}</h6>
                <h3>|</h3>
                <h6>الكبرى:°{maxTemp}</h6>
              </div>

            </div>
            {/* degree and desc*/}
          </CardContent>
        </Card>
        <Button style={{ color: "blue", fontSize: "20px", width: "100%", justifyContent: "start" }} variant="text">English</Button>
      </Container>
    </>
  )
}

export default App
