// import { students, total } from './students';
// console.log(students, total)

// import {add, minus} from './calculator';
// console.log(add(3, 5));
// console.log(minus(3, 5));

// import multiply from './calculator'
// console.log(multiply(5, 5));


// import Entity from './Entity';

// class Hobbit extends Entity{
//   constructor(name, height) {
//     super(name, height)
//   }
//   greet() {
//     console.log(`Hello! I'm ${this.name} from the Shire!`)
//   }
// }


// let Frodo = new Hobbit("Frodo Baggins", 4.5)
// // console.log(Frodo)

// Frodo.greet()



// USING OPENWEATHERMAP.ORG api for this!!//
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = "f6bb12269e0c766b069d2625327be2e2"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If I change the below city name, it will also change in the API on line 58//
      // That way I can check weather and description in several cities//
      city: "New York",
      description: ""
    }
  }

// Allows us to run code when the app fully renders on the screen
  componentDidMount() {
    this.grabWeather(this.state.city);
  }


// For the http link I went to API on the site, and then copied one of the example API calls//
// I had to manually add the http:// part, AND I had to add the APPID=${api_key}& part//
  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.weather[0].description})
      });
  }


  render() {
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
