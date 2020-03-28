import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Whether from "./component/whether.component";
import "weather-icons/css/weather-icons.css";
import Axios from "axios";
import Forml from "./component/form.component";
const API_KEY = "7389684a96880c4bfc057d73a8062998";
//api.openweathermap.org/data/2.5/weather?q=London,uk
class App extends Component {
  constructor(props) {
    super(props);
    // this.getWhether();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };

    // this.getWhether();
    this.whethericon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
  getWhether = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (country && city) {
      const api_get = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );

      const response = await api_get.json();
      // console.log(response);

      this.setState({
        city: `${response.name} ,${response.sys.country}`,
        // city: response.name,
        // country: response.sys.country,
        // icon: this.whethericon.Thunderstorm,
        celsius: this.calCelsius(response.main.temp),
        description: response.weather[0].description,
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        error: false
      });
      console.log(response);
      this.get_WeatherIcon(this.whethericon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  calCelsius(temp) {
    let cell = temp - 273.15;
    return cell;
  }

  render() {
    return (
      <div className="container">
        <Forml loadwhether={this.getWhether} error={this.state.error} />
        <Whether
          city={this.state.city}
          country={this.state.country}
          whethericon={this.state.icon}
          celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
