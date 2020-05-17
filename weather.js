class Weather {
  constructor(city) {
    this.api_key = '4db3d7e648470ba337eb2321bbb2566f';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`
    );
    const resData = await response.json();
    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
