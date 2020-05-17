class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-string');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    let cel = '&#8451';
    const mainBody = document.querySelector('body');
    const celcius = Math.round(weather.main.temp - 273.15);
    mainBody.style.background =
      "url('https://picsum.photos/1000/900') no-repeat center center/cover";
    const feelsLikeCel = Math.round(weather.main.feels_like - 273.15);
    console.log(weather.main.temp.toString());
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.innerHTML = `<span>${celcius} ${cel} </span>`;
    this.humidity.textContent = `Humidity ${weather.main.humidity}`;
    this.feelslike.innerHTML = `Feels like ${feelsLikeCel} ${cel}`;
    this.wind.textContent = `Wind Speed ${weather.wind.speed} m/s`;
    this.icon.setAttribute(
      'src',
      `https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
  }
}
