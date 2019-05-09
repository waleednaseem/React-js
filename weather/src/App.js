import React from 'react';
import Title from "./component/Title";
import UserInput from "./component/UserInput";
import Weather from "./component/Weather";
import axios from 'axios';
import { WEATHER_URL } from './const';

class App extends React.Component {
  state = {
    city: null,
    temperature: null
  };

  getWeatherData(city, country) {
    const url = WEATHER_URL(city, country);
    axios.get(url).then(({ data: { list: responseList } }) => {
      if (responseList.length > 0) {
        this.setState({ city: responseList[0].name, temperature: responseList[0].main.temp })
      }
    }).catch((err) => { console.log('error') });
  };

  handleOnClick(city, country) {
    if (city !== undefined && country !== undefined) {
      this.getWeatherData(city, country);
    }
  }

  render() {
    return (
      <div>
        <Title />
        <UserInput onClick={this.handleOnClick.bind(this)} />
        {this.state.city && this.state.temperature && <Weather {...this.state} />}
      </div>
    );
  }
}

export default App;
