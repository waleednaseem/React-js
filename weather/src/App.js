import React from 'react';
import Title from "./component/Title";
import Form from "./component/Form";
import Weather from "./component/Weather";

const ApiKey = "0ad3142d9cf47263292e65d4fccda90d";

export default class App extends React.Component{
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
}

  getWeather= async (e) =>{
    
    e.preventDefault();
    const city= e.target.elements.City.value;
    const country= e.target.elements.Country.value;

    const Api_call = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${ApiKey}`);
    const data = await Api_call.json();
    if(country){
      console.log(data);
    this.setState({
      temperature: data.list[0].main.temp,
      city: data.name,
      country: data.list[0].sys.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
      error: ""
    });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please entry any value"
      });
    }
  }
  render(){
    return(
      <div>
        <Title />
        <Form getWeather={this.getWeather}/> 

        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}