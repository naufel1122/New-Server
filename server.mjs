console.log("this is express server");

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

// http://192.168.1.106:3000

app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send('Hello World!' + new Date())
})
app.get('/profile', (req, res) => {
  console.log('this is profile !', new Date());
  res.send('this is  profile !' + new Date())
})

app.get('/weather/:cityName', (req, res) => {
  console.log('this is profile !', new Date());
  let weatherData = {
    karachi :{
      city : 'karachi',
      tempInC : 30,
      humidity : 56 ,
      high : 35,
      low : 25
    },
    london : {
      city : 'london',
      tempInC : 38,
      humidity : 54 ,
      high : 42,
      low : 21
    }
  }
  
  let userInputCityName = req.params.cityName.toLowerCase(); 
  console.log('userInputCityName:',userInputCityName);

  let weatherDataToSend = weatherData[userInputCityName]
  
  if( weatherDataToSend){
    res.send( weatherDataToSend);
  }else{
    res.status(404)
    .send(`weather data is not available`);
  }

})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})