import React from "react";

import Title from "./components/Title";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "Input the api key here";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country:  undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city:undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        wind: undefined,
        description: undefined,
        error: "Please Enter The Name Of The City And Count"
      });
    }
  }
  render(){
    return(
      <div>
                 <Title/>
         <div className="field-group">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidty}
                    pressure={this.state.pressure}
                    wind={this.state.wind}
                    description={this.state.description}
                    error={this.state.error}
                  />
         </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
