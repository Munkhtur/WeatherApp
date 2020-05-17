const storage = new Storage();
const weatherLoc = storage.getLocationData();
const weather = new Weather(weatherLoc.city);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);
      return ui.paint(result);
    })
    .catch((err) => console.log(err));
}
